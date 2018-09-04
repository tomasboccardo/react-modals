import React from 'react';
import { CustomListGroupItem, UserItemWrapper, TrashCan } from './styled';

export default function UserItem({ user, onDelete }) {
  return (
    <UserItemWrapper>
      <CustomListGroupItem key={user.username} header={user.username}>{`${user.firstname} ${user.lastname}`}</CustomListGroupItem>
      <TrashCan onClick={onDelete} />
    </UserItemWrapper>
  )
};
