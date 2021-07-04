import React from 'react';
import './Profile.scss';
import Myposts from './MyPosts/Myposts';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfileType, ActionTypes } from '../../../store/store';

type PropsType = {
  profile: ProfileType;
  dispatch: (action: ActionTypes) => void;
};

export default function Profile(props: PropsType) {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileAvatar />
      </div>

      <div className="profile__right">
        <ProfileInfo />
        <Myposts postData={props.profile.postData} dispatch={props.dispatch} />
      </div>
    </div>
  );
}
