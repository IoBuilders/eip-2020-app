import AppTypes from './types';
import { connectWallet } from '../../services/token-service';

const initialState = {
  accounts: [],
  selectedAccountIndex: 0,
  selectedNavigationIndex: 0,
}

function appReducers(state = initialState, action) {
  switch (action.type) {
    case AppTypes.APP_ADD_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.concat({
          wallet: action.wallet,
          name: action.name,
          role: action.role,
        }),
      };
    case AppTypes.APP_UPDATE_SELECTED_ACCOUNT_INDEX:
      const selectedWallet = state.accounts[action.accountIndex].wallet;
      connectWallet(selectedWallet);

      return {
        ...state,
        selectedAccountIndex: action.accountIndex,
      };
    case AppTypes.APP_UPDATE_SELECTED_NAVIGATION_INDEX:
      return {
        ...state,
        selectedNavigationIndex: action.index,
      };
    default:
      return state;
  }
}

export default appReducers;
