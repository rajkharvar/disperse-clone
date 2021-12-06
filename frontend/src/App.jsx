import { ethers, providers } from "ethers";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Headers";
import Payment from "./components/Payment";
import WalletInfo from "./components/WalletInfo";
import Warn from "./components/Warn";
import Web3Modal from "web3modal";
import Connect from "./components/Connect";

function App() {
  const [isMetamaskConnected, setIsMetamaskConnected] = useState();
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState();
  const [chainId, setChainId] = useState(null);
  const [networkName, setNetworkName] = useState(null);
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNetworkDetails = async () => {
    try {
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const { chainId, name } = await provider.getNetwork();
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setChainId(chainId);
      setNetworkName(name);
      setAddress(address);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const checkAccountConnected = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const accounts = await provider.listAccounts();
    if (!accounts.length) {
      setIsMetamaskConnected(false);
      return;
    }
    setIsMetamaskConnected(true);
  };

  const connect = async () => {
    try {
      const web3modal = new Web3Modal();
      const result = await web3modal.connect();
      if (result) {
        setIsMetamaskConnected(true);
        fetchNetworkDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum) {
      setIsMetamaskInstalled(true);
      checkAccountConnected();
      fetchNetworkDetails(ethereum);
    } else {
      setIsMetamaskInstalled(false);
    }
  }, []);
  return (
    <div className="mx-48 px-48 pt-28">
      <Header address={address} />
      {isMetamaskInstalled ? (
        !isMetamaskConnected && <Connect connect={connect} />
      ) : (
        <Warn />
      )}
      {!isLoading && address && (
        <>
          <WalletInfo address={address} />
          <Payment address={address} />
        </>
      )}
    </div>
  );
}

export default App;
