var SimpleStorage = artifacts.require("SimpleStorage");
var ComplexStorage = artifacts.require("ComplexStorage");
var REZToken = artifacts.require("REZToken");
var REDAToken = artifacts.require("REDAToken");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(ComplexStorage);
  deployer.deploy(REZToken);
  deployer.deploy(REDAToken);
};
