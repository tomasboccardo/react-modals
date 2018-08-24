import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

export const ModalConfigPropTypes = PropTypes.arrayOf(PropTypes.shape({
  ...Modal.propTypes,
  key: PropTypes.string,
  show: PropTypes.bool,
  content: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  title: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  body: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  buttons: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, callback: PropTypes.func })),
}));
