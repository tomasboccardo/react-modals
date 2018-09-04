import React from 'react';
import { PulseLoader } from 'react-spinners';
import { SpinnerWrapper } from './styled';

export default function Loading() {
  return (
    <SpinnerWrapper>
        <PulseLoader color="#4A90E2"/>
    </SpinnerWrapper>
  )
}
