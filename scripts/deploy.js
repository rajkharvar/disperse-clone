// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { BigNumber } = require("@ethersproject/bignumber");
const hre = require("hardhat");
const { ethers } = require("hardhat");

const ETHER = BigNumber.from(10).pow(BigNumber.from(18));

const getTokenValue = (value) => BigNumber.from(value).mul(ETHER);

async function main() {
  const [aliceSigner, bobSigner] = await hre.ethers.getSigners();
  const Alice = await hre.ethers.getContractFactory("Alice");
  const Disperse = await hre.ethers.getContractFactory("Disperse");
  const alice = await Alice.deploy("Alice", "ALICE");

  await alice.deployed();
  const totalSupply = await alice.totalSupply();

  console.log(`Alice Token address: ${alice.address}`);
  console.log(`TotalSupply: ${ethers.utils.formatEther(totalSupply)}`);
  const disperse = await Disperse.deploy();

  await disperse.deployed();
  console.log(`Disperse contract address: ${disperse.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
