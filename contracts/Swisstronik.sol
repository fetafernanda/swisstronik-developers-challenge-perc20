// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./PERC20.sol";

/**
 * @dev Sample implementation of the {PERC20} contract.
 */
contract Swisstronik is PERC20 {
    constructor() PERC20("FETA", "FT") {}

    /// @dev Wraps SWTR to PSWTR.
    receive() external payable {
        _mint(_msgSender(), msg.value);
    }

    /**
     * @dev Mint new tokens.
     */
    function mint() public {
        _mint(msg.sender, 10*10**18);
    }

    /**
     * @dev Transfer tokens.
     * @param recipient The address to transfer tokens to.
     * @param amount The amount of tokens to transfer.
     */
    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }
}
