import { handleActions } from 'redux-actions';

export const DEFAULT_STATE = {
  users: [
    { username: 'tomas', firstname: 'Tomás', lastname: 'Boccardo' },
  ],
}

export default handleActions({
  SAVE_USER: (state, { payload: { user } }) => ({
    users: [
      ...state.users,
      user,
    ]
  }),
  DELETE_USER: (state, { payload: { user } }) => ({
    users: state.users.filter(u => u.username !== user.username),
  }),
}, DEFAULT_STATE);
