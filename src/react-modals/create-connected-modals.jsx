import React from 'react';
import PropTypes from 'prop-types';

import {Modal} from 'react-bootstrap';

import Presentational from './presentational';
import { ModalConfigPropTypes } from './prop-types';

/**
 * Decorates the modals configuration by allowing actions dispatching
 * @param {ReactComponent} Modals
 */
export const withActionDispatching = (Modals) => {
  const DispatcherModals = ({ modalsConfig, dispatch }) => {
    const configs = modalsConfig.map(config => ({
      // defaults
      shouldShow: true,
      // user config
      ...config,
      // overrides
      onButtonClick: button => (
        (dispatch && button.action)
          ? dispatch(button.action)
          : config.onButtonClick && config.onButtonClick(button)
      ),
    }));

    return <Modals modalsConfig={configs} />;
  };

  DispatcherModals.propTypes = {
    dispatch: PropTypes.func,
    modalsConfig: ModalConfigPropTypes,
  };

  DispatcherModals.defaultProps = {
    dispatch: null,
    modalsConfig: [],
  };

  return DispatcherModals;
};

/**
 * Creates a Modals component which is connected to the state using the connector HOC * provided by
 * the app
 * @param connector
 * @returns {ReactComponent}
 */
export default function createConnectedModals(connector) {
  return connector(withActionDispatching(Presentational));
}
