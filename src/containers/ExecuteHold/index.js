import { connect } from 'react-redux';

import ExecuteHoldPresenter from './presenter';
import { sendExecuteHold, updateHoldId, updateAmount } from './actions';

const mapStateToProps = state => {
  return {
    holdId: state.executeHold.holdId,
    amount: state.executeHold.amount,
    status: state.executeHold.status,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnExecuteHold: (holdId, amount) => {
      dispatch(sendExecuteHold(holdId, amount));
    },
    handleOnChangeHoldId: holdId => {
      dispatch(updateHoldId(holdId));
    },
    handleOnChangeAmount: amount => {
      dispatch(updateAmount(amount));
    },
  }
};

const ExecuteHold = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecuteHoldPresenter);

export default ExecuteHold;
