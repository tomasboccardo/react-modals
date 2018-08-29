import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createLogger } from 'redux-logger';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const configureStore = (reducers, preLoadedState) => {
  const middlewares = [
    thunk,
    logger,
  ].filter(Boolean);

  const store = createStore(
    reducers,
    preLoadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
};

export default configureStore;
