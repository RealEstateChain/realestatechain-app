//import config from '../../config'
import store from '../../store'
import redaAbi from './redaAbi'
import rezAbi from './rezAbi'


const DEFAULT_GAS_PRICE = '2000000000'

let web3 = null;

const web3Interface =  {

  setWeb3: () => {
    web3 = window.Eth
  },

  getEth: () => {
    return web3 && web3.eth
  },

  getNetworkId: () => {
    return new Promise((resolve, reject) => {
      web3.version.getNetwork((err, networkId) => {
        if (err) {
          reject(err)
        }
        resolve(networkId)
      })
    })
  },

  getRedaFactory: () => {
    return web3Interface.getNetworkId()
    .then((networkId) => {
      return web3.eth.contract(redaAbi).at(
        networkId === '4' ? '0x4597c2b6b11a244179f45acf565c66deb3cd99a1' : '0x5AECaF7d9712851dd5Db865c4242F54D9366b3e1',
      )
    })
  },

  getReda: (address) => {
    return web3.eth.contract(redaAbi).at(address)
  },

  getRez: (address) => {
    return web3.eth.contract(rezAbi).at(address)
  },
}

const getAccount = () => {
  // return web3Interface.getEth() && web3Interface.getEth().defaultAccount
  web3Interface.getEth() && 
    web3Interface.getEth().getAccounts().then((accounts) => {
      return accounts[0]
    });
}

const getAccounts = () => {
  // return web3Interface.getEth() && web3Interface.getEth().defaultAccount
  web3Interface.getEth() && web3Interface.getEth().getAccounts().then(function(accounts) {
    debugger;
      console.dir(accounts);
    })
}

export default {
  // getBalances,
  // sendTransactionToREDA,
  // sendTransactionToREZ,
  // sendTransactionToETH,
  web3Interface,
  getAccount,
  getAccounts,
  // getRedaInfo,
  // createNewREDA,
  // updateREDA
}
