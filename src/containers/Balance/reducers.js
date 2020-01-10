import BalanceTypes from "./types";

const initialState = {
  balances: {},
  balancesOnHold: {},
}

function balanceReducers(state = initialState, action) {
  switch (action.type) {
    case BalanceTypes.SET_BALANCE:
        return {
          ...state,
          balances: updateBalance(state.balances, action.address, action.balance)
        };
      case BalanceTypes.SET_BALANCE_ON_HOLD:
        return {
          ...state,
          balancesOnHold: updateBalance(state.balancesOnHold, action.address, action.balanceOnHold)
        };
    default:
      return state;
  }
}

function updateBalance(balances, address, balance) {
  balances[address] = balance;

  return balances;
}

export default balanceReducers;
