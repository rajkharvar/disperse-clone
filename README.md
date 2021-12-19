# Disperse app clone

Disperse app let you disperse any erc20 tokens to number of addresses using single contract call.
Currently supports - ropsten, rinkeby, goerli, kovan and mumbai(matic).

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js --network mumbai
node scripts/sample-script.js
npx hardhat help
```

## Network and addresses

| Network | Alice Token address                        | Disperse contract address                  |
| ------- | ------------------------------------------ | ------------------------------------------ |
| Mumbai  | 0x58212120625aB5927bdf156319A906373473e4E4 | 0xaf6f4A737188571d128477DEe81d54Bc63De6d80 |
| Ropsten | 0xDd9D9908Ee8084EDdF4CDe2c9284275431465711 | 0x0cD252390E7e46D7Ecf48D225fBB56D8fBd6Faf1 |
| Rinkeby | 0xF80bFFDD2614d4D205C989e9C2446DE8951127df | 0x3399dCff80b82f78af79686f9f5Cd731AD765786 |
| Goerli  | 0x55f8c90d91C85C8C75674f0170D52F20A947B5bB | 0xD286f3D834E6030F178C395C9ba33d32B427cAD3 |
| Kovan   | 0xDd9D9908Ee8084EDdF4CDe2c9284275431465711 | 0x0cD252390E7e46D7Ecf48D225fBB56D8fBd6Faf1 |
