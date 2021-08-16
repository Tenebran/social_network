import React from 'react';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';

export default function Login() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">left</div>
        <div className="login__right">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
