// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.6.7;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@yield-protocol/utils/contracts/access/Delegable.sol";
import "./FYDaiMock.sol";

contract TreasuryMock {
    
    IERC20 public immutable weth;

    constructor(IERC20 weth_) public {
        weth = weth_;
    }

    function pull(address from, uint256 amount) public {
        weth.transferFrom(from, address(this), amount);
    }
}

contract ControllerMock is Delegable  {

    bytes32 public constant WETH = "ETH-A";

    TreasuryMock public immutable treasury;
    IERC20 public immutable weth;
    mapping(bytes32 => bool) public posted;
    mapping(uint256 => FYDaiMock) public series;

    constructor(IERC20 weth_, FYDaiMock[] memory series_) public {
        treasury = new TreasuryMock(weth_);

        weth = weth_;
        for (uint i = 0 ; i < series_.length; i++) {
            series[series_[i].maturity()] = series_[i];
        }
    }

    modifier validCollateral(bytes32 collateral) {
        require(
            collateral == WETH,
            "Controller: Unrecognized collateral"
        );
        _;
    }

    modifier validSeries(uint256 maturity) {
        require(
            series[maturity] != FYDaiMock(address(0)),
            "Controller: Unrecognized series"
        );
        _;
    }

    function post(bytes32 collateral, address from, address to, uint256 amount)
        public
        validCollateral(collateral)
        onlyHolderOrDelegate(from, "Controller: Only Holder Or Delegate")
    {
        treasury.pull(from, amount);
        posted[collateral] = true;
    }

    function borrow(bytes32 collateral, uint256 maturity, address from, address to, uint256 fyDaiAmount)
        public
        validCollateral(collateral)
        validSeries(maturity)
        onlyHolderOrDelegate(from, "Controller: Only Holder Or Delegate")
    {
        require(posted[collateral], "Controller: Too much debt");
        series[maturity].mint(to, fyDaiAmount);
    }
}
