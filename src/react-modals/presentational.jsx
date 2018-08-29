import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ModalConfigPropTypes } from './prop-types';

const Modals = ({ modalsConfig }) => (
  <div>
    {modalsConfig.map((config) => {
      const {
        key,
        show,
        content,
        title,
        body,
        buttons,
        onButtonClick,
        ...props
      } = config;

      return (
        <Modal show={show} {...props} key={key}>
          {content || (
            <React.Fragment>
              <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>{body}</Modal.Body>

              <Modal.Footer>
                {buttons.map(button => (
                  <Button key={button.label} onClick={() => onButtonClick(button)}>{button.label}</Button>
                ))}
              </Modal.Footer>
            </React.Fragment>
          )}
        </Modal>
      );
    })}
  </div>
);

Modals.propTypes = {
  modalsConfig: ModalConfigPropTypes,
};

Modals.defaultProps = {
  modalsConfig: [],
};

export default Modals;
