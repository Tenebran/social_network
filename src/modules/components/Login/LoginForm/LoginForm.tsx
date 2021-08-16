import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import './LoginForm.scss';

export type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="Email" className="login__input" component={'input'} name={'login'} />
      <Field
        placeholder="Password"
        className="login__input"
        component={'input'}
        name={'password'}
      />
      <div className="login__button_wrapper">
        <button className="login__button">Sing in</button>
        <div className="login__button__chekbox">
          <Field
            type="checkbox"
            className="login__checkbox"
            component={'input'}
            name={'rememberMe'}
          />
          remember me
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
