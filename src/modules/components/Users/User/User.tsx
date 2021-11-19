import React from 'react';
import './User.scss';
import userAvatar from '../../../assest/image/no-avatar.png';
import { NavLink } from 'react-router-dom';

type PropsType = {
  userName: string;
  userImage: { small: string | null; large: string | null };
  follow: (userId: string) => void;
  unFollow: (userID: string) => void;
  userFollowed: boolean;
  userId: string;
  followingInProgress: Array<string>;
};

const User = React.memo((props: PropsType) => {
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
          <NavLink to={`./profile/${props.userId}`} className="user__name">
            {props.userName}
          </NavLink>

          {props.userFollowed ? (
            <button
              disabled={props.followingInProgress.some(id => id === props.userId)}
              className={
                props.followingInProgress.some(id => id === props.userId)
                  ? 'user__follow__disabled'
                  : 'user__follow user__unfollow '
              }
              onClick={() => {
                props.unFollow(props.userId);
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
                props.follow(props.userId);
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default User;
