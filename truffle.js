module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    clique: {
    	host: "52.226.128.69",
    	port: 8545,
    	network_id: "617"
    }
  }
};