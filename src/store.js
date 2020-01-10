import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import appReducers from './containers/App/reducers';
import importAccountReducers from './containers/ImportAccount/reducers';
import balanceReducers from './containers/Balance/reducers';
import transferReducers from './containers/Transfer/reducers';
import createHoldReducers from './containers/CreateHold/reducers';
import releaseHoldReducers from './containers/ReleaseHold/reducers';
import executeHoldReducers from './containers/ExecuteHold/reducers';

const rootReducer = combineReducers({
  app: appReducers,
  balance: balanceReducers,
  importAccount: importAccountReducers,
  transfer: transferReducers,
  createHold: createHoldReducers,
  releaseHold: releaseHoldReducers,
  executeHold: executeHoldReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
