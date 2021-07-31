import React from 'react';
import Profile from '../Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../../../redux/store/store';
import { ProfileData, setUsersProfile, setIsFetching } from '../../../../redux/profile-reducer';
import Loader from '../../../iconComponents/Loader/Loader';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { API } from '../../../api/api';

type OwnPropsType = {
  setUsersProfile: (profileInfo: ProfileData) => void;
  setIsFetching: (fetching: boolean) => void;
  isFetching: boolean;
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
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '18258';
    }
    this.props.setIsFetching(true);
    API.getMyProfile(userId).then(data => {
      this.props.setUsersProfile(data);
      this.props.setIsFetching(false);
    });
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

export default connect(mapStateToProps, { setUsersProfile, setIsFetching })(
  withUrlDataContainerComponent
);
