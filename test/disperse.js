const { BigNumber } = require("@ethersproject/bignumber");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

const ETHER = BigNumber.from(10).pow(BigNumber.from(18));

const getTokenValue = (value) => BigNumber.from(value).mul(ETHER);

const values = [
  getTokenValue(10),
  getTokenValue(20),
  getTokenValue(30),
  getTokenValue(40),
  getTokenValue(50),
];

const getTotal = () => {
  let total = values[0];
  for (let i = 1; i < values.length; i++) {
    total = total.add(values[i]);
  }
  return total;
};

describe("Disperse", () => {
  let signers;
  let Alice;
  let alice;
  let Disperse;
  let disperse;
  let recipients;

  before(async () => {
    signers = await hre.ethers.getSigners();
    Alice = await ethers.getContractFactory("Alice");
    Disperse = await ethers.getContractFactory("Disperse");
    recipients = [
      signers[1].address,
      signers[2].address,
      signers[3].address,
      signers[4].address,
      signers[5].address,
    ];
  });

  describe("Alice Token", async () => {
    it("Should deploy and mint 10000 Alice Token", async () => {
      alice = await Alice.deploy("Alice", "ALICE");
      await alice.deployed();

      let balance = await alice.balanceOf(signers[0].address);
      balance = ethers.utils.formatEther(balance);
      const expected = ethers.utils.formatEther(await alice.totalSupply());
      expect(balance).to.equal(expected);
    });
  });

  describe("Disperse Token", async () => {
    it("Should deploy Disperse contract and send approval to withdraw tokens", async () => {
      disperse = await Disperse.deploy();
      await disperse.deployed();
    });

    it("Send approval for withdrawl", async () => {
      const approve = await alice.approve(disperse.address, getTotal());
    });

    it("Disperse token", async () => {
      const disperseToken = await disperse.disperseToken(
        alice.address,
        recipients,
        values
      );
    });

    it("Verify balance", async () => {
      for (let i = 0; i < recipients.length; i++) {
        let balance = await alice.balanceOf(recipients[i]);
        balance = ethers.utils.formatEther(balance);
        const expected = ethers.utils.formatEther(values[i]);
        expect(balance).to.equal(expected);
      }
    });
  });
});
