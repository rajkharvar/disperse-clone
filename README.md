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
| Mumbai  | 0x51ede23B8A12f5F28598F64c7fc2afDf5a613081 | 0xfBc1E33C3459082e9d04D51F182aE9a66A0cE070 |
| Ropsten | 0x77E6835A1Fd55eb8611fd45eA661cd637db7B3e4 | 0x50D1A2346eCb5453f6037e0c8219F9a6ee969BF5 |
| Rinkeby | 0xec63D15F18FbF9C838ba5FC129870f3455e72396 | 0x3498934b0ee7352Fb2190352E774D1D4241677EC |
| Goerli  | 0x77E6835A1Fd55eb8611fd45eA661cd637db7B3e4 | 0x50D1A2346eCb5453f6037e0c8219F9a6ee969BF5 |
| Kovan   | 0x77E6835A1Fd55eb8611fd45eA661cd637db7B3e4 | 0x50D1A2346eCb5453f6037e0c8219F9a6ee969BF5 |
