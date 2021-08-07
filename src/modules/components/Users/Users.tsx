import { makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react';
import { UsersType } from '../../../redux/users-reducer';
import User from './User/User';
import './Users.scss';

type PropsType = {
  users: UsersType;
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  follow: (userId: string) => void;
  unFollow: (userID: string) => void;
  onPageChanged: (page: number) => void;
};

const Users = React.memo((props: PropsType) => {
  let pagesCount = props.users.totalUsersCount / props.users.pageSize;
  let pageArray = [];

  for (let i = 1; i <= Math.ceil(pagesCount); i++) {
    pageArray.push(i);
  }

  const handleChange = (event: object, value: number) => {
    props.onPageChanged(value);
  };

  console.log(props.currentPage);

  return (
    <div className="users">
      <div className={`users__selected `}>
        <Pagination
          className={`users__number`}
          count={pageArray.length}
          onChange={handleChange}
          page={props.currentPage}
          defaultPage={5}
          boundaryCount={5}
        />
      </div>

      {props.users.usersData.map(user => {
        return (
          <User
            key={user.id}
            userId={user.id}
            userName={user.name}
            userImage={user.photos}
            userFollowed={user.followed}
            follow={props.follow}
            unFollow={props.unFollow}
            followingInProgress={props.users.followingInProgress}
          />
        );
      })}
      <div className={`users__selected `}>
        <Pagination
          className={`users__number`}
          count={pageArray.length}
          onChange={handleChange}
          page={props.currentPage}
          defaultPage={5}
          boundaryCount={5}
        />
      </div>
    </div>
  );
});

export default Users;
