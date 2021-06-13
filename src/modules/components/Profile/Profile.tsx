import React from 'react';
import './Profile.scss';
import Myposts from './MyPosts/Myposts';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfileType } from '../../../testState/state';

type PropsType = {
  profile: ProfileType;
};

export default function Profile(props: PropsType) {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileAvatar />
      </div>

      <div className="profile__right">
        <ProfileInfo />
        <Myposts postData={props.profile.postData} />
      </div>
    </div>
  );
}
