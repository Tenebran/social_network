import React from 'react';
import './Profile.scss';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './MyPosts/MypostsContainer';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileAvatar />
      </div>

      <div className="profile__right">
        <ProfileInfo />
        <MypostsContainer />
      </div>
    </div>
  );
}
