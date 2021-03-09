// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.6.7;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@yield-protocol/utils/contracts/access/Delegable.sol";
import "@yield-protocol/vault-v1/contracts/interfaces/IFYDai.sol";

contract ControllerMock is Delegable  {

    bytes32 public constant WETH = "ETH-A";

    IERC20 public immutable weth;
    mapping(bytes32 => bool) posted;
    mapping(uint256 => IFYDai) fyDais;

    constructor(IERC20 weth_, IFYDai[] memory fyDais_) public {
        weth = weth_;
        for (uint i = 0 ; i < fyDais_.length; i++) {
            fyDais[fyDais_[i].maturity()] = fyDais_[i];
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
            fyDais[maturity] != IFYDai(address(0)),
            "Controller: Unrecognized series"
        );
        _;
    }

    function post(bytes32 collateral, address from, address to, uint256 amount)
        public
        validCollateral(collateral)
        onlyHolderOrDelegate(from, "Controller: Only Holder Or Delegate")
    {
        if (collateral == WETH) weth.transferFrom(from, address(this), amount);
        posted[collateral] = true;
    }

    function borrow(bytes32 collateral, uint256 maturity, address from, address to, uint256 fyDaiAmount)
        public
        validCollateral(collateral)
        validSeries(maturity)
        onlyHolderOrDelegate(from, "Controller: Only Holder Or Delegate")
    {
        require(posted[collateral], "Controller: Too much debt");
        fyDais[maturity].mint(to, fyDaiAmount);
    }
}
