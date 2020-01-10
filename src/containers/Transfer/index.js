import { connect } from 'react-redux';

import TransferPresenter from './presenter';
import { sendTransfer, updateAmount, updateTo } from './actions';

const mapStateToProps = state => {
  return {
    amount: state.transfer.amount,
    status: state.transfer.status,
    to: state.transfer.to,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnTransfer: (to, amount) => {
      dispatch(sendTransfer(to, amount));
    },
    handleOnChangeAmount: amount => {
      dispatch(updateAmount(amount));
    },
    handleOnChangeTo: to => {
      dispatch(updateTo(to));
    }
  }
};

const Transfer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransferPresenter);

export default Transfer;
