import { ethers, providers } from "ethers";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Headers";
import Payment from "./components/Payment";
import WalletInfo from "./components/WalletInfo";
import Warn from "./components/Warn";

function App() {
  const [isMetamaskConnected, setIsMetamaskConnected] = useState();
  const [chainId, setChainId] = useState(null);
  const [networkName, setNetworkName] = useState(null);
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNetworkDetails = async (ethereum) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const { chainId, name } = await provider.getNetwork();
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setChainId(chainId);
    setNetworkName(name);
    setAddress(address);
    console.log("Name:", name);
    setIsLoading(false);
  };

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum) {
      setIsMetamaskConnected(true);
      fetchNetworkDetails(ethereum);
    }
  }, []);
  return (
    <div className="mx-48 px-48 pt-28">
      <Header address={address} />
      {!isLoading && address ? (
        <>
          <WalletInfo address={address} />
          <Payment address={address} />
        </>
      ) : (
        <Warn />
      )}
    </div>
  );
}

export default App;
