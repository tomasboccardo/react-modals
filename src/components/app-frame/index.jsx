import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../../store'
import Header from '../header';
import { AppWrapper, BodyWrapper } from './styled';
import SidePanel from '../side-panel';
import MainPanel from '../main-panel';
import AppModals from '../app-modals';

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
