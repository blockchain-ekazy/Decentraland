import React, { useState, useEffect } from "react";
import abi from "./abi.json";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
require("dotenv").config();
 
let provider;
const { REACT_APP_CONTRACT_ADDRESS } = process.env; 
const SELECTEDNETWORK = "80001";
const SELECTEDNETWORKNAME = "POLYGON TESTNET";

function Mintbtn() {
  const [price, setPrice] = useState();
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [errormsg, setErrorMsg] = useState();
  const [userAddress, setUserAddress] = useState();
  const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  const [purchased, setProvider] = useState(false);

  useEffect(async () => {
    provider = await detectEthereumProvider();
    if (provider) {
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      const contractaddress = REACT_APP_CONTRACT_ADDRESS;
      const ct = new web3.eth.Contract(abi, contractaddress);
      let current = await ct.methods.totalSupply().call();
      setTotalSupply(current);
      if (Number(current) === 2000) {
        provider = false;
        setErrorMsg("All Properties minted, Sale has ended");
      }
    }else {
      // window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
      { setErrorMsg("Non-Ethereum browser detected. You should consider trying MetaMask!") }
    }

    if (window.ethereum) {
  handleEthereum();
} else {
  window.addEventListener('ethereum#initialized', handleEthereum, {
    once: true,
  });

  // If the event is not dispatched by the end of the timeout,
  // the user probably doesn't have MetaMask installed.
  setTimeout(handleEthereum, 10000); // 3 seconds
}

function handleEthereum() {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    console.log('Ethereum successfully detected!');
    // Access the decentralized web!
  } else {
    console.log('Please install MetaMask!');
    setErrorMsg('Please install MetaMask!');
  }
}


  }, []);

  async function loadWeb3() {

    if (provider) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      // Meta Mask Connected Account Address
      let metaMaskAccount = await web3.eth.getAccounts();
      metaMaskAccount = metaMaskAccount[0];
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      // setConnectedAccount(splitedMetaMaskAddress);
      
      //check network is polygon testnet
      // web3.eth.net.getId().then(console.log);
      if(await web3.eth.net.getId() == SELECTEDNETWORK){
        // // creating contract instance
        const contractaddress = REACT_APP_CONTRACT_ADDRESS;
        const ct = new web3.eth.Contract(abi, contractaddress);
        let price = await ct.methods.getPrice().call();
        price = window.web3.utils.fromWei(price);
        console.log(price);
        price = price * quantity;
        setPrice(price);
        let current = await ct.methods.totalSupply().call();
        setTotalSupply(current);
        if (Number(current) === 2000) {
          setConnectedAccount("Sold out");
        }
        await ct.methods
        .mint(quantity)
        .send({ from: metaMaskAccount, value: price });
        // current = await ct.methods.totalSupply().call();
        setQuantity(1); 
      }else { setErrorMsg("Select \"" + SELECTEDNETWORKNAME + "\" network in your wallet to buy the nft") };
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert(
      //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
      // );
      { setErrorMsg("Non-Ethereum browser detected. You should consider trying MetaMask!") }
    }
  }
  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      // Meta Mask Connected Account Address
      const metaMaskAccount = await web3.eth.getAccounts();
      setUserAddress(metaMaskAccount.toString());
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);

      // // creating contract instance
      const contractaddress = REACT_APP_CONTRACT_ADDRESS;
      const ct = new web3.eth.Contract(abi, contractaddress);
      const mintedornot = await ct.methods.balanceOf(metaMaskAccount.toString(), 1).call();
      if(mintedornot > 0){
        setProvider(true);
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      { setErrorMsg("Non-Ethereum browser detected. You should consider trying MetaMask!") }
    }
  }
  return (
    <div>
      { provider ? (
        <div className="row mintingsection">
          <div className="col-sm-6">
            <div className="yellow">
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: "auto", width: "290px"}} className="mt-2">
                <h3 className="text-white">Quantity</h3>
                <div style={{ marginLeft: "10px" }}>
                  <button className="minus back-button btn-warning px-3 mx-1" 
                  onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >-</button>
                  <span style={{ fontSize: 30, margin: "0 15px", color: '#fff' }}>
                    {quantity}
                  </span>
                  <button
                    className="plus back-button btn-warning px-3 mx-1"
                    onClick={() => {
                      if (quantity < 5) {
                        setQuantity(quantity + 1);
                      }
                    }}
                  >+</button>
                </div>
              </div>
            </div>
            <button
              className="mt-3 mint-btn mx-auto d-block"
              onClick={() => {
                loadWeb3();
              }}
            >Mint Your 3D Property!</button>
            <h5 className="mt-2 supplytext">{2000 - totalSupply}/2000 Available</h5>
          </div>
          <div className="col-sm-6 mb-5">
            <button
              className="mt-3 mint-btn mx-auto d-block mb-3"
              onClick={() => {
                connectWallet();
              }}
              >{connectedAccount}</button>
              {purchased ? (
                <h5 className="text-center">
                  <a className="text-white text-decoration-none" href="https://gateway.pinata.cloud/ipfs/QmVpjuxKbhJwbMF2xzUvAPPRaXyiBuqAaZrkkoSaN9c6Cz">Download Your Property File</a><br /><br />
                </h5>
              ) : <h5 className="text-center text-white" >Your Purchase Property file will show here</h5>}
          </div>
      </div> ) : <h5 className="mt-2 supplytext"><b>{ errormsg }</b></h5> }{ /*console.log(errormsg);*/ }
    </div>
  );
}

export default Mintbtn;