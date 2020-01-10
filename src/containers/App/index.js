import { connect } from 'react-redux';

import { addAccount, updateSelectedAccountIndex } from './actions';
import { updateNotary } from '../CreateHold/actions';

import AppPresenter from './presenter';
import { privateKeyToWallet, createNewWallet } from '../../services/token-service';
import { ROLE_NOTARY, ROLE_USER } from '../../constants';
import navigationItems from '../Navigation/items';

function getSelectedAddress(state) {
  if (state.app.accounts.length === 0) {
    return '';
  }

  return state.app.accounts[state.app.selectedAccountIndex].wallet.address;
}

function getSelectedRole(state) {
  if (state.app.accounts.length === 0) {
    return '';
  }

  return state.app.accounts[state.app.selectedAccountIndex].role;
}

const mapStateToProps = state => {
  return {
    showImportAccount: state.app.accounts.length === 0,
    accounts: state.app.accounts,
    selectedAccountIndex: state.app.selectedAccountIndex,
    selectedAddress: getSelectedAddress(state),
    navigationItems: navigationItems.filter((item) => item.role === getSelectedRole(state))
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleImport: (senderPrivateKey, receiverPrivateKey) => {
      const notaryWallet = createNewWallet();

      dispatch(addAccount(privateKeyToWallet(senderPrivateKey), 'Sender', ROLE_USER));
      dispatch(addAccount(privateKeyToWallet(receiverPrivateKey), 'Receiver', ROLE_USER));
      dispatch(addAccount(notaryWallet, 'Notary', ROLE_NOTARY));

      dispatch(updateNotary(notaryWallet.address));

      dispatch(updateSelectedAccountIndex(0));
    },
    handleAccountChange: (selectedAccountIndex) => {
      dispatch(updateSelectedAccountIndex(selectedAccountIndex));
    }
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPresenter);

export default App;
