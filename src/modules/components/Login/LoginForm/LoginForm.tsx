import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import './LoginForm.scss';
import { emailCorrect, maxLength15, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormsControl';

export type FormDataType = {
  Email: string;
  Password: string;
  rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Email"
        className="login__input"
        component={Textarea}
        name={'Email'}
        type={'email'}
        validate={[required, emailCorrect]}
      />
      <Field
        placeholder="Password"
        className="login__input"
        component={Textarea}
        name={'Password'}
        type={'password'}
        validate={[required, maxLength15]}
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
