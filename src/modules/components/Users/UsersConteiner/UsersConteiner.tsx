import React from 'react';
import {
  initialStateType,
  followAC,
  unFollowAC,
  setUsersAC,
  UsersDataType,
  setCurrentPageAC,
  setTotalUsersCountAC,
  UsersType,
  setIsFetchingAC,
} from '../../../../redux/users-reducer';
import { AppStateType } from '../../../../redux/store/store';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Loader from '../../../iconComponents/Loader/Loader';
import Users from '../Users';
import axios from 'axios';

type PropsType = {
  users: UsersType;
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  follow: (userId: string) => void;
  unFollow: (userID: string) => void;
  setUsers: (users: Array<UsersDataType>) => void;
  setCurrentPage: (page: number) => void;
  setTotalUsersCount: (pageCount: number) => void;
  isFetching: boolean;
  setIsFetching: (fetching: boolean) => void;
};

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.setIsFetching(false);
      });
  }
  onPageChanged = (page: number) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setIsFetching(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.currentPage}
            pageSize={this.props.currentPage}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            onPageChanged={this.onPageChanged}
          />
        )}
      </>
    );
  }
}

type MapStateToPropsType = {
  users: initialStateType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};

type MapDipatchToPropsType = {
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
  setUsers: (users: Array<UsersDataType>) => void;
  setCurrentPage: (page: number) => void;
  setTotalUsersCount: (currentPage: number) => void;
  setIsFetching: (fetching: boolean) => void;
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
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
    setIsFetching: (isFetching: boolean) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
