import { connect } from 'react-redux';

import CreateHoldPresenter from './presenter';
import { updateHoldId, updateAmount, updateTo, updateExpiration, updateNotary, createHold } from './actions';

const mapStateToProps = state => {
  return {
    holdId: state.createHold.holdId,
    to: state.createHold.to,
    amount: state.createHold.amount,
    expiration: state.createHold.expiration,
    notary: state.createHold.notary,
    status: state.createHold.status,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnCreateHold: (holdId, to, amount, expiration, notary) => {
      dispatch(createHold(holdId, to, amount, expiration, notary));
    },
    handleOnChangeHoldId: holdId => {
      dispatch(updateHoldId(holdId));
    },
    handleOnChangeAmount: amount => {
      dispatch(updateAmount(amount));
    },
    handleOnChangeTo: to => {
      dispatch(updateTo(to));
    },
    handleOnChangeExpiration: expiration => {
      dispatch(updateExpiration(expiration));
    },
    handleOnChangeNotary: notary => {
      dispatch(updateNotary(notary));
    }
  }
};

const CreateHold = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateHoldPresenter);

export default CreateHold;
