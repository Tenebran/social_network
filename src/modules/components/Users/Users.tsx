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
  setIsFollowingInProgress: (fetching: boolean, userId: string) => void;
};

export default function Users(props: PropsType) {
  let pagesCount = props.users.totalUsersCount / props.users.pageSize;
  let pageArray = [];

  for (let i = 1; i <= Math.ceil(pagesCount); i++) {
    pageArray.push(i);
  }

  return (
    <div className="users">
      <div className="users__selected">
        {pageArray.map(page => {
          return (
            <span
              onClick={() => props.onPageChanged(page)}
              className={
                props.currentPage === page ? 'users__selected_page' : 'users__selected_not'
              }
              key={page}
            >
              {page}
            </span>
          );
        })}
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
            setIsFollowingInProgress={props.setIsFollowingInProgress}
            followingInProgress={props.users.followingInProgress}
          />
        );
      })}
    </div>
  );
}
