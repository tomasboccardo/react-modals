import React from 'react';
import { SuccessIconWrapper, SuccessIconBorder, SuccessIcon } from './styled';

export default function Success() {
  return (
    <SuccessIconWrapper>
      <SuccessIconBorder>
        <SuccessIcon/>
      </SuccessIconBorder>
    </SuccessIconWrapper>
  )
}
