import React from 'react';
import Profile from '../Profile';
import { connect } from 'react-redux';
import { AppStateType } from '../../../../redux/store/store';
import { ProfileData, getMyProfile } from '../../../../redux/profile-reducer';
import Loader from '../../../iconComponents/Loader/Loader';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';

type OwnPropsType = {
  isFetching: boolean;
  getMyProfile: (userID: string) => void;
  isAuth: boolean;
};

type MapStateToPropsType = {
  profileInfo: ProfileData;
  isFetching: boolean;
  isAuth: boolean;
};

type PathParamsType = {
  userId: string;
};

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getMyProfile(this.props.match.params.userId);
  }
  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}></Redirect>;
    return this.props.isFetching ? <Loader /> : <Profile {...this.props} />;
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profileInfo: state.profile.profileInfo,
  isFetching: state.profile.isFetching,
  isAuth: state.auth.isAuth,
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getMyProfile })(withUrlDataContainerComponent);
