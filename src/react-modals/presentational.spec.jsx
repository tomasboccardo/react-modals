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
          key: 'FOO', title: 'foo', buttons: [], content: 'content',
        },
        {
          key: 'BAR', title: 'bar', buttons: [],
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
