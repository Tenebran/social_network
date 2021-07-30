import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from 'redux-ts';
import Header from '../Header';
import { setUserData } from '../../../../redux/auth-reducer';
import { AppStateType } from '../../../../redux/store/store';

type PropsType = {
  setUserData: (id: number, email: string, login: string) => void;
};

class HeaderConteiner extends Component<PropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setUserData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props}></Header>;
  }
}

type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setUserData })(HeaderConteiner);
