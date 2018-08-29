import React from 'react';
import {Modal} from 'react-bootstrap';
import Modals from './presentational';

describe('Modals', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      modalsConfig: [
        {
          show: true, key: '1', title: 'foo', body: 'bar', buttons: [{label: 'Save', action: jest.fn()}], onButtonClick: jest.fn(),
        },
        {
          show: false, key: '2', title: '', body: '', buttons: [], onButtonClick: jest.fn(),
        },
        {
          show: true, key: '3', content: (<div>Test</div>),  onButtonClick: jest.fn(),
        },
      ],
    };
    component = shallow(<Modals {...props} />);
  });

  it('should render modals', () => {
    expect(component.find(Modal).exists()).toBe(true);
  });

  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
