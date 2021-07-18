import React from 'react';
import {
  initialStateType,
  followAC,
  unFollowAC,
  setUsersAC,
  UsersDataType,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../../../redux/users-reducer';
import { AppStateType } from '../../../../redux/store/store';
import Users from '../Users';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

type MapStateToPropsType = {
  users: initialStateType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};

type MapDipatchToPropsType = {
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
  setUsers: (users: Array<UsersDataType>) => void;
  setCurrentPage: (page: number) => void;
  setTotalUsersCount: (currentPage: number) => void;
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
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

    setCurrentPage: (page: number) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCount: (currentPage: number) => {
      dispatch(setTotalUsersCountAC(currentPage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
