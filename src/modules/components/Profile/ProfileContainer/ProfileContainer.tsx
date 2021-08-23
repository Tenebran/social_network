import React from 'react';
import Profile from '../Profile';
import { connect } from 'react-redux';
import { AppStateType } from '../../../../redux/store/store';
import {
  ProfileData,
  getMyProfile,
  getStatus,
  updateStatus,
} from '../../../../redux/profile-reducer';
import Loader from '../../../iconComponents/Loader/Loader';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

type OwnPropsType = {
  isFetching: boolean;
  getMyProfile: (userID: string) => void;
  getStatus: (userID: string) => void;
  updateStatus: (status: string) => void;
};

type MapStateToPropsType = {
  profileInfo: ProfileData;
  status: string;
  isFetching: boolean;
};

type PathParamsType = {
  userId: string;
};

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getMyProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return this.props.isFetching ? <Loader /> : <Profile {...this.props} />;
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profileInfo: state.profile.profileInfo,
  isFetching: state.profile.isFetching,
  status: state.profile.status,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getMyProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
