pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol';


/**
 * @title ERC721 Non-Fungible Token Standard basic implementation
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract REZToken is MintableToken {
  string public constant name = "Real Estate Chain Token";
  string public constant symbol = "REZ";
  uint8 public constant decimals = 18;
}
