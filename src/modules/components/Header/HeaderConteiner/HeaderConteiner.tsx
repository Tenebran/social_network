import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { getUserData } from '../../../../redux/auth-reducer';
import { AppStateType } from '../../../../redux/store/store';

type PropsType = {
  getUserData: () => void;
};

class HeaderConteiner extends Component<PropsType> {
  componentDidMount() {
    this.props.getUserData();
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

export default connect(mapStateToProps, { getUserData })(HeaderConteiner);
