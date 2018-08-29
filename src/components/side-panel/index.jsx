import React from 'react';
import { SidePanelWrapper } from './styled';
import { UserList } from '../../user-list';

export default function SidePanel() {
  return (
    <SidePanelWrapper>
      <UserList />
    </SidePanelWrapper>
  )
}
