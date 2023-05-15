# Disperse app clone

Disperse app lets you disperse any erc20 tokens or ethers to a number of addresses using a single transaction.

Try running some of the following tasks:

## Deploy to new network ⛓️

1. Deploy `Disperse.sol` using the `deploy.js` script:

   - Modify the `hardhat.config.js` file to include the new network. Refer to the documentation at https://hardhat.org/hardhat-runner/docs/config for guidance.
   - Execute the following command in your terminal or command prompt: `npx hardhat scripts/deploy.js --network [NETWORK]`

2. Adding support in the frontend:

   - Open the `constants.js` file in the `frontend/utils` directory.
   - Include the chain information and Disperse contract address by adding the following code snippet in `supportedChains` array:
     ```javascript
     {
         chainId: <chain_id>,
         disperseAddress: <disperse_address>,
         blockExplorer: <block_explorer_url>,
         name: <chain_name>,
     }
     ```
     Replace `<chain_id>` with the ID of the new chain, `<disperse_address>` with the address of the deployed Disperse contract, `<block_explorer_url>` with the URL of the block explorer for the chain, and `<chain_name>` with the name of the chain.

3. Verifying the contract with the relevant chain block explorer:

   - Follow the instructions provided in the Hardhat documentation at https://hardhat.org/hardhat-runner/docs/guides/verifying to verify the deployed contract on the new network's block explorer.

4. Updating the README:
   - Edit the README file of your project.
   - Add the chain name and hyperlink for the Disperse contract on the block explorer.

## Supported Network ⛓️ and addresses

| Network      | Disperse contract address                                                                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mumbai       | [0xaf6f4A737188571d128477DEe81d54Bc63De6d80](https://mumbai.polygonscan.com/address/0xaf6f4A737188571d128477DEe81d54Bc63De6d80)                                               |
| Goerli       | [0xD286f3D834E6030F178C395C9ba33d32B427cAD3](https://goerli.etherscan.io/address/0xD286f3D834E6030F178C395C9ba33d32B427cAD3)                                                  |
| Razor Schain | [0x3bAB943FE31B0F90c1E4c2733113E336eBAC4Bc1](https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com/address/0x3bAB943FE31B0F90c1E4c2733113E336eBAC4Bc1/transactions) |
| Polygon      | [0x0461950C8664A38b6b1D6599420CA9c50a714B56](https://polygonscan.com/address/0x0461950C8664A38b6b1D6599420CA9c50a714B56)                                                      |
