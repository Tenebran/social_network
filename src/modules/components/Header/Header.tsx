import React from 'react';
import { Link } from 'react-router-dom';
import ProfileLink from './ProfileLink/ProfileLink';
import './Header.scss';
import { headerLogo } from '../../assest/icons';

type PropsType = {
  isAuth?: boolean;
  login?: string | null;
  logout: () => void;
};

const Header = React.memo((props: PropsType) => {
  return (
    <header className="social__header">
      <div className="content__conteiner">
        <div className="social__header__conteiner">
          <Link to="/profile" className="social__header_logo">
            {headerLogo}
          </Link>
          <ProfileLink isAuth={props.isAuth} login={props.login} logout={props.logout} />
        </div>
      </div>
    </header>
  );
});

export default Header;
