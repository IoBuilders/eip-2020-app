import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function ImportAccountPresenter(props) {
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdrop}
      open={true}
    >
      <Dialog
        open={true}
        fullWidth
        maxWidth='md'
      >
        <DialogTitle id="form-dialog-title">Import Accounts</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Import two registered accounts to be able to use the app.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="import-accounts-sender"
            label="Private key of sender"
            fullWidth
            value={props.sender}
            onChange={e => props.handleOnChangeSender(e.target.value)}
            onBlur={props.handleOnBlurSender}
            error={props.showSenderError}
            helperText={props.showSenderError ? 'Private key is not valid' : ' '}
          />
          <TextField
            required
            margin="dense"
            id="import-accounts-receiver"
            label="Private key of receiver"
            fullWidth
            value={props.receiver}
            onChange={e => props.handleOnChangeReceiver(e.target.value)}
            onBlur={props.handleOnBlurReceiver}
            error={props.showReceiverError}
            helperText={props.showReceiverError ? 'Private key is not valid' : ' '}
          />
        </DialogContent>
        <DialogActions>
          <Button
            disabled={props.disableImportButton}
            onClick={!props.disableImportButton ? () => props.handleImport(props.sender, props.receiver) : null}
            variant="contained"
            color="primary">
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </Backdrop>
  );
}

export default ImportAccountPresenter;
