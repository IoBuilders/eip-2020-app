import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Navigation from '../Navigation/Navigation';
import ImportAccount from '../ImportAccount';
import Balance from '../Balance';
import AccountSelector from '../AccountSelector';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

class AppPresenter extends React.Component {
  render() {
    return (
      <Container maxWidth='xl'>
        <Typography variant='h2' align='center'>Regulated money on chain</Typography>
        { this.props.showImportAccount ? (
          <ImportAccount show={this.props.showImportAccount} handleImport={this.props.handleImport} />
        ) : (
          <Router>
            <div className={this.props.classes.root}>
              <Grid container spacing={2} direction='column'>
                <Grid container item justify='space-between'>
                  <Grid item>
                    <AccountSelector
                      accounts={this.props.accounts}
                      handleOnChange={this.props.handleAccountChange}
                      selectedAccount={this.props.selectedAccountIndex}
                    />
                  </Grid>
                  <Grid item>
                      <Switch>
                        {this.props.navigationItems.map((item, i) => (
                          <Route
                            key={i}
                            exact
                            path={item.path}
                            render={(props) => <item.component {...props} />}
                          />
                        ))}
                      </Switch>
                  </Grid>
                  <Grid item>
                      <Balance address={this.props.selectedAddress}/>
                  </Grid>
                </Grid>
                <Grid item>
                  <Navigation items={this.props.navigationItems} />
                </Grid>
              </Grid>
            </div>
          </Router>
          )}
      </Container>
    );
  }
}

export default withStyles(styles)(AppPresenter);
