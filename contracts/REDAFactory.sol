pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

/**
 * @title ERC721 Non-Fungible Token Standard basic implementation
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract REDAFactory {
  
  using SafeMath for uint256;

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
    _createReda(_uri, _meta);
  }

  function changeUri(uint _redaId, string _newUri) external onlyOwnerOf(_redaId) {
    redas[_redaId].uri = _newUri;
  }

  function changeMeta(uint _redaId, string _newMeta) external onlyOwnerOf(_redaId) {
    redas[_redaId].meta = _newMeta;
  }

  function getRedasByOwner(address _owner) external view returns(uint[]) {
    uint[] memory result = new uint[](ownerRedaCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < redas.length; i++) {
      if (redaToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }
  
}
