import React from 'react'
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { editUsernameToDelete } from '../../actions';

export function DeletionVerificationForm({ usernameToDelete, error, onUsernameToDeleteUpdate }) {
  return (
    <form>
      <FormGroup controlId="username" validationState={!!error ? 'error' : null}>
        <ControlLabel>Please type the username to confirm. This action cannot be undone</ControlLabel>
        <FormControl
          type="text"
          value={usernameToDelete}
          placeholder="Username"
          onChange={e => onUsernameToDeleteUpdate(e.target.value)}
        />
        {!!error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    </form>
  )
}

const mapStateToProps = ({ userDeletion: { usernameToDelete, error } }) => ({
  usernameToDelete,
  error,
})

const actions = {
  onUsernameToDeleteUpdate: editUsernameToDelete,
}

export default connect(mapStateToProps, actions)(DeletionVerificationForm);
