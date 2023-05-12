require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
const MUMBAI_RPC =
  process.env.MUMBAI_RPC || "https://rpc-mumbai.maticvigil.com	";
const GOERLI_RPC = process.env.GOERLI_RPC || "https://rpc.ankr.com/eth_goerli	";
const SKALE_RPC = process.env.SKALE_RPC;
const POLYGON_RPC = process.env.POLYGON_RPC || "https://polygon-rpc.com	";
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;
const privateKey = process.env.PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: GOERLI_RPC,
      accounts: [privateKey],
    },
    mumbai: {
      url: MUMBAI_RPC,
      accounts: [privateKey],
    },
    skale: {
      url: SKALE_RPC,
      accounts: [privateKey],
      gasPrice: 100000,
    },
    polygon: {
      url: POLYGON_RPC,
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};
