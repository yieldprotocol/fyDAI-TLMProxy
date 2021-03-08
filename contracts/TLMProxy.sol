// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.6.10;

import "@openzeppelin/contracts/math/SafeMath.sol"; // TODO: Bring into @yield-protocol/utils
import "@yield-protocol/utils/contracts/math/DecimalMath.sol"; // TODO: Make into library
import "@yield-protocol/utils/contracts/utils/SafeCast.sol";
import "@yield-protocol/utils/contracts/utils/YieldAuth.sol";
import "@yield-protocol/vault-v1/contracts/interfaces/IFYDai.sol";
import "@yield-protocol/vault-v1/contracts/interfaces/ITreasury.sol";
import "@yield-protocol/vault-v1/contracts/interfaces/IController.sol";
import "@yield-protocol/yieldspace-v1/contracts/interfaces/IPool.sol";
import "dss-interfaces/src/dss/AuthGemJoinAbstract.sol";
import "dss-interfaces/src/dss/DaiAbstract.sol";
import "./interfaces/DssTlmAbstract.sol";


library RoundingMath {
    function divrup(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require (y > 0, "TLMProxy: Division by zero");
        return x % y == 0 ? x / y : x / y + 1;
    }
}

interface IEventRelayer {
    enum EventType {BorrowedUSDCType, RepaidDebtEarlyType, RepaidDebtMatureType}
    function relay(EventType eventType, address user) external;
}

contract TLMProxy is IEventRelayer, DecimalMath {
    using SafeCast for uint256;
    using SafeMath for uint256;
    using RoundingMath for uint256;
    using YieldAuth for DaiAbstract;
    using YieldAuth for IFYDai;
    using YieldAuth for IController;
    using YieldAuth for IPool;

    event BorrowedDai(address indexed user);
    event RepaidDebtEarly(address indexed user);
    event RepaidDebtMature(address indexed user);

    DaiAbstract public immutable dai;
    IController public immutable controller;
    DssTlmAbstract public immutable tlm;
    //IEventRelayer public immutable usdcProxy;

    address public immutable treasury;
    
    bytes32 public constant WETH = "ETH-A";

    constructor(IController _controller, DssTlmAbstract tlm_) public {
        ITreasury _treasury = _controller.treasury();
        dai = _treasury.dai();
        treasury = address(_treasury);
        controller = _controller;
        tlm = tlm_;
        //usdcProxy = IEventRelayer(address(this)); // This contract has two functions, as itself, and delegatecalled by a dsproxy.
    }

    /// @dev Workaround to emit events from the USDCProxy contract when being executed through a dsProxy delegate call.
    /// Not sure if this is still needed 
    function relay(EventType eventType, address user) public override {
        if (eventType == EventType.BorrowedUSDCType) emit BorrowedUSDC(user);
        if (eventType == EventType.RepaidDebtEarlyType) emit RepaidDebtEarly(user);
        if (eventType == EventType.RepaidDebtMatureType) emit RepaidDebtMature(user);
    }


    /// @dev Borrow fyDai from Controller, sell it immediately for Dai in Maker's TLM for a maximum fyDai debt.
    /// Must have approved the operator with `controller.addDelegate(borrowProxy.address)` or with `borrowDaiForMaximumFYDaiWithSignature`.
    /// Caller must have called `borrowDaiForMaximumFYDaiWithSignature` at least once before to set proxy approvals.
    /// @param collateral Valid collateral type.
    /// @param maturity Maturity of an added series
    /// @param to Wallet to send the resulting Dai to.
    /// @param fyDaiToBorrow Exact amount of fyDai that should be borrowed.
    function borrow(
        bytes32 collateral, 
        uint256 maturity, 
        address to, 
        uint256 fyDaiToBorrow
    )
        public 
        returns (uint256)
    {
        controller.borrow(collateral, maturity, msg.sender, address(this), fyDaiToBorrow);

        //not sure if this is called correctly but this is how it's done in this example
        //https://github.com/yieldprotocol/dss-tlm#approvals
        //sellGem(bytes32 ilk, address usr, uint256 gemAmt)
        tsm.sellGem(to, fyDaiToBorrow);

        //TODO: return the amount of dai generated from the sale instead
        return fyDaiToBorrow;

    }
}