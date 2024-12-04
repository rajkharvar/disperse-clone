export type ChainInfo = {
  chainId: number;
  disperseAddress: string;
  blockExplorer: string;
  name: string;
};

export const supportedChains: ChainInfo[] = [
  {
    chainId: 5,
    disperseAddress: "0xD286f3D834E6030F178C395C9ba33d32B427cAD3",
    blockExplorer: "https://goerli.etherscan.io/",
    name: "goerli",
  },
  {
    chainId: 80001,
    disperseAddress: "0xaf6f4A737188571d128477DEe81d54Bc63De6d80",
    blockExplorer: "https://mumbai.polygonscan.com/",
    name: "mumbai",
  },
  {
    chainId: 278611351,
    disperseAddress: "0x3bAB943FE31B0F90c1E4c2733113E336eBAC4Bc1",
    blockExplorer:
      "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com/",
    name: "razor schain",
  },
  {
    chainId: 137,
    disperseAddress: "0x0461950C8664A38b6b1D6599420CA9c50a714B56",
    blockExplorer: "https://polygonscan.com/",
    name: "polygon",
  },
  {
    chainId: 1517929550,
    disperseAddress: "0x553a0a6FCe2943F6901f783f381292C567038ddF",
    blockExplorer:
      "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com/",
    name: "skale staging",
  },
  {
    chainId: 1444673419,
    disperseAddress: "0x596df15B63d0f9CB9690BbdAecE64db59637Bf22",
    blockExplorer:
      "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/",
    name: "europa testnet",
  },
  {
    chainId: 11155420,
    disperseAddress: "0xC181C71991FFfE9952B023835DE79D7EcC67AE9B",
    blockExplorer: "https://sepolia-optimism.etherscan.io/",
    name: "optimism sepolia",
  },
  {
    chainId: 7777123123,
    disperseAddress: "0x54510dA48aE512387111623D59812B794d11754f",
    blockExplorer: "http://34.143.211.226:32808/",
    name: "Test Network",
  },
];
