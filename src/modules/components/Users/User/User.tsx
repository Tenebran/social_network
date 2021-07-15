import userEvent from '@testing-library/user-event';
import React from 'react';
import { v1 } from 'uuid';
import { UsersDataType } from '../../../../redux/users-reducer';
import './User.scss';

type PropsType = {
  userName: string;
  userCity: string;
  userContry: string;
  userImage: string;
  follow: (userId: string) => void;
  unFollow: (userID: string) => void;
  userFollowed: boolean;
  userId: string;
  setUsers: (users: Array<UsersDataType>) => void;
};

export default function User(props: PropsType) {
  return (
    <div className="user">
      <div className="user__wrapper">
        <div>
          <img className="user__image" src={props.userImage} alt="avatar" />
        </div>

        <div>
          <div className="user__name">{props.userName}</div>

          {props.userFollowed ? (
            <div className="user__follow" onClick={() => props.unFollow(props.userId)}>
              unfollow <span className="user__follow__icon-unfollow"></span>
            </div>
          ) : (
            <div className="user__follow" onClick={() => props.follow(props.userId)}>
              follow <span className="user__follow__icon-follow"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
