//import config from '../../config'
import store from '../../store'
import redaAbi from './redaAbi'
import rezAbi from './rezAbi'
import isEmpty from 'lodash/isEmpty';



const DEFAULT_GAS_PRICE = '2000000000'

let web3 = null;

const web3Interface =  {

  setWeb3: (w3) => {
    web3 = w3
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

const fetchNetwork = () => {
  return new Promise((resolve, reject) => {
    const { web3 } = window;

    web3 && web3.version && web3.version.getNetwork((err, netId) => {
      if (err) {
        reject(err);
      } else {
        resolve(netId);
      }
    });
  });
};

const fetchAccounts = () => {
  return new Promise((resolve, reject) => {
    const { web3 } = window;
    const ethAccounts = getAccounts();

    if (isEmpty(ethAccounts)) {
      web3 && web3.eth && web3.eth.getAccounts((err, accounts) => {
        if (err) {
          reject(err);
        } else {
          resolve(accounts);
        }
      });
    } else {
      resolve(ethAccounts);
    }
  });
};

function getAccounts() {
  try {
    const { web3 } = window;
    // throws if no account selected
    return web3.eth.accounts;
  } catch (e) {
    return [];
  }
}

const getAccount = () => {
  // return web3Interface.getEth() && web3Interface.getEth().defaultAccount
  web3.eth.getAccounts().then(function(acct) {
    return acct
  });
}

const getAccounts = () => {
  web3.eth.getAccounts().then(console.log);
}

export default {
  fetchAccounts,
  fetchNetwork,
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
