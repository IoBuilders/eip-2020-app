import { ethers } from 'ethers';
import EmoneyToken from 'emoney-token/build/EmoneyToken';

import { getContractAddress, getDecimals, getNodeUrl } from './environment-service';

const decimals = getDecimals();
const provider = new ethers.providers.JsonRpcProvider(getNodeUrl());
const transactionOptions = {
  gasLimit: 4000000,
  gasPrice: 0,
}

let eip2020Token = new ethers.Contract(
  getContractAddress(),
  EmoneyToken.abi,
  provider
)

function tokenToCurrency(amount) {
  return amount.toNumber() / Math.pow(10, decimals);
}

function currencyToToken(amount) {
  return amount * Math.pow(10, decimals);
}

async function balanceOf(address) {
  let balance;

  try {
    balance = await eip2020Token.balanceOf(address);
  } catch (err) {
    console.error(`Could not get balance of ${address}: ${err.toString()}`)
  }

  return tokenToCurrency(balance);
}

async function balanceOnHold(address) {
  let balanceOnHold = 0;

  try {
    balanceOnHold = await eip2020Token.balanceOnHold(address);
  } catch (err) {
    console.error(`Could not get held balance of ${address}: ${err.toString()}`)
  }

  return tokenToCurrency(balanceOnHold);
}

function connectWallet(wallet) {
  eip2020Token = eip2020Token.connect(wallet);
}

function privateKeyToWallet(privateKey) {
  return new ethers.Wallet(privateKey, provider);
}

function createNewWallet() {
  const wallet = ethers.Wallet.createRandom();
  return wallet.connect(provider);
}

async function transfer(to, value) {
  return eip2020Token.transfer(to, currencyToToken(value), transactionOptions);
}

async function hold(holdId, to, value, expiration, notary) {
  return eip2020Token.hold(holdId, to, notary, currencyToToken(value), expiration, transactionOptions);
}

async function releaseHold(holdId) {
  return eip2020Token.releaseHold(holdId, transactionOptions);
}

async function executeHold(holdId, value) {
  return eip2020Token.executeHold(holdId, currencyToToken(value), transactionOptions);
}

export {
  balanceOf,
  balanceOnHold,
  connectWallet,
  createNewWallet,
  privateKeyToWallet,
  transfer,
  hold,
  releaseHold,
  executeHold,
};
