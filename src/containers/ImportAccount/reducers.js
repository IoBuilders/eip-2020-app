import ImportAccountTypes from './types';

const initialState = {
  notary: '',
  sender: '',
  senderInputIsCompleted: false,
  receiver: '',
  receiverInputIsCompleted: false,
};

function importAccountReducers(state = initialState, action) {
  switch (action.type) {
    case ImportAccountTypes.SET_NOTARY:
      return {
        ...state,
        notary: action.address
      };
    case ImportAccountTypes.UPDATE_SENDER:
      return {
        ...state,
        sender: action.address
      };
    case ImportAccountTypes.UPDATE_SENDER_INPUT_IS_COMPLETED:
      return {
        ...state,
        senderInputIsCompleted: action.isCompleted
      };
    case ImportAccountTypes.UPDATE_RECEIVER:
      return {
        ...state,
        receiver: action.address
      };
    case ImportAccountTypes.UPDATE_RECEIVER_INPUT_IS_COMPLETED:
      return {
        ...state,
        receiverInputIsCompleted: action.isCompleted
      };
    default:
      return state;
  }
}

export default importAccountReducers;
