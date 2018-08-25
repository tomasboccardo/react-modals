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
      <AppTitle>Welcome to React</AppTitle>
    </HeaderWrapper>
  )
}
