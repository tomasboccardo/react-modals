import { handleActions } from 'redux-actions';

export const DEFAULT_STATE = {
  username: '',
  firstname: '',
  lastname: '',
  userIsConfirmingChanges: false,
}

export default handleActions({
  UPDATE_USER_VALUE: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  CONFIRM_SAVE: state => ({
    ...state,
    userIsConfirmingChanges: true,
  }),
  SAVE_USER: (state) => DEFAULT_STATE,
  CANCEL_SAVE: state => ({
    ...state,
    userIsConfirmingChanges: false,
  }),
}, DEFAULT_STATE);
