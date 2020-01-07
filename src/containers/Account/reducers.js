import AccountTypes from "./types"
import { getFromAddress } from "../../services/environment-service"

const initialState = {
  address: getFromAddress(),
  balance: 0,
  balanceOnHold: 0,
}

function accountReducers(state = initialState, action) {
  switch (action.type) {
    case AccountTypes.SET_ADDRESS:
      return Object.assign({}, state, {
        address: action.address
      });
      case AccountTypes.SET_BALANCE:
        return Object.assign({}, state, {
          balance: action.balance
        });
      case AccountTypes.SET_BALANCE_ON_HOLD:
        return Object.assign({}, state, {
          balanceOnHold: action.balanceOnHold
        });
    default:
      return state
  }
}

export default accountReducers;
