import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container"
import {TRANSACTION_STATUS_ERROR, TRANSACTION_STATUS_PENDING, TRANSACTION_STATUS_SUCCESS} from "../../constants"
import CircularProgress from "@material-ui/core/CircularProgress"

class ExecuteHoldPresenter extends React.Component {
  render() {
    return (
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <Typography variant='h4'>Execute Hold:</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Execute hold sending the desired amount to the receiver.<br />
            The rest of the amount is released on the senders account.
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id='execute-hold-hold-id'
            variant='outlined'
            label='Hold ID'
            value={this.props.holdId}
            onChange={e => this.props.handleOnChangeHoldId(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id='execute-hold-amount'
            variant='outlined'
            label='Amount'
            type='number'
            value={this.props.amount}
            onChange={e => this.props.handleOnChangeAmount(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.handleOnExecuteHold(this.props.holdId, this.props.amount)}
          >
            Execute
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Container>
            { this.props.status === TRANSACTION_STATUS_PENDING && <CircularProgress /> }
            { this.props.status === TRANSACTION_STATUS_SUCCESS && <Typography>Completed</Typography> }
            { this.props.status === TRANSACTION_STATUS_ERROR && <Typography>Error</Typography> }
          </Container>
        </Grid>
      </Grid>
    );
  }
}

export default ExecuteHoldPresenter;
