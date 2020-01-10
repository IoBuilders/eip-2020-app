import ReleaseHoldTypes from './types';
import { releaseHold } from '../../services/token-service';
import {TRANSACTION_STATUS_ERROR, TRANSACTION_STATUS_PENDING, TRANSACTION_STATUS_SUCCESS} from '../../constants';

function sendReleaseHold(holdId) {
  return async (dispatch) => {
    try {
      const tx = await releaseHold(holdId);
      dispatch(updateReleaseHoldStatus(TRANSACTION_STATUS_PENDING));

      // wait for transaction to be mined
      await tx.wait();

      dispatch(updateReleaseHoldStatus(TRANSACTION_STATUS_SUCCESS));
    } catch (e) {
      console.error(`Cannot release hold with id ${holdId}: ${e.toString()}`);
      dispatch(updateReleaseHoldStatus(TRANSACTION_STATUS_ERROR));
    }
  }
}

function updateReleaseHoldStatus(status) {
  return {
    type: ReleaseHoldTypes.RELEASE_HOLD_UPDATE_STATUS,
    status,
  };
}

function updateHoldId(holdId) {
  return {
    type: ReleaseHoldTypes.RELEASE_HOLD_UPDATE_HOLD_ID,
    holdId,
  };
}

export {
  sendReleaseHold,
  updateReleaseHoldStatus,
  updateHoldId,
};
