import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';

import CenteredGrid from './CenteredGrid';
import iobLogo from '../assets/iob.svg';
import colLogo from '../assets/col.svg';

const styles = {
  title: {
    'margin-top': '20px',
    'margin-bottom': '60px',
  },
  logoCol: {
    'width': '250px',
    'height': 'auto',
    'padding-top': '25px',
  },
  logoIob: {
    'width': '250px',
    'height': 'auto',
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <Grid container direction='column'>
      <CenteredGrid container item spacing={10}>
        <Grid item>
          <img src={colLogo} alt="Cash On Ledger" className={classes.logoCol} />
        </Grid>
        <Grid item>
          <img src={iobLogo} alt="ioBuilders" className={classes.logoIob} />
        </Grid>
      </CenteredGrid>
      <Grid item>
        <Typography className={classes.title} variant='h2' align='center'>Regulated money on chain</Typography>
      </Grid>
    </Grid>
    );
}

export default withStyles(styles)(Header);
