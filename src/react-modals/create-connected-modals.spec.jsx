import React from 'react';
import createConnectedModals, { withActionDispatching } from './create-connected-modals';

describe('createConnectedModals', () => {
  let connectorMock;

  beforeEach(() => {
    connectorMock = jest.fn();
  });

  it('should call the connector', () => {
    createConnectedModals(connectorMock);
    expect(connectorMock).toHaveBeenCalled();
  });
});

describe('withActionDispatching', () => {
  let props;
  let ModalsMock;
  let withActionDispatchingModals;

  beforeEach(() => {
    props = {
      modalsConfig: [{
        title: 'title',
        buttons: [],
        onButtonClick: jest.fn(),
      }],
      dispatch: jest.fn(),
    };
    ModalsMock = () => 'Modals';
    const WithActionDispatchingModals = withActionDispatching(ModalsMock);
    withActionDispatchingModals = shallow(<WithActionDispatchingModals {...props} />);
  });

  it('should match the snapshot', () => {
    expect(withActionDispatchingModals).toMatchSnapshot();
  });

  it('should dispatch actions', () => {
    withActionDispatchingModals.props().modalsConfig[0].onButtonClick({
      action: {
        type: 'action',
      },
    });

    expect(props.dispatch).toHaveBeenCalled();
  });

  it('should support buttons with no actions', () => {
    withActionDispatchingModals.props().modalsConfig[0].onButtonClick({});

    expect(props.modalsConfig[0].onButtonClick).toHaveBeenCalled();
  });
});
