import styled from 'styled-components';
import logoSrc from './logo.svg'

export const HeaderWrapper = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const AppTitle = styled.h1`
  font-size: 1.5em;
`

export const Logo = styled.img.attrs({
  alt: 'logo',
  src: logoSrc
})`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`
