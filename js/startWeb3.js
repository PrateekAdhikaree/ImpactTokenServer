import web3.min.js;

console.log(web3); 

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var ImpactToken = artifacts.require('../contracts/ImpactToken.sol');

const NonProfit = '0x0d6eafe9Ca0258b97839b07230A7EA8Fa61b632A';

module.exports = function (callback) {
  let instance
  ImpactToken.deployed().then(i => {
    instance = i
  }).then(() => {
    console.log('adding NonProfit role')
    return Promise.all([
      instance.adminAddRole(NonProfit, 'NonProfit').then(console.log)
    ])
  }).then(() => {
    return Promise.all([
      instance.setNonProfit(NonProfit, "Red Cross Society").then(console.log)
    ])
  }).then(callback);
}