import React from 'react';
import { ProfileData } from '../../../../redux/profile-reducer';
import ProfileInfoContacts from './ProfileInfoContacts/ProfileInfoContacts';
import './ProfileInfo.scss';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileLokingForJob from './ProfileLokingForJob/ProfileLokingForJob';

type PropsType = {
  profile: ProfileData | undefined;
  noAvatar: string;
  status?: string;
  updateStatus: (status: string) => void;
};

const ProfileInfo = React.memo((props: PropsType) => {
  return (
    <div className="profile__person">
      <div className="profile__person_wrapp">
        <span className="profile__person_name">{props.profile?.fullName}</span>

        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
          aboutMe={props.profile?.aboutMe}
        />
      </div>

      <ProfileInfoContacts contacts={props.profile?.contacts} />

      <ProfileLokingForJob lookingForAJobDescription={props.profile?.lookingForAJobDescription} />

      <div className="profile__friends">
        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src={props.profile?.photos.large ? props.profile?.photos.large : props.noAvatar}
        ></img>

        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src={props.profile?.photos.large ? props.profile?.photos.large : props.noAvatar}
        ></img>
        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src={props.profile?.photos.large ? props.profile?.photos.large : props.noAvatar}
        ></img>
        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src={props.profile?.photos.large ? props.profile?.photos.large : props.noAvatar}
        ></img>

        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src={props.profile?.photos.large ? props.profile?.photos.large : props.noAvatar}
        ></img>
      </div>
    </div>
  );
});

export default ProfileInfo;
