import ExecuteHoldTypes from './types';

const initialState = {
  holdId: '',
  amount: '',
  status: '',
};

function executeHoldReducers(state = initialState, action) {
  switch (action.type) {
    case ExecuteHoldTypes.EXECUTE_HOLD_UPDATE_HOLD_ID:
      return {
        ...state,
        holdId: action.holdId,
      };
    case ExecuteHoldTypes.EXECUTE_HOLD_UPDATE_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    case ExecuteHoldTypes.EXECUTE_HOLD_UPDATE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}

export default executeHoldReducers;
