import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { CustomListGroupItem } from './styled';

function UserList({
  users,
}) {
  return (
    <ListGroup>
      {users.map(user => (
        <CustomListGroupItem key={user.username} header={user.username}>{`${user.firstname} ${user.lastname}`}</CustomListGroupItem>
      ))}
    </ListGroup>
  )
}

const mapStateToProps = ({ userList: { users} }) => ({
  users,
})

export default connect(mapStateToProps, null)(UserList);
