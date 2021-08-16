import React from 'react';
import './Login.scss';
import { FormDataType } from './LoginForm/LoginForm';
import LoginReduxForm from './LoginReduxForm/LoginReduxForm';

export default function Login() {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">left</div>
        <div className="login__right">
          <LoginReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}
