//SPDX-License-Identifier: Unlicense
// Test Token
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract ERC20T is Context, ERC20Burnable {
    address _tokenOwner;
    constructor(string memory symbol_, string memory description_) ERC20(description_, symbol_) {
        _tokenOwner = _msgSender();
    }

    function mint(uint256 amount_) public {
        _mint(_tokenOwner,  amount_); 
    }

    function destruct() external {
        require(_tokenOwner == _msgSender(),"destruct is allowed only to Token Owner.");
        address payable addr = payable(_tokenOwner);
        selfdestruct(addr);
    }
}