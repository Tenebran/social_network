import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../iconComponents/HeaderLogo';
import './Header.scss';

export default function Header() {
  return (
    <header className="social__header">
      <div className="content__conteiner">
        <Link to="/profile" className="social__header_logo">
          <HeaderLogo />
        </Link>
      </div>
    </header>
  );
}
