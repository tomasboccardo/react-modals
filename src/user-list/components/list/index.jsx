import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import UserItem from '../item';
import { validateDeletion } from '../../user-deletion/actions';


function UserList({
  users,
  onDelete,
}) {
  return (
    <ListGroup>
      {users.map(user => (
        <UserItem
          key={user.username}
          user={user}
          onDelete={() => onDelete(user)}
        />
      ))}
    </ListGroup>
  )
}

const mapStateToProps = ({ userList: { users} }) => ({
  users,
})

const actions = {
  onDelete: validateDeletion,
}

export default connect(mapStateToProps, actions)(UserList);
