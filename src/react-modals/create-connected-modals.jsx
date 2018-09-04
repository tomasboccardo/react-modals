import React from 'react';
import Presentational from './presentational';

/**
 * Decorates the modals configuration by allowing actions dispatching
 * @param {ReactComponent} Modals
 */
export const withActionDispatching = (Modals) => {
  const DispatcherModals = ({ modalsConfig, dispatch }) => {
    const configs = modalsConfig.map(config => ({
      // defaults
      show: true,
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
