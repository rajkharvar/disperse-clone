require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const fs = require("fs");
const MUMBAI_RPC = process.env.MUMBAI_RPC;
const ROPSTEN_RPC = process.env.ROPSTEN_RPC;
const RINKEBY_RPC = process.env.RINKEBY_RPC;
const GOERLI_RPC = process.env.GOERLI_RPC;
const KOVAN_RPC = process.env.KOVAN_RPC;
const privateKey = fs.readFileSync(".privateKey").toString();

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: ROPSTEN_RPC,
      accounts: [privateKey],
    },
    rinkeby: {
      url: RINKEBY_RPC,
      accounts: [privateKey],
    },
    goerli: {
      url: GOERLI_RPC,
      accounts: [privateKey],
    },
    kovan: {
      url: KOVAN_RPC,
      accounts: [privateKey],
    },
    mumbai: {
      url: MUMBAI_RPC,
      accounts: [privateKey],
    },
  },
};
