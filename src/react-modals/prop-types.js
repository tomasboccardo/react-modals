import PropTypes from 'prop-types';

export const ModalConfigPropTypes = PropTypes.arrayOf(PropTypes.shape({
  key: PropTypes.string,
  show: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  body: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  buttons: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, action: PropTypes.func })),
  onButtonClick: PropTypes.func.isRequired,
}));
