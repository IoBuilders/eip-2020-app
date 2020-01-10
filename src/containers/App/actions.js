import AppTypes from './types';

function addAccount(wallet, name, role) {
  return {
    type: AppTypes.APP_ADD_ACCOUNT,
    wallet,
    name,
    role,
  };
}

function updateSelectedAccountIndex(accountIndex) {
  return {
    type: AppTypes.APP_UPDATE_SELECTED_ACCOUNT_INDEX,
    accountIndex
  }
}

function updateSelectedNavigationIndex(index) {
  return {
    type: AppTypes.APP_UPDATE_SELECTED_NAVIGATION_INDEX,
    index
  }
}

export {
  addAccount,
  updateSelectedAccountIndex,
  updateSelectedNavigationIndex,
}
