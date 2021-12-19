const chains = {
  3: "ropsten",
  4: "rinkeby",
  5: "goerli",
  42: "kovan",
  80001: "maticmum",
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
};

export const warnMessage =
  "*Supports ropsten, rinkeby, goerli, kovan and mumbai(matic)*";
