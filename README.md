# Real Estate Chain Prototype

This boilerplate uses Webpack and React, along with react-router, redux and redux-auth-wrapper for authentication powered by a smart contract. 

## Installation

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Download or clone this repo box. 

3. Install dependencies
    ```javascript
    npm install
    ```

4. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm start
    ```

### Note: To connect the frontend app to your local RPC server or Ethereum network, use the Metamask browser extension or the Mist wallet/browser. 
Download [Metamask](https://metamask.io) for Chrome, Firefox or Brave. 


## Local RPC server
### Use Ganache (formerly testrpc, included with Truffle) which simulates the Ethereum blockchain in a way that faciitates easy, fast smart contract development

1. Download the [Ganache](http://truffleframework.com/ganache/) app, or use the command line tool:
    ```javascript
    npm install -g ganache-cli
    ```

2. Compile and deploy the smart contracts to your local Ganache server
    ```javascript
    truffle deploy --network development
    ```

## Testing Smart Contracts
6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // If inside the development console.
    test
    ```
    ```javascript
    // If outside the development console..
    truffle test
    ```

7. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // Run Jest outside of the development console for front-end component tests.
    npm run test
    ```

8. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

## Deploying to REC private consortium network (TODO)

1. Install geth
2. Using the genesis.json, start new blockchain, connect to peers

3. Run the development console.
    ```javascript
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

## Troubleshooting

If you have trouble connecting truffle to ganache, or the frontend/Metamask to ganache, make sure your ganache host/port and Metamask host/port are the same

## FAQ 

* __I'm unable to migrate contracts on my local ganache server__*
    You have to unlock the account you use to upload smart contracts. Pick an address out of the list of accounts Ganache started with. Then add the account to your truffle.js file:
    ```javascript
    from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    ```

* __Why is there both a truffle.js file and a truffle-config.js file?__

    `truffle-config.js` is a copy of `truffle.js` for compatibility with Windows development environments. Feel free to it if it's irrelevant to your platform.

* __Where is my production build?__

    The production build will be in the build_webpack folder. This is because Truffle outputs contract compilations to the build folder.

* __Where can I find more documentation?__

    This box is a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!