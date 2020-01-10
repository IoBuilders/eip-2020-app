import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Navigation from '../Navigation/Navigation';
import ImportAccount from '../ImportAccount';
import Balance from '../Balance';
import AccountSelector from '../AccountSelector';

class AppPresenter extends React.Component {
  renderSelectedContainer() {
    const selectedNavigationItem = this.props.navigationItems[this.props.selectedNavigationIndex];

    return <selectedNavigationItem.component />;
  }

  render() {
    return (
      <Container maxWidth='xl'>
        <Typography variant='h2' align='center'>Regulated money on chain</Typography>
        { this.props.showImportAccount ? (
          <ImportAccount show={this.props.showImportAccount} handleImport={this.props.handleImport} />
        ) : (
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
                  { this.renderSelectedContainer() }
                </Grid>
                <Grid item>
                    <Balance address={this.props.selectedAddress}/>
                </Grid>
              </Grid>
              <Grid item>
                <Navigation
                  items={this.props.navigationItems}
                  selectedNavigationIndex={this.props.selectedNavigationIndex}
                  handleOnChange={this.props.handleNavigationChange}
                />
              </Grid>
            </Grid>
          )}
      </Container>
    );
  }
}

export default AppPresenter;
