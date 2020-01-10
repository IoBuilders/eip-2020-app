import CreateHoldTypes from './types';

const initialState = {
  holdId: '',
  amount: '',
  to: '',
  expiration: '',
  notary: '',
  status: '',
}

function createHoldReducers(state = initialState, action) {
  switch (action.type) {
    case CreateHoldTypes.CREATE_HOLD_UPDATE_HOLD_ID:
      return {
        ...state,
        holdId: action.holdId,
      };
    case CreateHoldTypes.CREATE_HOLD_UPDATE_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    case CreateHoldTypes.CREATE_HOLD_UPDATE_TO:
      return {
        ...state,
        to: action.to,
      };
    case CreateHoldTypes.CREATE_HOLD_UPDATE_EXPIRATION:
      return {
        ...state,
        expiration: action.expiration,
      };
    case CreateHoldTypes.CREATE_HOLD_UPDATE_NOTARY:
      return {
        ...state,
        notary: action.notary,
      };
    case CreateHoldTypes.CREATE_HOLD_UPDATE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}

export default createHoldReducers;
