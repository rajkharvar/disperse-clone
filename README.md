# Disperse App

The Disperse app allows you to distribute any ERC20 tokens or ethers to multiple addresses using a single transaction.

## Deploy to a New Network ⛓️

1. Clone the repository:
   `git clone https://github.com/rajkharvar/disperse-clone.git`

2. Install the dependencies:

```bash
npm start
# or
yarn start
```

3. Modify the hardhat.config.js file to include the new network. Refer to the documentation at https://hardhat.org/hardhat-runner/docs/config for guidance.

4. Deploy the contract:

```
npx hardhat scripts/deploy.js --network [NETWORK]
```

5. Adding support in the frontend:

   - Open the `constants.ts` file in the `frontend/utils` directory.
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

6. Verifying the contract with the relevant chain block explorer:

   - Follow the instructions provided in the Hardhat documentation at https://hardhat.org/hardhat-runner/docs/guides/verifying to verify the deployed contract on the new network's block explorer.

7. Updating the README:
   - Edit the README file of the project.
   - Add the chain name and hyperlink for the Disperse contract on the block explorer in Supported Network and addresses in [Supported Networks and addresses](#supported-networks-and-addresses) section

## Supported Networks and addresses

| Network          | Disperse contract address                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mumbai           | [0xaf6f4A737188571d128477DEe81d54Bc63De6d80](https://mumbai.polygonscan.com/address/0xaf6f4A737188571d128477DEe81d54Bc63De6d80)                                               |
| Goerli           | [0xD286f3D834E6030F178C395C9ba33d32B427cAD3](https://goerli.etherscan.io/address/0xD286f3D834E6030F178C395C9ba33d32B427cAD3)                                                  |
| Razor Schain     | [0x3bAB943FE31B0F90c1E4c2733113E336eBAC4Bc1](https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com/address/0x3bAB943FE31B0F90c1E4c2733113E336eBAC4Bc1/transactions) |
| Polygon          | [0x0461950C8664A38b6b1D6599420CA9c50a714B56](https://polygonscan.com/address/0x0461950C8664A38b6b1D6599420CA9c50a714B56)                                                      |
| Skale Staging    | [0x553a0a6FCe2943F6901f783f381292C567038ddF](https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com/address/0x553a0a6FCe2943F6901f783f381292C567038ddF)       |
| Europa Testnet   | [0x596df15B63d0f9CB9690BbdAecE64db59637Bf22](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0x596df15B63d0f9CB9690BbdAecE64db59637Bf22)              |
| Optimism Sepolia | [0xC181C71991FFfE9952B023835DE79D7EcC67AE9B](https://sepolia-optimism.etherscan.io/address/0xC181C71991FFfE9952B023835DE79D7EcC67AE9B)                                        |
