import ExecuteHoldTypes from './types';
import { executeHold } from '../../services/token-service';
import {TRANSACTION_STATUS_ERROR, TRANSACTION_STATUS_PENDING, TRANSACTION_STATUS_SUCCESS} from '../../constants';

function sendExecuteHold(holdId, amount) {
  return async (dispatch) => {
    try {
      const tx = await executeHold(holdId, amount);
      dispatch(updateExecuteHoldStatus(TRANSACTION_STATUS_PENDING));

      // wait for transaction to be mined
      await tx.wait();

      dispatch(updateExecuteHoldStatus(TRANSACTION_STATUS_SUCCESS));
    } catch (e) {
      console.error(`Cannot release hold with id ${holdId}: ${e.toString()}`);
      dispatch(updateExecuteHoldStatus(TRANSACTION_STATUS_ERROR));
    }
  }
}

function updateExecuteHoldStatus(status) {
  return {
    type: ExecuteHoldTypes.EXECUTE_HOLD_UPDATE_STATUS,
    status,
  };
}

function updateHoldId(holdId) {
  return {
    type: ExecuteHoldTypes.EXECUTE_HOLD_UPDATE_HOLD_ID,
    holdId,
  };
}

function updateAmount(amount) {
  return {
    type: ExecuteHoldTypes.EXECUTE_HOLD_UPDATE_AMOUNT,
    amount,
  };
}

export {
  sendExecuteHold,
  updateHoldId,
  updateAmount,
};
