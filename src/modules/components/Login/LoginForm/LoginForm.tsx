import React from 'react';
import './LoginForm.scss';

export default function LoginForm() {
  return (
    <form>
      <input placeholder="Email" className="login__input" />
      <input placeholder="Password" className="login__input" />
      <div className="login__button_wrapper">
        <button className="login__button">Sing in</button>
        <div className="login__button__chekbox">
          <input type="checkbox" className="login__checkbox" /> remember me
        </div>
      </div>
    </form>
  );
}
