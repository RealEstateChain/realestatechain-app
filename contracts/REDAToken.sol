pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol';
import './REDAFactory.sol';

/**
 * @title ERC721 Non-Fungible Token Standard basic implementation
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract REDAToken is REDAFactory, ERC721BasicToken {

  using SafeMath for uint256;

  string public constant name = "Real Estate Digital Asset";
  string public constant symbol = "REDA";

  mapping (uint => address) redaApprovals;

  function balanceOf(address _owner) public view returns (uint256 _balance) {
    return ownerRedaCount[_owner];
  }

  function ownerOf(uint256 _tokenId) public view returns (address _owner) {
    return redaToOwner[_tokenId];
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    ownerRedaCount[_to] = ownerRedaCount[_to].add(1);
    ownerRedaCount[msg.sender] = ownerRedaCount[msg.sender].sub(1);
    redaToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }

  function transfer(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    _transfer(msg.sender, _to, _tokenId);
  }

  function approve(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    redaApprovals[_tokenId] = _to;
    emit Approval(msg.sender, _to, _tokenId);
  }

  function takeOwnership(uint256 _tokenId) public {
    require(redaApprovals[_tokenId] == msg.sender);
    address owner = ownerOf(_tokenId);
    _transfer(owner, msg.sender, _tokenId);
  }
}
