import React from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
  isAuth?: boolean;
  image: string;
  login?: string | null;
  logout: () => void;
};

const ProfileLinkContextMenu = (props: PropsType) => {
  return (
    <div>
      {props.isAuth ? (
        <div className="profile-link__context-menu">
          <Link
            to={props.isAuth ? '/profile' : '/login'}
            className="profile-link__context-menu__conteiner"
          >
            {props.isAuth ? (
              <img
                src={props.image}
                alt="avatar"
                className={'profile-link__context-menu__avatar'}
              />
            ) : (
              ''
            )}
            <div className="profile-link__context-menu__login">
              {props.isAuth ? props.login : 'Login'}
            </div>
          </Link>
          <div className="profile-link__context-menu__logout" onClick={props.logout}>
            Sing Out
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProfileLinkContextMenu;
