import { configs } from '../../react-modals'
import { saveUser, cancelSave } from '../actions'

const configConfirmSave = (state) => {
  let config;
  switch (state.userEditor.status) {
    case 'CONFIRM_SAVE':
      config = {
        show: true,
        title: 'Confirm Save',
        body: 'Are you sure you want to save this user?',
        buttons: [
          { label: 'Yes', action: saveUser() },
          { label: 'No', action: cancelSave() }
        ]
      };
      break;
    case 'LOADING':
      config = configs.createLoadingConfig();
      break;
    case 'SUCCESS':
      config = configs.createSuccessConfig();
      break;
    default:
      config = configs.createClosedConfig();
      break;
  }

  return {
    ...config,
    key: 'user-save-modal',
  };
}

export default configConfirmSave;
