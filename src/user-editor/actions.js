import { createAction } from 'redux-actions';

export const confirmSave = createAction('CONFIRM_SAVE', () => undefined);
export const cancelSave = createAction('CANCEL_SAVE', () => undefined);
export const updateUserValue = createAction('UPDATE_USER_VALUE', (key, value) => ({ key, value }));

const savingUser = createAction('SAVING_USER', (user) => ({user}));
const saveUserAction = createAction('SAVE_USER', (user) => ({user}));
export const saveUser = () =>
  (dispatch, getState) => {
    const { username, firstname, lastname } = getState().userEditor;
    dispatch(savingUser({ username, firstname, lastname }));

    setTimeout(() => {
      dispatch(saveUserAction({ username, firstname, lastname }));
    }, 2000);

  }
