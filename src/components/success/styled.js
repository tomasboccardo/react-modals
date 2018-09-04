import styled from 'styled-components';
import { Glyphicon } from 'react-bootstrap';

export const SuccessIcon = styled(Glyphicon).attrs({
  glyph: 'ok',
})`
  color: green;
`;

export const SuccessIconBorder = styled.div`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  line-height: 52px;
  font-size: 2.5rem;
  box-shadow: 0 0 0px 3px green;
`;

export const SuccessIconWrapper = styled.div`
  height: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
