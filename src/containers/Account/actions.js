import AccountTypes from './types';
import tokenService from "../../services/token-service"

function updateBalanceOf(address) {
  return async (dispatch) => {
    try {
      console.log(`before balanceOf: ${address}`)
      const balance = await tokenService.balanceOf(address);
      console.log(`updateBalanceOf: balance: ${balance}`)
      dispatch(setBalance(balance));
    } catch (e) {
      console.error(`Cannot retrieve balance of address ${address}: ${e.toString()}`)
    }
  }
}

function updateBalanceOnHold(address) {
  return async (dispatch) => {
    try {
      const balanceOnHold = await tokenService.balanceOnHold(address);
      dispatch(setBalanceOnHold(balanceOnHold));
    } catch (e) {
      console.error(`Cannot retrieve balance of address ${address}: ${e.toString()}`)

    }
  }
}

function setAddress(address) {
  return {
    type: AccountTypes.SET_ADDRESS,
    address,
  }
}

function setBalance(balance) {
  console.log(`setBalance: balance: ${balance}`)
  return {
    type: AccountTypes.SET_BALANCE,
    balance,
  }
}
function setBalanceOnHold(balanceOnHold) {
  return {
    type: AccountTypes.SET_BALANCE_ON_HOLD,
    balanceOnHold,
  }
}

export {
  setAddress,
  setBalance,
  setBalanceOnHold,
  updateBalanceOf,
  updateBalanceOnHold,
}
