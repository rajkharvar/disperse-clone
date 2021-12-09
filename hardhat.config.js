require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const fs = require("fs");

const MUMBAI_RPC = process.env.MUMBAI_RPC;
const privateKey = fs.readFileSync(".privateKey").toString();

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: MUMBAI_RPC,
      accounts: [privateKey],
    },
  },
};
