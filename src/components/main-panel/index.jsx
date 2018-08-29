import React from 'react';
import { connect } from 'react-redux';
import { MainPanelWrapper } from './styled';
import { actions, UserForm } from '../../user-editor';

function MainPanel({ confirmChanges }) {
  return (
    <MainPanelWrapper>
      <UserForm/>
    </MainPanelWrapper>
  )
}

export default connect(null, { confirmChanges: actions.confirmChanges })(MainPanel);
