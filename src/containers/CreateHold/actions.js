import CreateHoldTypes from './types';
import { TRANSACTION_STATUS_PENDING, TRANSACTION_STATUS_SUCCESS, TRANSACTION_STATUS_ERROR } from '../../constants';
import { hold } from "../../services/token-service"

function createHold(holdId, to, amount, expiration, notary) {
  return async (dispatch) => {
    try {
      const tx = await hold(holdId, to, amount, expiration, notary);
      dispatch(updateCreateHoldStatus(TRANSACTION_STATUS_PENDING));

      // wait for transaction to be mined
      await tx.wait();

      console.log(`Mined transaction ${JSON.stringify(tx)}`);

      dispatch(updateCreateHoldStatus(TRANSACTION_STATUS_SUCCESS));
    } catch (e) {
      console.error(`Cannot create hold with hold id ${holdId}: ${e.toString()}`);
      dispatch(updateCreateHoldStatus(TRANSACTION_STATUS_ERROR));
    }
  }
}

function updateHoldId(holdId) {
  return {
    type: CreateHoldTypes.CREATE_HOLD_UPDATE_HOLD_ID,
    holdId,
  };
}

function updateAmount(amount) {
  return {
    type: CreateHoldTypes.CREATE_HOLD_UPDATE_AMOUNT,
    amount,
  };
}

function updateTo(to) {
  return {
    type: CreateHoldTypes.CREATE_HOLD_UPDATE_TO,
    to,
  };
}

function updateExpiration(expiration) {
  return {
    type: CreateHoldTypes.CREATE_HOLD_UPDATE_EXPIRATION,
    expiration,
  };
}

function updateNotary(notary) {
  return {
    type: CreateHoldTypes.CREATE_HOLD_UPDATE_NOTARY,
    notary,
  };
}


function updateCreateHoldStatus(status) {
  return {
    type: CreateHoldTypes.CREATE_HOLD_UPDATE_STATUS,
    status,
  };
}

export {
  createHold,
  updateHoldId,
  updateAmount,
  updateTo,
  updateExpiration,
  updateNotary,
  updateCreateHoldStatus,
}
