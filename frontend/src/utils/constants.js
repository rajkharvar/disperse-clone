export const chains = {
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
  maticmum: 80001,
  skaleTestnetV2: 132333505628089,
};

export const disperseAddresses = {
  3:
    import.meta.VITE_DISPERSE_ROPSTEN ||
    "0x0cD252390E7e46D7Ecf48D225fBB56D8fBd6Faf1",
  4:
    import.meta.VITE_DISPERSE_RINKEBY ||
    "0x3399dCff80b82f78af79686f9f5Cd731AD765786",
  5:
    import.meta.VITE_DISPERSE_GOERLI ||
    "0xD286f3D834E6030F178C395C9ba33d32B427cAD3",
  42:
    import.meta.VITE_DISPERSE_KOVAN ||
    "0x0cD252390E7e46D7Ecf48D225fBB56D8fBd6Faf1",
  80001:
    import.meta.VITE_DISPERSE_MATIC_MUMBAI ||
    "0xaf6f4A737188571d128477DEe81d54Bc63De6d80",
  132333505628089:
    import.meta.VITE_DISPERSE_SKALE_V2 ||
    "0x73c0F3cf9Bae32c6A88aD4bc701b1C9aDC1E57d5",
};

export const scans = {
  3: "https://ropsten.etherscan.io/",
  4: "https://rinkeby.etherscan.io/",
  5: "https://goerli.etherscan.io/",
  42: "https://kovan.etherscan.io/",
  80001: "https://mumbai.polygonscan.com/",
  132333505628089:
    "https://whispering-turais.explorer.staging-v2.skalenodes.com/",
};

export const warnMessage =
  "*Supports ropsten, rinkeby, goerli, kovan, skale, skale-testnet-v2 and mumbai(matic)*";
