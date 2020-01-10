import { connect } from 'react-redux';

import { isPrivateKey } from '../../services/dlt-service';
import {updateReceiver, updateReceiverInputIsCompleted, updateSender, updateSenderInputIsCompleted} from './actions';
import ImportAccountPresenter from './presenter';

function showError(isCompleted, privateKey) {
  return isCompleted && !isPrivateKey(privateKey);
}

function disableImportButton(senderPrivateKey, receiverPrivateKey) {
  return !isPrivateKey(senderPrivateKey) || !isPrivateKey(receiverPrivateKey)
}

const mapStateToProps = state => {
  return {
    sender: state.importAccount.sender,
    showSenderError: showError(state.importAccount.senderInputIsCompleted, state.importAccount.sender),
    receiver: state.importAccount.receiver,
    showReceiverError: showError(state.importAccount.receiverInputIsCompleted, state.importAccount.receiver),
    disableImportButton: disableImportButton(state.importAccount.sender, state.importAccount.receiver)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnChangeSender: address => {
      dispatch(updateSender(address));
    },
    handleOnBlurSender: () => {
      dispatch(updateSenderInputIsCompleted(true));
    },
    handleOnChangeReceiver: address => {
      dispatch(updateReceiver(address));
    },
    handleOnBlurReceiver: () => {
      dispatch(updateReceiverInputIsCompleted(true));
    },
  };
};

const ImportAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportAccountPresenter);

export default ImportAccount;
