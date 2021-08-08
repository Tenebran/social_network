import React from 'react';
import Profile from '../Profile';
import { connect } from 'react-redux';
import { AppStateType } from '../../../../redux/store/store';
import { ProfileData, getMyProfile } from '../../../../redux/profile-reducer';
import Loader from '../../../iconComponents/Loader/Loader';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

type OwnPropsType = {
  isFetching: boolean;
  getMyProfile: (userID: string) => void;
};

type MapStateToPropsType = {
  profileInfo: ProfileData;
  isFetching: boolean;
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
    return this.props.isFetching ? <Loader /> : <Profile {...this.props} />;
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profileInfo: state.profile.profileInfo,
  isFetching: state.profile.isFetching,
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default withAuthRedirect(
  connect(mapStateToProps, { getMyProfile })(withUrlDataContainerComponent)
);
