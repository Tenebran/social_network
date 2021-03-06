import React from 'react';
import './ProfileAvatar.scss';

type ImageType = {
  large: string | null;
  small: string | null;
};

type PropsType = {
  image?: ImageType;
  noAvatar: string;
};

const ProfileAvatar = React.memo((props: PropsType) => {
  return (
    <div className="profile__photo">
      <img
        alt="profile"
        className="profile__img"
        src={props.image?.large ? props.image.large : props.noAvatar}
      ></img>
    </div>
  );
});

export default ProfileAvatar;
