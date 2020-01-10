import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import {TRANSACTION_STATUS_ERROR, TRANSACTION_STATUS_PENDING, TRANSACTION_STATUS_SUCCESS} from "../../constants"
import CircularProgress from "@material-ui/core/CircularProgress"
import Container from "@material-ui/core/Container"

class CreateHoldPresenter extends React.Component {
  render() {
    return (
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <Typography variant='h4'>Hold:</Typography>
        </Grid>
        <Grid item>
          <Typography>Block money on senders account</Typography>
        </Grid>
        <Grid item>
          <TextField
            id='create-hold-hold-id'
            variant='outlined'
            label='Hold ID'
            value={this.props.holdId}
            onChange={e => this.props.handleOnChangeHoldId(e.target.value)}
          />
        </Grid>
        <Grid container item direction='row' spacing={3}>
          <Grid item>
            <TextField
              id='create-hold-amount'
              variant='outlined'
              label='Amount'
              type='number'
              value={this.props.amount}
              onChange={e => this.props.handleOnChangeAmount(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id='create-hold-to-address'
              variant='outlined'
              label='To address'
              value={this.props.to}
              onChange={e => this.props.handleOnChangeTo(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container item direction='row' spacing={3}>
          <Grid item>
            <TextField
              id='create-hold-expiration'
              variant='outlined'
              label='Expiration Time'
              type='number'
              value={this.props.expiration}
              onChange={e => this.props.handleOnChangeExpiration(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              id='create-hold-notary-address'
              variant='outlined'
              label='Notary address'
              value={this.props.notary}
              onChange={e => this.props.handleOnChangeNotary(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.handleOnCreateHold(
              this.props.holdId,
              this.props.to,
              this.props.amount,
              this.props.expiration,
              this.props.notary
            )}
          >
            Create
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Container>
            { this.props.status === TRANSACTION_STATUS_PENDING && <CircularProgress /> }
            { this.props.status === TRANSACTION_STATUS_SUCCESS && <Typography color='textSecondary'>Completed</Typography> }
            { this.props.status === TRANSACTION_STATUS_ERROR && <Typography color='textSecondary'>Error</Typography> }
          </Container>
        </Grid>
      </Grid>
    );
  }
}

export default CreateHoldPresenter;
