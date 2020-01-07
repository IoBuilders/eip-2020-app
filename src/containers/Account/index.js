import { connect } from 'react-redux';

import { getUpdateIntervalMs } from '../../services/environment-service';
import { updateBalanceOf, updateBalanceOnHold } from './actions';
import AccountPresenter from './presenter';

const mapStateToProps = state => {
  return {
    address: state.account.address,
    balance: state.account.balance,
    balanceOnHold: state.account.balanceOnHold,
    updateInterval: getUpdateIntervalMs(),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBalanceOf: address => {
      dispatch(updateBalanceOf(address))
    },
    updateBalanceOnHold: address => {
      dispatch(updateBalanceOnHold(address))
    },
  }
}

const Account = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPresenter);

export default Account;
