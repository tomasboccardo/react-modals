import { createAction } from 'redux-actions';

export const cancelDeletion = createAction('CANCEL_DELETION', () => undefined);

export const editUsernameToDelete = createAction('EDIT_USERNAME_TO_DELETE', username => ({ username }));

export const validateDeletion = createAction('VALIDATE_DELETION', user => ({ user }));
export const confirmDeletion = createAction('CONFIRM_DELETION', () => undefined);
const invalidDeletion = createAction('INVALID_DELETION', () => undefined);

export const checkDeleteUser = () =>
  (dispatch, getState) => {
    const { usernameToDelete, user } = getState().userDeletion;

    if (usernameToDelete !== user.username) {
      return dispatch(invalidDeletion());
    }

    return dispatch(confirmDeletion());
  }

const deletingUser = createAction('DELETING_USER', user => ({ user }));
const deleteUserAction = createAction('DELETE_USER', user => ({ user }));
export const deleteUser = () =>
  (dispatch, getState) => {
    const { user } = getState().userDeletion;
    dispatch(deletingUser(user));

    setTimeout(() => dispatch(deleteUserAction(user)), 2000);
  }

