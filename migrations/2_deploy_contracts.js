var SimpleMessageStorage = artifacts.require("./SimpleMessageStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleMessageStorage);
};
