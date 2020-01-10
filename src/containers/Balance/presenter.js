import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class BalancePresenter extends React.Component {
  componentDidMount() {
    // initial retrieval of balances
    this.props.updateBalanceOf(this.props.address);
    this.props.updateBalanceOnHold(this.props.address);

    // periodic retrieval of balances
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

  formatAmount(amount) {
    return `${amount.toFixed(2)} €`;
  }

  render() {
    return(
      <Paper variant="outlined">
        <Grid>
          <Typography align='right' variant='h5'>Total Balance: {this.formatAmount(this.props.balance + this.props.balanceOnHold)}</Typography>
          <Typography align='right' variant='h5'>Available Balance: {this.formatAmount(this.props.balance)}</Typography>
          <Typography align='right' variant='h5'>Held Balance: {this.formatAmount(this.props.balanceOnHold)}</Typography>
        </Grid>
      </Paper>
    );
  }
}

export default BalancePresenter;
