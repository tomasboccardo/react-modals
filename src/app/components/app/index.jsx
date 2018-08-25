import React from 'react';
import Header from '../header';
import { AppWrapper, BodyWrapper } from './styled';
import SidePanel from '../side-panel';
import MainPanel from '../main-panel';

export default function App() {
  return (
    <AppWrapper>
      <Header/>
      <BodyWrapper>
        <SidePanel />
        <MainPanel />
      </BodyWrapper>
    </AppWrapper>
  );
  }
