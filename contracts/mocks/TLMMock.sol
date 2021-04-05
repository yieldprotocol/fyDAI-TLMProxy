// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.6.7;
import "./ERC20Mock.sol";
import "@yield-protocol/vault-v1/contracts/interfaces/IFYDai.sol";

contract GemJoinMock {
    
    IFYDai public immutable gem;

    constructor(IFYDai gem_) public {
        gem = gem_;
    }

    function pull(address from, uint256 amount) public {
        gem.transferFrom(from, address(this), amount);
    }
}

contract TLMMock  {

    bytes32 public constant FYDAI = "FYDAI";

    ERC20Mock public immutable dai;
    IFYDai public immutable gem;
    
    struct Ilk {
        address gemJoin;
        uint256 yield;
    }
    mapping (bytes32 => Ilk) public ilks; // Registered maturing gems


    constructor(ERC20Mock dai_, IFYDai fyDai_) public {
        dai = dai_;
        gem = fyDai_;
        ilks[FYDAI].gemJoin = address(new GemJoinMock(fyDai_));
    }

    function sellGem(bytes32 ilk, address usr, uint256 gemAmt)
        external returns(uint256)
    {
        require(ilk == FYDAI);
        uint256 daiAmt = gemAmt;

        GemJoinMock(ilks[FYDAI].gemJoin).pull(msg.sender, gemAmt);
        dai.mint(usr, daiAmt);
        return daiAmt;
    }
}
