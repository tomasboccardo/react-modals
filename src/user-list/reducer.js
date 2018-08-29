import { handleActions } from 'redux-actions';

export const DEFAULT_STATE = {
  users: [],
}

export default handleActions({
  SAVE_USER: (state, { payload: { user } }) => ({
    users: [
      ...state.users,
      user,
    ]
  }),
}, DEFAULT_STATE);
