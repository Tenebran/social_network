import { reduxForm } from 'redux-form';
import LoginForm, { FormDataType } from '../LoginForm/LoginForm';

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm);

export default LoginReduxForm;
