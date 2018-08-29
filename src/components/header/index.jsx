import React from 'react'
import {
  HeaderWrapper,
  AppTitle,
  Logo,
} from './styled';


export default function Header() {
  return (
    <HeaderWrapper>
      <Logo/>
      <AppTitle>React Modals</AppTitle>
    </HeaderWrapper>
  )
}
