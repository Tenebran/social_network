import React from 'react';

type PropsType = {
  lookingForAJobDescription?: string | null;
};

const ProfileLokingForJob = (props: PropsType) => {
  return (
    <div className="profile__label">
      <span className="profile__label-name">Loking For A Job:</span>
      <span className="profile__label-more">
        {props.lookingForAJobDescription ? props.lookingForAJobDescription : 'No'}
      </span>
    </div>
  );
};

export default ProfileLokingForJob;
