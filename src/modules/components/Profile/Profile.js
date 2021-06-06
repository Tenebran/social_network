import React from 'react';
import './Profile.scss';
import Myposts from './MyPosts/Myposts';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile({ profile }) {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileAvatar />
      </div>

      <div className="profile__right">
        <ProfileInfo />
        <Myposts postData={profile.postData} />
      </div>
    </div>
  );
}
