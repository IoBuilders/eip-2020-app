import TransferTypes from './types';

const initialState = {
  amount: '',
  status: '',
  to: '',
}

function transferReducers(state = initialState, action) {
  switch (action.type) {
    case TransferTypes.TRANSFER_UPDATE_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    case TransferTypes.TRANSFER_UPDATE_TO:
      return {
        ...state,
        to: action.to,
      };
    case TransferTypes.TRANSFER_UPDATE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}

export default transferReducers;
