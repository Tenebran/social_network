import React from 'react';
import './User.scss';
import userAvatar from '../../../assest/image/no-avatar.png';
import { NavLink } from 'react-router-dom';
import { API } from '../../../api/api';

type PropsType = {
  userName: string;
  userImage: { small: string | null; large: string | null };
  follow: (userId: string) => void;
  unFollow: (userID: string) => void;
  userFollowed: boolean;
  userId: string;
  setIsFollowingInProgress: (fetching: boolean, userId: string) => void;
  followingInProgress: Array<any>;
};

export default function User(props: PropsType) {
  return (
    <div className="user">
      <div className="user__wrapper">
        <div>
          <NavLink to={`./profile/${props.userId}`}>
            <img
              className="user__image"
              src={props.userImage.large ? props.userImage.large : userAvatar}
              alt="avatar"
            />
          </NavLink>
        </div>

        <div>
          <div className="user__name">{props.userName}</div>

          {props.userFollowed ? (
            <button
              disabled={props.followingInProgress.some(id => id === props.userId)}
              className={
                props.followingInProgress.some(id => id === props.userId)
                  ? 'user__follow__disabled'
                  : 'user__follow user__unfollow '
              }
              onClick={() => {
                props.setIsFollowingInProgress(true, props.userId);
                API.unFollowUser(props.userId).then(data => {
                  if (data.resultCode === 0) {
                    props.unFollow(props.userId);
                  }
                  props.setIsFollowingInProgress(false, props.userId);
                });
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some(id => id === props.userId)}
              className={
                props.followingInProgress.some(id => id === props.userId)
                  ? 'user__follow__disabled'
                  : 'user__follow '
              }
              onClick={() => {
                props.setIsFollowingInProgress(true, props.userId);
                API.followUser(props.userId).then(data => {
                  if (data.resultCode === 0) {
                    props.follow(props.userId);
                  }
                  props.setIsFollowingInProgress(false, props.userId);
                });
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
