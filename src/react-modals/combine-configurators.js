/**
 * Utility function for combining all the app modal configuration syncing functions. It creates a
 * function that calls every configurator function and returns an array of modal configurations
 * @param configurators
 * @returns {Function}
 */
function combineConfigurators(...configurators) {
  return state => ({
    modalsConfig: configurators.map(configurator => configurator(state)).filter(config => config),
  });
}

export default combineConfigurators;
