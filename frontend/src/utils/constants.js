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
    "0x50D1A2346eCb5453f6037e0c8219F9a6ee969BF5",
  4:
    import.meta.VITE_DISPERSE_RINKEBY ||
    "0x3498934b0ee7352Fb2190352E774D1D4241677EC",
  5:
    import.meta.VITE_DISPERSE_GOERLI ||
    "0x50D1A2346eCb5453f6037e0c8219F9a6ee969BF5",
  42:
    import.meta.VITE_DISPERSE_KOVAN ||
    "0x50D1A2346eCb5453f6037e0c8219F9a6ee969BF5",
  80001:
    import.meta.VITE_DISPERSE_MATIC_MUMBAI ||
    "0xfBc1E33C3459082e9d04D51F182aE9a66A0cE070",
};

export const warnMessage =
  "*Supports ropsten, rinkeby, goerli, kovan and mumbai(matic)*";
