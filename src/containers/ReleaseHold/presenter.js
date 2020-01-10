import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {TRANSACTION_STATUS_ERROR, TRANSACTION_STATUS_PENDING, TRANSACTION_STATUS_SUCCESS} from "../../constants"
import CircularProgress from "@material-ui/core/CircularProgress"
import Container from "@material-ui/core/Container"

class ReleaseHoldPresenter extends React.Component {
  render() {
    return (
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <Typography variant='h4'>Release Hold:</Typography>
        </Grid>
        <Grid item>
          <Typography>Cancel hold and release money on senders account</Typography>
        </Grid>
        <Grid item>
          <TextField
            id='release-hold-hold-id'
            variant='outlined'
            label='Hold ID'
            value={this.props.holdId}
            onChange={e => this.props.handleOnChangeHoldId(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.handleOnReleaseHold(this.props.holdId)}
          >
            Release
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

export default ReleaseHoldPresenter;
