import React from "react";
import "./navbar.css";
import healthReport from "../../assets/health-report.png";
import { loadAccount } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
import Blockies from "react-blockies";
import config from "../../config.json";
const Navbar = () => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.provider.connection);
  const account = useSelector((state) => state.provider.account);
  const balance = useSelector((state) => state.provider.balance);
  const chainId = useSelector((state) => state.provider.chainId);
  const connectHandler = async (e) => {
    await loadAccount(provider, dispatch);
  };
  const addEthereumChain = async (chainId) => {
    try {
      const chainParams = {
        chainId: `0x${parseInt(chainId, 16).toString(16)}`,
        chainName: "Localhost 31337",
        nativeCurrency: {
          name: "ETH",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: ["http://localhost:8545"],
        blockExplorerUrls: ["http://localhost:8545"],
      };
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [chainParams],
      });
    } catch (error) {
      console.error("Failed to add chain:", error);
    }
  };
  const networkHandler = async (e) => {
    const selectedChainId = e.target.value;
    if (selectedChainId === "0x31337") {
      await addEthereumChain(selectedChainId);
    }
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: selectedChainId }],
      });
    } catch (error) {
      console.error("Failed to switch network:", error);
    }
  };
  
  return (
    <div className="Navbar">
      <div className="nav__name">
        <img src={healthReport} alt="" width="40" height="40" />
        <h2> Medical Record </h2>
      </div>
      <div className="nav__networkSelector">
        <select
          name="network"
          id="network"
          onChange={networkHandler}
          value={config[chainId] ? `0x${chainId.toString(16)}` : `0`}
        >
          <option value="0" disabled>
            Select Network
          </option>
          <option value="0x31337">Localhost</option>
          <option value="0x5">Goerli</option>
          <option value="0x11155111">Sepolia</option>
        </select>
      </div>
      <div className="nav__balance">
        {balance ? (
          <p className="nav__myBalance">
            <small>My Balance : </small>
            {Number(balance).toFixed(2)}
          </p>
        ) : (
          <p className="nav__myBalance">
            <small>My Balance : </small>
             0ETH
          </p>
        )}
        {account ? (
          <a className="nav__myAccount" href="#">
            {account.slice(0, 5) + "...." + account.slice(38, 42)}
            <Blockies
              seed={account}
              size={10}
              scale={3}
              color="#2187D0"
              bgColor="#F1F2F9"
              spotColor="#767F92"
              className="identicon"
            />
          </a>
        ) : (
          <button className="nav__balance-box" onClick={connectHandler}>
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
