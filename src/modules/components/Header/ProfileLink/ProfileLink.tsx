import React, { useState } from 'react';
import './ProfileLink.scss';
import { Link } from 'react-router-dom';
import image from '../../../assest/image/no-avatar.png';
import ProfileLinkContextMenu from '../ProfileLinkContextMenu/ProfileLinkContextMenu';

type PropsType = {
  isAuth?: boolean;
  login?: string | null;
  logout: () => void;
};

export default function ProfileLink(props: PropsType) {
  let [contextMenu, setContextMenu] = useState(false);

  const onClickHandler = () => {
    setContextMenu(true);
  };

  const OnBlurHandler = () => {
    setTimeout(() => {
      setContextMenu(false);
    }, 200);
  };

  return (
    <div tabIndex={0} className="profile-link" onClick={onClickHandler} onBlur={OnBlurHandler}>
      <div className="profile-link__conteiner">
        <div className="profile-link__login">{props.isAuth ? props.login : 'Login'}</div>
        {props.isAuth ? <img src={image} alt="avatar" className={'profile-link__avatar'} /> : ''}
      </div>

      {contextMenu ? (
        <ProfileLinkContextMenu
          isAuth={props.isAuth}
          image={image}
          login={props.login}
          logout={props.logout}
        />
      ) : (
        ''
      )}
    </div>
  );
}
