import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import {Provider} from "react-redux"

import store from "./store"
import navigationItems from "../Navigation/items"
import Navigation from "../Navigation/Navigation"
import Account from "../Account"

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <Container maxWidth='md'>
            <Typography variant='h1' align='center'>EIP-2020</Typography>
            <Grid container spacing={2} direction='column'>
              <Grid item container>
                <Grid item sm>
                  <Switch>
                    {navigationItems.map((item, i) => (
                      <Route key={i} exact path={item.path} component={item.component} />
                    ))}
                  </Switch>
                </Grid>
                <Grid item xl>
                  <Account/>
                </Grid>
              </Grid>
              <Grid item>
                <Navigation items={navigationItems}/>
              </Grid>
            </Grid>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
