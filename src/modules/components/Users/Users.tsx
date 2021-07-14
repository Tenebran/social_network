import React from 'react';
import { UsersType, UsersDataType } from '../../../redux/users-reducer';
import './Users.scss';

type PropsType = {
  users: UsersType;
  follow: (userId: string) => void;
  unFollow: (userID: string) => void;
  setUsers: (users: Array<UsersDataType>) => void;
};

export default function Users(props: PropsType) {
  return <div className="users">Users</div>;
}
