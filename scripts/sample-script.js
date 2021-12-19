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

const recipients = [
  "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
  "0x90f79bf6eb2c4f870365e785982e1f101e93b906",
  "0x15d34aaf54267db7d7c367839aaf71a00a2c6a65",
  "0x9965507d1a55bcc2695c58ba16fb37d819b0a4dc",
  "0x976ea74026e726554db657fa54763abd0c3a0aa9",
];

const values = [
  getTokenValue(10),
  getTokenValue(20),
  getTokenValue(30),
  getTokenValue(40),
  getTokenValue(50),
];

const logBalance = async (aliceContract, address) => {
  const balance = await aliceContract.balanceOf(address);
  console.log(`${address} has ${balance} ALICE token`);
};

const logAddressBalance = async (address, provider) => {
  const balance = await provider.getBalance(address);
  console.log(`${address} has ${hre.ethers.utils.formatEther(balance)} ether`);
};

async function main() {
  const [aliceSigner, bobSigner] = await hre.ethers.getSigners();
  const Alice = await hre.ethers.getContractFactory("Alice");
  const Disperse = await hre.ethers.getContractFactory("Disperse");
  const alice = await Alice.deploy("Alice", "ALICE");
  const provider = new ethers.providers.JsonRpcProvider();

  await alice.deployed();
  const totalSupply = await alice.totalSupply();

  console.log(`Address: ${alice.address}`);
  console.log(`TotalSupply: ${ethers.utils.formatEther(totalSupply)}`);
  const disperse = await Disperse.deploy();

  await disperse.deployed();

  const approve = await alice.approve(
    disperse.address,
    BigNumber.from(150).mul(ETHER)
  );

  const transfer = await disperse.disperseToken(
    alice.address,
    recipients,
    values
  );

  await Promise.all(
    recipients.map(async (add) => {
      await logBalance(alice, add);
    })
  );

  // * Disperse ethers

  // Log recipients ether balance before disperse
  console.log("Ether balance of address before disperse");
  await Promise.all(
    recipients.map(async (recipient) => {
      await logAddressBalance(recipient, provider);
    })
  );

  const disperseEther = await disperse.disperseEther(recipients, values, {
    value: BigNumber.from(150).mul(ETHER),
  });
  await disperseEther.wait();

  console.log("Ether balance of address after disperse");
  await Promise.all(
    recipients.map(async (recipient) => {
      await logAddressBalance(recipient, provider);
    })
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
