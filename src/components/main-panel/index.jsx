import React from 'react';
import { MainPanelWrapper } from './styled';
import { UserForm } from '../../user-editor';

export default function MainPanel() {
  return (
    <MainPanelWrapper>
      <UserForm />
    </MainPanelWrapper>
  )
}
