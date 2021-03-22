// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.6.10;

import "@openzeppelin/contracts/math/SafeMath.sol"; // TODO: Bring into @yield-protocol/utils
import "@yield-protocol/utils/contracts/math/DecimalMath.sol"; // TODO: Make into library
import "@yield-protocol/utils/contracts/utils/YieldAuth.sol";
import "@yield-protocol/vault-v1/contracts/interfaces/IController.sol";
import "@yield-protocol/dss-tlm/src/DssTlmAbstract.sol";

contract TLMProxy is DecimalMath {
    using SafeMath for uint256;
    //using RoundingMath for uint256;
    using YieldAuth for IController;

    //event BorrowedDai(address indexed user);
    //not used for now but perhaps we will emit it later

    IController public immutable controller;

    DssTlmAbstract public immutable tlm;
    
    bytes32 public constant WETH = "ETH-A";
    bytes32 public constant FYDAI = "FYDAI";

    constructor(IController _controller, DssTlmAbstract tlm_) public {
        controller = _controller;
        tlm = tlm_;
        }

    /// @dev Borrow fyDai from Controller, sell it immediately for Dai in Maker's TLM, and return the received Dai amount
    /// @param collateral Valid collateral type.
    /// @param maturity Maturity of an added series
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
        tlm.sellGem(ilk, to, fyDaiToBorrow);
    }

    /// @dev Borrow fyDai from Controller, sell it immediately for Dai in a pool, and sell the Dai for USDC in Maker's PSM, for a maximum fyDai debt.
    /// Must have approved the operator with `controller.addDelegate(borrowProxy.address)` or with `borrowDaiForMaximumFYDaiWithSignature`.
    /// Caller must have called `borrowDaiForMaximumFYDaiWithSignature` at least once before to set proxy approvals.
    /// @param collateral Valid collateral type.
    /// @param maturity Maturity of an added series
    /// @param to Wallet to send the resulting Dai to.
    /// @param fyDaiToBorrow Exact amount of fyDai that should be obtained.
    /// @param controllerSig packed signature for delegation of this proxy in the controller. Ignored if '0x'.
    function borrowWithSignature(
        IPool pool,
        bytes32 collateral,
        uint256 maturity,
        address to,
        uint256 fyDaiToBorrow,
        
        bytes memory controllerSig
    )
        public 
        returns (uint256)
    {
        // TODO: 
    }
}