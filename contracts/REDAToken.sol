pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol';


/**
 * @title ERC721 Non-Fungible Token Standard basic implementation
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract REDAToken is ERC721BasicToken {

  using SafeMath for uint256;

  string public constant name = "Real Estate Decentralized Asset";
  string public constant symbol = "REDA";

  mapping (uint => address) redaApprovals;

  modifier onlyOwnerOf(uint _redaId) {
    require(msg.sender == redaToOwner[_redaId]);
    _;
  }

  event NewReda(uint redaId, string uri, string meta);

  struct REDA {
    string uri;
    string meta;
  }

  REDA[] public redas;

  mapping (uint => address) public redaToOwner;
  mapping (address => uint) ownerRedaCount;

  function _createReda(string _uri, string _meta) internal {
    uint id = redas.push(REDA(_uri, _meta)) - 1;
    redaToOwner[id] = msg.sender;
    ownerRedaCount[msg.sender] = ownerRedaCount[msg.sender].add(1);
    emit NewReda(id, _uri, _meta);
  }

  function createREDA(string _uri, string _meta) public {
    require(ownerRedaCount[msg.sender] == 0);
    _createReda(_uri, _meta);
  }

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
