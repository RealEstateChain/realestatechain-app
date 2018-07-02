//import config from '../../config'
import store from '../../store'
import redaAbi from './redaAbi'
import redaFactoryAbi from './redaFactoryAbi'
import rezAbi from './rezAbi'
import isEmpty from 'lodash/isEmpty'



const DEFAULT_GAS_PRICE = '2000000000'

/* these addresses are dependent on the executing environment, replace on every migrate */
const REZTokenContractAddress = '0x3d49d1ef2ade060a33c6e6aa213513a7ee9a6241'
const REDAFactoryContractAddress = '0x2a504b5e7ec284aca5b6f49716611237239f0b97'
const REDATokenContractAddress = '0xbd2c938b9f6bfc1a66368d08cb44dc3eb2ae27be'

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
    return new web3.eth.Contract(redaFactoryAbi, REDAFactoryContractAddress)
  },

  getREDA: (address) => {
    return web3.eth.contract(redaAbi).at(REDATokenContractAddress)
  },

  getREZ: (address) => {
    return web3.eth.contract(rezAbi).at(REZTokenContractAddress)
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

const getAccount = () => {
  // return web3Interface.getEth() && web3Interface.getEth().defaultAccount
  web3.eth.getAccounts().then(function(acct) {
    return acct
  });
}

const getAccounts = () => {
  web3.eth.getAccounts().then(console.log);
}

const findTokenContractAddress = (logs) => {
  debugger;

  // const decodedLogs = abiDecoder.decodeLogs(logs)
  // const filtered = _.filter(decodedLogs, (log) => {
  //   return log && log.name === 'Transfer'
  // })
  return logs[0].address;
  
}

const createNewREDA = (token, creator) => { /* returns Promise */
  const tokenFactory = web3Interface.getRedaFactory()
  //.then((tokenFactory) => {
  console.log(tokenFactory)
  return new Promise((resolve, reject) => {
    tokenFactory.methods
    .createREDA(token.uri, token.meta)
    .send({ from: creator, gasPrice: DEFAULT_GAS_PRICE }).then(
      function (err, txHash) {
        if (err) {
          reject(err)
        } else {
          if (txHash) {
            console.log('Transaction created')
            console.log(txHash)
            const interval = setInterval(() => {
              web3Interface.getEth().getTransactionReceipt(txHash, (error, response) => {
                if (error) {
                  reject(error)
                }
                if (response) {
                  clearInterval(interval)
                  resolve({
                    ...token,
                    address: findTokenContractAddress(response.logs),
                    type: 'REDA',
                  })
                }
              })
            }, 10000)
          }
        }
      })
    })
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
  createNewREDA,
  // updateREDA
}
