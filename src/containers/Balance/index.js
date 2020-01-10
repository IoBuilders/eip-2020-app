import { connect } from 'react-redux';

import { getUpdateIntervalMs } from '../../services/environment-service';
import { isAddress } from '../../services/dlt-service';
import { updateBalanceOf, updateBalanceOnHold } from './actions';
import BalancePresenter from './presenter';

function getNormalizedBalance(balances, address) {
  if(!(address in balances)) {
    return 0.00;
  }

  return balances[address];
}

const mapStateToProps = (state, ownProps) => {
  return {
    balance: getNormalizedBalance(state.balance.balances, ownProps.address),
    balanceOnHold: getNormalizedBalance(state.balance.balancesOnHold, ownProps.address),
    updateInterval: getUpdateIntervalMs(),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBalanceOf: address => {
      if(isAddress(address)) {
        dispatch(updateBalanceOf(address));
      }
    },
    updateBalanceOnHold: address => {
      if(isAddress(address)) {
        dispatch(updateBalanceOnHold(address));
      }
    },
  }
}

const Balance = connect(
  mapStateToProps,
  mapDispatchToProps
)(BalancePresenter);

export default Balance;
