import React, { Component } from 'react';
import Profile from '../Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType, StoreType } from '../../../../redux/store/store';
import {
  initialStateType,
  PostDataType,
  ProfileData,
  setUsersProfile,
} from '../../../../redux/profile-reducer';

type PropsType = {
  setUsersProfile: (profileInfo: ProfileData) => void;
};

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.setUsersProfile(response.data);
    });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

// type MapStateToPropsType = {
//   profileInfo: initialStateType;
// };

let mapStateToProps = (state: AppStateType) => ({
  profileInfo: state.profile.profileInfo,
});

// export default ProfileContainer;
export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);
