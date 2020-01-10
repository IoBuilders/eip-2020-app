import AppTypes from './types';
import { connectWallet } from '../../services/token-service';

const initialState = {
  accounts: [],
  selectedAccountIndex: 0,
}

function appReducers(state = initialState, action) {
  switch (action.type) {
    case AppTypes.ADD_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.concat({
          wallet: action.wallet,
          name: action.name,
          role: action.role,
        }),
      };
    case AppTypes.UPDATE_SELECTED_ACCOUNT_INDEX:
      const selectedWallet = state.accounts[action.accountIndex].wallet;
      connectWallet(selectedWallet);

      return {
        ...state,
        selectedAccountIndex: action.accountIndex,
      };
    default:
      return state;
  }
}

export default appReducers;
