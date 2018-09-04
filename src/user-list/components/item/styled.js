import styled from 'styled-components';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';

export const CustomListGroupItem = styled(ListGroupItem)`
  background-color: gray;
  border: 0;
  text-align: left;
  color: white;
`

export const UserItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TrashCan = styled(Glyphicon).attrs({
  glyph: 'trash',
})`
  color: firebrick;
  font-size: 2rem;
  padding: 20px;
  cursor: pointer;
`;
