// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.6.7;
import "@yield-protocol/utils/contracts/token/ERC20Permit.sol";


contract ERC20Mock is ERC20Permit  {

    constructor(
        string memory name,
        string memory symbol
    ) public ERC20Permit(name, symbol) { }

    /// @dev Give tokens to whoever asks for them.
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
