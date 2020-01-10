import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";

import { TRANSACTION_STATUS_PENDING, TRANSACTION_STATUS_SUCCESS, TRANSACTION_STATUS_ERROR } from '../../constants';


class TransferPresenter extends React.Component {
  render() {
    return (
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <Typography variant='h4'>Transfer:</Typography>
        </Grid>
        <Grid item>
          <Typography>Send money to another user of Cash on Ledger</Typography>
        </Grid>
        <Grid container item direction='row' spacing={3}>
          <Grid item>
            <TextField
              id='transfer-amount'
              variant='outlined'
              label='Amount'
              type='number'
              value={this.props.amount}
              onChange={e => this.props.handleOnChangeAmount(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id='transfer-to-address'
              variant='outlined'
              label='To address'
              value={this.props.to}
              onChange={e => this.props.handleOnChangeTo(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.handleOnTransfer(this.props.to, this.props.amount)}
          >
            Transfer
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Container>
            { this.props.status === TRANSACTION_STATUS_PENDING && <CircularProgress /> }
            { this.props.status === TRANSACTION_STATUS_SUCCESS && <Typography color='green'>Completed</Typography> }
            { this.props.status === TRANSACTION_STATUS_ERROR && <Typography color='red'>Error</Typography> }
          </Container>
        </Grid>
      </Grid>
    );
  }
}

export default TransferPresenter;
