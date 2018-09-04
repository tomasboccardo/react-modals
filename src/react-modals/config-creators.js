import React from 'react';
import { dismissSuccess } from '../actions';
import Success from '../components/success';
import Loading from '../components/loading';

/**
 * @param configOverride
 * @returns {ModalConfig}
 */
export const createLoadingConfig = (configOverride) => ({
  show: true,
  content: (<Loading />),
  ...configOverride,
});

/**
 * @param configOverride
 * @returns {ModalConfig}
 */
export const createSuccessConfig = (configOverride) => ({
  show: true,
  title: 'Success',
  body: (<Success />),
  buttons: [
    { label: 'Ok', action: dismissSuccess() },
  ],
  ...configOverride,
});

/**
 * @param configOverride
 * @returns {ModalConfig}
 */
export const createClosedConfig = (configOverride) => ({
  title: '',
  show: false,
  buttons: [],
  ...configOverride,
});
