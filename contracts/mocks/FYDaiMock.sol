// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.6.7;
import "./ERC20Mock.sol";


contract FYDaiMock is ERC20Mock  {

    uint256 public immutable maturity;

    constructor(
        string memory name,
        string memory symbol,
        uint256 maturity_
    ) public ERC20Mock(name, symbol) {
        maturity = maturity_;
    }
}
