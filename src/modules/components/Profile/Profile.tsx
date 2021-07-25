import React from 'react';
import './Profile.scss';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './MyPosts/MypostsContainer';
import { PostDataType, ProfileData, ProfileType } from '../../../redux/profile-reducer';

type setUsersProfile = (profile: ProfileData) => void;

type PropsType = {
  profileInfo?: ProfileData;
  setUsersProfile: (profileInfo: ProfileData) => void;
};

export default function Profile(props: PropsType) {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileAvatar image={props.profileInfo?.photos} />
      </div>
      <div className="profile__right">
        <ProfileInfo profile={props.profileInfo} />
        <MypostsContainer />
      </div>
    </div>
  );
}
