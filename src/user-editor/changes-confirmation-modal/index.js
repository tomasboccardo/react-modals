import { configs } from '../../react-modals'
import { saveUser, cancelSave } from '../actions'

const configConfirmChangesModal = (state) => {
  return state.userEditor.userIsConfirmingChanges
    ? {
    show: true,
    title: 'Confirm Changes',
    body: 'Are you sure you want to save this user?',
    buttons: [
      { label: 'Yes', action: saveUser() },
      { label: 'No', action: cancelSave() }
    ]
  } : configs.createClosedConfig();
}

export default configConfirmChangesModal;
