import { LAYOUT, SIZE, ICON } from '@m/atom/lib/modal';

/**
 * A set of short-hand functions for configuring the common scenarios
 */

/**
 * @type ModalConfig {{
 *    title: string,
 *    titleIcon: string,
 *    shouldShow: boolean
 *    size: string,
 *    layout: string,
 *    isLight: boolean,
 *    shouldAnimateSizeChange: boolean,
 *    buttons: Array
 *    onEnter: Function
 *    onEntered: Function
 *    onExit: Function
 *    onExited: Function
 *    onButtonClick: Function
 *    onSizeChangeAnimate: Function
 *  }}
 */

/**
 * @param configOverride
 * @returns {ModalConfig}
 */
export const createConfirmConfig = (configOverride) => ({
  layout: LAYOUT.MESSAGING,
  size: SIZE.REGULAR,
  ...configOverride,
});

/**
 * @param configOverride
 * @returns {ModalConfig}
 */
export const createPromptConfig = (configOverride) => ({
  layout: LAYOUT.CONTENT,
  size: SIZE.REGULAR,
  ...configOverride,
});

/**
 * @param configOverride
 * @returns {ModalConfig}
 */
export const createLoadingConfig = (configOverride) => ({
  layout: LAYOUT.MESSAGING,
  size: SIZE.SMALL,
  titleIcon: ICON.LOADING,
  content: null,
  ...configOverride,
});

/**
 * @param configOverride
 * @returns {ModalConfig}
 */
export const createSuccessConfig = (configOverride) => ({
  layout: LAYOUT.MESSAGING,
  size: SIZE.SMALL,
  titleIcon: ICON.SUCCESS,
  content: null,
  ...configOverride,
});

/**
 * @param configOverride
 * @returns {ModalConfig}
 */
export const createErrorConfig = (configOverride) => ({
  layout: LAYOUT.MESSAGING,
  size: SIZE.SMALL,
  titleIcon: ICON.ERROR,
  content: null,
  ...configOverride,
});

/**
 * @param configOverride
 * @returns {ModalConfig}
 */
export const createClosedConfig = (configOverride) => ({
  title: '',
  shouldShow: false,
  buttons: [],
  ...configOverride,
});
