import React from 'react';
import {
  initialStateType,
  followAC,
  unFollowAC,
  setUsersAC,
  UsersDataType,
} from '../../../../redux/users-reducer';
import { AppStateType } from '../../../../redux/store/store';
import Users from '../Users';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

type MapStateToPropsType = {
  users: initialStateType;
};

type MapDipatchToPropsType = {
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
  setUsers: (users: Array<UsersDataType>) => void;
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.users,
  };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDipatchToPropsType => {
  return {
    follow: (userId: string) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId: string) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users: Array<UsersDataType>) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
