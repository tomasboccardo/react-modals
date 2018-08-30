import { connect } from 'react-redux';
import {
  Modals,
  combineConfigurators,
  withActionDispatching,
} from '../../react-modals';
import configConfirmSaveModal from '../../user-editor/confirm-changes';

export default connect(combineConfigurators(
  configConfirmSaveModal,
))(withActionDispatching(Modals));
