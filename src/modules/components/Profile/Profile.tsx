import React from 'react';
import './Profile.scss';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './MyPosts/MypostsContainer';
import { ProfileData } from '../../../redux/profile-reducer';
import noAvatar from '../../assest/image/no-avatar.png';

type PropsType = {
  profileInfo?: ProfileData;
  getMyProfile: (userID: string) => void;
  updateStatus: (status: string) => void;
  status?: string;
};

export default function Profile(props: PropsType) {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileAvatar image={props.profileInfo?.photos} noAvatar={noAvatar} />
      </div>
      <div className="profile__right">
        <ProfileInfo
          profile={props.profileInfo}
          noAvatar={noAvatar}
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <MypostsContainer />
      </div>
    </div>
  );
}
