import React from 'react';

import { ProfileData } from '../../../../redux/profile-reducer';
import ProfileInfoContacts from './ProfileInfoContacts/ProfileInfoContacts';
import './ProfileInfo.scss';

type PropsType = {
  profile: ProfileData | undefined;
  noAvatar: string;
};

export default function ProfileInfo(props: PropsType) {
  return (
    <div className="profile__person">
      <div className="profile__person_wrapp">
        <span className="profile__person_name">{props.profile?.fullName}</span>

        <div className="profile__label-status">
          <div className="profile__label-name">Status:</div>
          <span className="profile__label-more">
            {props.profile?.aboutMe ? props.profile?.aboutMe : ''}
          </span>
        </div>
      </div>
      <div className="profile__label">
        <div className="profile__label-name">Contacts:</div>

        <ProfileInfoContacts contacts={props.profile?.contacts} />
      </div>
      <div className="profile__label">
        <span className="profile__label-name">Loking For A Job:</span>
        <span className="profile__label-more">
          {props.profile?.lookingForAJob ? props.profile.lookingForAJobDescription : 'No'}
        </span>
      </div>
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
}
