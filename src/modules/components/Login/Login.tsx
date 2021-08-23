import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../redux/auth-reducer';
import { AppStateType } from '../../../redux/store/store';
import './Login.scss';
import { FormDataType } from './LoginForm/LoginForm';
import LoginReduxForm from './LoginReduxForm/LoginReduxForm';

type MapStateToPropsType = {
  isAuth: boolean;
};

const Login = (props: any) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.Email, formData.Password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

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
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
