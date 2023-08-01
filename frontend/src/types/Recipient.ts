import { ethers } from "ethers";

export type RecipientInfo = {
  address: string;
  value: ethers.BigNumber;
};
