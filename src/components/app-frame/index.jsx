import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from '../../store'
import {
  Modals,
  combineConfigurators,
  withActionDispatching,
} from '../../react-modals';
import Header from '../header';
import { AppWrapper, BodyWrapper } from './styled';
import SidePanel from '../side-panel';
import MainPanel from '../main-panel';
import configConfirmChangesModal from '../../user-editor/changes-confirmation-modal';

const AppModals = connect(combineConfigurators(
  configConfirmChangesModal,
))(withActionDispatching(Modals));

export default function AppFrame() {
  return (
    <Provider store={createStore()}>
      <AppWrapper>
        <Header/>
        <BodyWrapper>
          <SidePanel />
          <MainPanel />
        </BodyWrapper>
        <AppModals />
      </AppWrapper>
    </Provider>
  );
  }
