import {applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import accountReducers from '../Account/reducers';

const rootReducer = combineReducers({
  account: accountReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
