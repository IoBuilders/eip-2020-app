import Web3 from 'web3';
import EmoneyToken from 'emoney-token/build/EmoneyToken';

import { getContractAddress, getFromAddress, getNodeUrl } from "./environment-service";

const provider = new Web3.providers.HttpProvider(
  getNodeUrl(),
  {
    headers: [
      {
        name: 'Access-Control-Max-Age',
        value: 600
      },
    ],
    withCredentials: false,
  }
);
const web3 = new Web3(provider)

const eip2020 = new web3.eth.Contract(
  EmoneyToken.abi,
  getContractAddress(),
  {
    from: getFromAddress(),
  }
)

async function balanceOf(address) {
  console.log(`balanceOf: address: ${address}`);
  let balance = 0;

  try {
    balance = await eip2020.methods.balanceOf(address).call();
    console.log(`balanceOf: balance: ${balance}`);
  } catch (err) {
    console.error(`Could not get balance of ${address}: ${err.toString()}`)
  }

  return balance
}

async function balanceOnHold(address) {
  return eip2020.methods.balanceOnHold(address).call();
}

export default {
  balanceOf,
  balanceOnHold,
}
