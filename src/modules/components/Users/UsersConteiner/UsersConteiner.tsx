import React from 'react';
import {
  initialStateType,
  UsersType,
  getUsers,
  follow,
  unFollow,
} from '../../../../redux/users-reducer';
import { AppStateType } from '../../../../redux/store/store';
import { connect } from 'react-redux';
import Loader from '../../../iconComponents/Loader/Loader';
import Users from '../Users';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
  getCurrentPageSelector,
  getFollowingInProgressSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector,
} from '../../../../redux/users-selectors';

type PropsType = {
  users: UsersType;
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  isFetching: boolean;
  getUsers: (currentPage: number, pageSize: number) => void;
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
};

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (page: number) => {
    this.props.getUsers(page, this.props.pageSize);
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
  setIsFollowingInProgress: Array<string>;
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    setIsFollowingInProgress: getFollowingInProgressSelector(state),
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUsers,
    follow,
    unFollow,
  }),
  withAuthRedirect
)(UsersContainer);
