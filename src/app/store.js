import { combineReducers } from 'redux';
import configureStore from './store-utils';


// eslint-disable-next-line import/prefer-default-export
export function createStore() {
  return configureStore(combineReducers({
  }));
}
