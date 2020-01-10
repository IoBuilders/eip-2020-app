import AppTypes from './types';

function addAccount(wallet, name, role) {
  return {
    type: AppTypes.ADD_ACCOUNT,
    wallet,
    name,
    role,
  };
}

function updateSelectedAccountIndex(accountIndex) {
  return {
    type: AppTypes.UPDATE_SELECTED_ACCOUNT_INDEX,
    accountIndex
  }
}

export {
  addAccount,
  updateSelectedAccountIndex,
}
