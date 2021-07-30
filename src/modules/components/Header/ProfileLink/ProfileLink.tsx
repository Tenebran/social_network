import React from 'react';
import './ProfileLink.scss';
import { Link } from 'react-router-dom';
import image from '../../../assest/image/no-avatar.png';

type PropsType = {
  isAuth?: boolean;
  login?: string | null;
};

export default function ProfileLink(props: PropsType) {
  return (
    <div className="profile-link">
      <Link to={'/login'} className="profile-link__conteiner">
        <div className="profile-link__login">{props.isAuth ? props.login : 'Login'}</div>

        <img src={image} alt="avatar" className={'profile-link__avatar'} />
      </Link>
    </div>
  );
}
