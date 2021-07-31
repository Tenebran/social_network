import React from 'react';
import {
  initialStateType,
  follow,
  unFollow,
  setUsers,
  UsersDataType,
  setCurrentPage,
  setTotalUsersCount,
  UsersType,
  setIsFetching,
  setIsFollowingInProgress,
} from '../../../../redux/users-reducer';
import { AppStateType } from '../../../../redux/store/store';
import { connect } from 'react-redux';
import Loader from '../../../iconComponents/Loader/Loader';
import Users from '../Users';
import { API } from '../../../api/api';

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
  setIsFollowingInProgress: (fetching: boolean, userId: string) => void;
};

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.setIsFetching(true);
    API.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.setIsFetching(false);
    });
  }
  onPageChanged = (page: number) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    API.getUsers(page, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
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
            setIsFollowingInProgress={this.props.setIsFollowingInProgress}
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
  setIsFollowingInProgress: Array<string>;
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    setIsFollowingInProgress: state.users.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setIsFollowingInProgress,
})(UsersContainer);
