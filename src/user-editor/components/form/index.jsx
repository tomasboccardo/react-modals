import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { updateUserValue, confirmSave } from '../../actions';

function UserForm({
  username,
  onUsernameUpdate,
  firstname,
  onFirstnameUpdate,
  lastname,
  onLastnameUpdate,
  onSave,
}) {
  return (
    <form>
      <FormGroup controlId="username">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            value={username}
            placeholder="Username"
            onChange={e => onUsernameUpdate(e.target.value)}
          />
        </FormGroup>
      <FormGroup controlId="firstname">
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            value={firstname}
            placeholder="First Name"
            onChange={e => onFirstnameUpdate(e.target.value)}
          />
        </FormGroup>
      <FormGroup controlId="lastname">
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            value={lastname}
            placeholder="Last Name"
            onChange={e => onLastnameUpdate(e.target.value)}
          />
      </FormGroup>
      <Button onClick={onSave}>Save</Button>
    </form>
  )
}

const mapStateToProps = ({ userEditor: { username, firstname, lastname} }) => ({
  username,
  firstname,
  lastname,
})

const actions = {
  onUsernameUpdate: value => updateUserValue('username', value),
  onFirstnameUpdate: value => updateUserValue('firstname', value),
  onLastnameUpdate: value => updateUserValue('lastname', value),
  onSave: confirmSave,
}

export default connect(mapStateToProps, actions)(UserForm);
