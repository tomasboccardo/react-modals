import { connect } from 'react-redux';
import {
  Modals,
  combineConfigurators,
  withActionDispatching,
} from '../../react-modals';
import configConfirmSave from '../../user-editor/confirm-save';
import configConfirmDelete from '../../user-list/user-deletion/confirm-deletion';

export default connect(combineConfigurators(
  configConfirmSave,
  configConfirmDelete,
))(withActionDispatching(Modals));
