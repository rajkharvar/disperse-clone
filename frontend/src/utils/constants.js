export const chains = {
  goerli: 5,
  maticmum: 80001,
  razorSchain: 278611351,
};

export const disperseAddresses = {
  5:
    import.meta.VITE_DISPERSE_GOERLI ||
    "0xD286f3D834E6030F178C395C9ba33d32B427cAD3",
  80001:
    import.meta.VITE_DISPERSE_MATIC_MUMBAI ||
    "0xaf6f4A737188571d128477DEe81d54Bc63De6d80",
  278611351:
    import.meta.VITE_RAZOR_SCHAIN ||
    "0x3bAB943FE31B0F90c1E4c2733113E336eBAC4Bc1",
};

export const scans = {
  5: "https://goerli.etherscan.io/",
  80001: "https://mumbai.polygonscan.com/",
  278611351: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com/",
};

export const warnMessage = "*Supports mumbai(matic), goerli and razor Schain*";
