import React from 'react';
import { configs } from '../../../react-modals'
import { checkDeleteUser, deleteUser, cancelDeletion } from '../actions'
import DeletionVerificationForm from '../components/verification-form';

const configConfirmDelete = (state) => {
  let config;
  switch (state.userDeletion.status) {
    case 'DELETE_VALIDATION':
      config = {
        show: true,
        title: 'Confirm Deletion',
        body: (<DeletionVerificationForm />),
        buttons: [
          { label: 'Delete', action: checkDeleteUser() },
          { label: 'Cancel', action: cancelDeletion() }
        ],
      };
      break;
    case 'DELETE_CONFIRMATION':
      config = {
        show: true,
        title: 'Confirm Deletion',
        body: 'Are you sure you want to delete this user?',
        buttons: [
          { label: 'Yes', action: deleteUser() },
          { label: 'No', action: cancelDeletion() }
        ],
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
    key: 'user-deletion-modal',
  };
}

export default configConfirmDelete;
