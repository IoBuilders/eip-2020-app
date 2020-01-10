import ImportAccountTypes from './types';

function setNotary(address) {
  return {
    type: ImportAccountTypes.SET_NOTARY,
    address,
  };
}

function updateSender(address) {
  return {
    type: ImportAccountTypes.UPDATE_SENDER,
    address,
  };
}

function updateSenderInputIsCompleted(isCompleted) {
  return {
    type: ImportAccountTypes.UPDATE_SENDER_INPUT_IS_COMPLETED,
    isCompleted,
  };
}

function updateReceiver(address) {
  return {
    type: ImportAccountTypes.UPDATE_RECEIVER,
    address,
  }
}

function updateReceiverInputIsCompleted(isCompleted) {
  return {
    type: ImportAccountTypes.UPDATE_RECEIVER_INPUT_IS_COMPLETED,
    isCompleted,
  };
}

export {
  setNotary,
  updateSender,
  updateSenderInputIsCompleted,
  updateReceiver,
  updateReceiverInputIsCompleted,
};
