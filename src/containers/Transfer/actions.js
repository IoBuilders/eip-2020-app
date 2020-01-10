import TransferTypes from './types';
import { transfer } from '../../services/token-service';
import { TRANSACTION_STATUS_PENDING, TRANSACTION_STATUS_SUCCESS, TRANSACTION_STATUS_ERROR } from '../../constants';

function sendTransfer(toAddress, amount) {
  return async (dispatch) => {
     try {
      const tx = await transfer(toAddress, amount);
      dispatch(updateTransferStatus(TRANSACTION_STATUS_PENDING));

      // wait for transaction to be mined
      await tx.wait();

      console.log(`Mined transaction ${JSON.stringify(tx)}`);

      dispatch(updateTransferStatus(TRANSACTION_STATUS_SUCCESS));
    } catch (e) {
      console.error(`Cannot transfer ${amount} tokens to ${toAddress}: ${e.toString()}`);
      dispatch(updateTransferStatus(TRANSACTION_STATUS_ERROR));
    }
  }
}

function updateTransferStatus(status) {
  return {
    type: TransferTypes.TRANSFER_UPDATE_STATUS,
    status,
  };
}

function updateTo(to) {
  return {
    type: TransferTypes.TRANSFER_UPDATE_TO,
    to,
  };
}

function updateAmount(amount) {
  return {
    type: TransferTypes.TRANSFER_UPDATE_AMOUNT,
    amount,
  };
}

export {
  sendTransfer,
  updateTransferStatus,
  updateTo,
  updateAmount
}
