import { combineReducers } from 'redux';
import configureStore from './store-utils';
import { reducer as userEditor } from './user-editor';
import { reducer as userList } from './user-list';


// eslint-disable-next-line import/prefer-default-export
export function createStore() {
  return configureStore(combineReducers({
    userEditor,
    userList
  }));
}
