import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


class AccountPresenter extends React.Component {
  componentDidMount() {
    this.balanceInterval = setInterval(
      () => this.props.updateBalanceOf(this.props.address),
      this.props.updateInterval
    );

    this.balanceOnHoldInterval = setInterval(
      () => this.props.updateBalanceOnHold(this.props.address),
      this.props.updateInterval
    );
  }

  componentWillUnmount() {
    clearInterval(this.balanceInterval);
    clearInterval(this.balanceOnHoldInterval);
  }

  render() {
    return(
      <Paper variant="outlined" >
        <Typography variant='h5'>Balance</Typography>
        <Typography>{this.props.balance}</Typography>
        <Typography variant='h5'>Balance On Hold</Typography>
        <Typography>{this.props.balanceOnHold}</Typography>
      </Paper>
    );
  }
}

export default AccountPresenter;
