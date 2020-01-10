import BalanceTypes from './types';
import { balanceOf, balanceOnHold } from '../../services/token-service';

function updateBalanceOf(address) {
  return async (dispatch) => {
    try {
      const balance = await balanceOf(address);
      dispatch(setBalance(address, balance));
    } catch (e) {
      console.error(`Cannot retrieve balance of address ${address}: ${e.toString()}`)
    }
  }
}

function updateBalanceOnHold(address) {
  return async (dispatch) => {
    try {
      const heldBalance = await balanceOnHold(address);
      dispatch(setBalanceOnHold(address, heldBalance));
    } catch (e) {
      console.error(`Cannot retrieve balance of address ${address}: ${e.toString()}`)
    }
  }
}

function setBalance(address, balance) {
  return {
    type: BalanceTypes.SET_BALANCE,
    address,
    balance,
  }
}
function setBalanceOnHold(address, balanceOnHold) {
  return {
    type: BalanceTypes.SET_BALANCE_ON_HOLD,
    address,
    balanceOnHold,
  }
}

export {
  setBalance,
  setBalanceOnHold,
  updateBalanceOf,
  updateBalanceOnHold,
}
