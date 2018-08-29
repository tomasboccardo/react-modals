import createConnectedModals from './create-connected-modals';
import combineConfigurators from './combine-configurators';
import * as configs from './config-creators';
import { withActionDispatching } from './create-connected-modals';
import Modals from './presentational'

export {
  Modals,
  withActionDispatching,
  combineConfigurators,
  createConnectedModals,
  configs,
}
