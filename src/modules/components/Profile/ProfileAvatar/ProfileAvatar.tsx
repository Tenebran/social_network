import React from 'react';
import './ProfileAvatar.scss';
import noAvatar from '../../../assest/image/no-avatar.png';

type ImageType = {
  large: string | null;
  small: string | null;
};

type PropsType = {
  image?: ImageType;
};

export default function ProfileAvatar(props: PropsType) {
  return (
    <div className="profile__photo">
      <img
        alt="profile"
        className="profile__img"
        src={props.image?.large ? props.image.large : noAvatar}
      ></img>
    </div>
  );
}
