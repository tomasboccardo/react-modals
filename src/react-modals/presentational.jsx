import React from 'react';
import PropTypes from 'prop-types';

import {Modal} from 'react-bootstrap';

const Modals = ({ modalsConfig }) => (
  <div>
    {modalsConfig.map((config) => {
      const { content, ...props } = config;
      return (
        <Modal {...props}>
          {content &&
          <div>
            <config.content />
          </div>}
        </Modal>
      );
    })}
  </div>
);

Modals.propTypes = {
  modalsConfig: PropTypes.arrayOf(PropTypes.shape(Modal.propTypes)),
};

Modals.defaultProps = {
  modalsConfig: [],
};

export default Modals;
