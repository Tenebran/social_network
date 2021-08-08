import React from 'react';
import './ProfileStatus.scss';

type PropsType = {
  aboutMe?: string | null;
};

const ProfileStatus = (props: PropsType) => {
  return (
    <div className="profile__label-status">
      <div className="profile__label-name">Status:</div>
      <span className="profile__label-more">{props.aboutMe ? props.aboutMe : 'Hello'}</span>
    </div>
  );
};

export default ProfileStatus;
