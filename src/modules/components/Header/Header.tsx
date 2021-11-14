import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import HeaderLogo from '../../iconComponents/HeaderLogo';
import ProfileLink from './ProfileLink/ProfileLink';
import './Header.scss';

type PropsType = {
  isAuth?: boolean;
  login?: string | null;
  logout: () => void;
};

export default function Header(props: PropsType) {
  return (
    <header className="social__header">
      <div className="content__conteiner">
        <div className="social__header__conteiner">
          <Link to="/profile" className="social__header_logo">
            <HeaderLogo />
          </Link>
          <ProfileLink isAuth={props.isAuth} login={props.login} logout={props.logout} />
        </div>
      </div>
    </header>
  );
}
