import { connect } from 'react-redux';

import ReleaseHoldPresenter from './presenter';
import { sendReleaseHold, updateHoldId } from './actions';

const mapStateToProps = state => {
  return {
    holdId: state.releaseHold.holdId,
    status: state.releaseHold.status,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnReleaseHold: (holdId) => {
      dispatch(sendReleaseHold(holdId));
    },
    handleOnChangeHoldId: holdId => {
      dispatch(updateHoldId(holdId));
    },
  }
};

const ReleaseHold = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReleaseHoldPresenter);

export default ReleaseHold;
