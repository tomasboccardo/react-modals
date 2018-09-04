import { handleActions } from 'redux-actions';

export const DEFAULT_STATE = {
  username: '',
  firstname: '',
  lastname: '',
  status: 'OFF',
}

export default handleActions({
  UPDATE_USER_VALUE: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  CONFIRM_SAVE: state => ({
    ...state,
    status: 'CONFIRM_SAVE',
  }),
  SAVING_USER: (state) => ({
    ...state,
    status: 'LOADING',
  }),
  SAVE_USER: (state) => ({
    ...DEFAULT_STATE,
    status: 'SUCCESS',
  }),
  DISMISS_SUCCESS: (state) => DEFAULT_STATE,
  CANCEL_SAVE: state => ({
    ...state,
    status: 'OFF',
  }),
}, DEFAULT_STATE);
