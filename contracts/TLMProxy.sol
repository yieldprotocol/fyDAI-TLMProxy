// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.6.10;

import "@yield-protocol/utils/contracts/utils/YieldAuth.sol";
import "@yield-protocol/vault-v1/contracts/interfaces/IFYDai.sol";
import "@yield-protocol/vault-v1/contracts/interfaces/IController.sol";

interface DssTlmAbstract {
    function ilks(bytes32 ilk) external view returns(address, uint256);
    function sellGem(bytes32 ilk, address usr, uint256 gemAmt) external returns(uint256);
}

interface AuthGemJoinAbstract {
    function gem() external view returns (MaturingGemAbstract);
}

interface MaturingGemAbstract {
}

contract TLMProxy {
    using YieldAuth for IFYDai;
    using YieldAuth for IController;

    event SeriesRegistered(uint256 indexed maturity, bytes32 indexed ilk, address fyDai, address gemJoin);

    IController public immutable controller;
    DssTlmAbstract public immutable tlm;
    TLMProxy public immutable tlmProxy;
    
    mapping (uint256 => mapping(bytes32 => IFYDai)) public assets;  // Maturities that have a corresponding ilk in the TLM
    mapping (bytes32 => address) public gemJoins;                  // Cache of TLM gemJoins

    constructor(IController _controller, DssTlmAbstract tlm_) public {
        controller = _controller;
        tlm = tlm_;
        tlmProxy = this;
    }

    /// @dev Register an FYDai for sale in the TLM. Anyone can do it.
    function register(uint256 maturity, bytes32 ilk) public {
        IFYDai fyDai = controller.series(maturity);
        require (address(fyDai) != address(0), "Series not found");
        
        // Check the maturity and ilk match
        (address gemJoin,) = tlm.ilks(ilk);
        require (gemJoin != address(0), "Ilk not found");

        require(
            address(AuthGemJoinAbstract(gemJoin).gem()) == address(fyDai),
            "Mismatched FYDai and Gem"
        );

        // Register the correspondence and gemJoin
        assets[maturity][ilk] = fyDai;
        gemJoins[ilk] = gemJoin;

        emit SeriesRegistered(maturity, ilk, address(fyDai), gemJoin);
    }

    /// @dev Fetch an FYDai from its maturity and ilk.
    function fetch(uint256 maturity, bytes32 ilk) public view returns(IFYDai, address) {
        return (assets[maturity][ilk], gemJoins[ilk]);
    }

    /// @dev Borrow fyDai from Controller, sell it immediately for Dai in Maker's TLM for a maximum fyDai debt.
    /// Must have approved the operator with `controller.addDelegate(tlmProxy.address)` or with `borrowWithSignature`.
    /// @param collateral Valid collateral type.
    /// @param maturity Maturity of an added series
    /// @param ilk Ilk identifier of a series available in the TLM
    /// @param to Wallet to send the resulting Dai to.
    /// @param fyDaiToBorrow Exact amount of fyDai that should be borrowed.
    function borrow(
        bytes32 collateral, 
        uint256 maturity,
        bytes32 ilk,
        address to, 
        uint256 fyDaiToBorrow
    )
        public 
        returns (uint256)
    {
        controller.borrow(collateral, maturity, msg.sender, address(this), fyDaiToBorrow);
        (IFYDai fyDai, address gemJoin) = tlmProxy.fetch(maturity, ilk);
        require (address(fyDai) != address(0), "Mismatched maturity and ilk");

        fyDai.approve(gemJoin, fyDaiToBorrow);
        return tlm.sellGem(ilk, to, fyDaiToBorrow);
    }

    /// @dev Borrow fyDai from Controller, sell it immediately for Dai in Maker's TLM for a maximum fyDai debt.
    /// @param collateral Valid collateral type.
    /// @param maturity Maturity of an added series
    /// @param ilk Ilk identifier of a series available in the TLM
    /// @param to Wallet to send the resulting Dai to.
    /// @param fyDaiToBorrow Exact amount of fyDai that should be borrowed.
    /// @param controllerSig packed signature for delegation of this proxy in the controller. Ignored if '0x'.
    function borrowWithSignature(
        bytes32 collateral,
        uint256 maturity,
        bytes32 ilk,
        address to, 
        uint256 fyDaiToBorrow,
        bytes memory controllerSig
    )
        public
        returns (uint256)
    {
        if (controllerSig.length > 0) controller.addDelegatePacked(controllerSig);
        return borrow(collateral, maturity, ilk, to, fyDaiToBorrow);
    }
}