import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: ethers.providers.ExternalProvider;
  }
}
