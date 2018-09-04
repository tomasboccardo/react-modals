import { handleActions } from 'redux-actions';

export const DEFAULT_STATE = {
  status: 'OFF',
  user: null,
  usernameToDelete: '',
  error: null,
}

export default handleActions({
  EDIT_USERNAME_TO_DELETE: (state, { payload: { username } }) => ({
    ...state,
    usernameToDelete: username,
  }),
  VALIDATE_DELETION: (state, { payload: { user } }) => ({
    ...state,
    user,
    status: 'DELETE_VALIDATION',
  }),
  INVALID_DELETION: state => ({
    ...state,
    error: 'Username does not match',
    status: 'DELETE_VALIDATION',
  }),
  CONFIRM_DELETION: state => ({
    ...state,
    status: 'DELETE_CONFIRMATION',
  }),
  DELETING_USER: state => ({
    ...state,
    status: 'LOADING',
  }),
  DELETE_USER: state => ({
    ...state,
    status: 'SUCCESS',
  }),
  DISMISS_SUCCESS: state => DEFAULT_STATE,
  CANCEL_DELETION: state => ({
    ...state,
    status: 'OFF',
  }),
}, DEFAULT_STATE);
