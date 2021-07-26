import { addPostAC } from '../../../../redux/profile-reducer';
import Myposts from './MyPost/Myposts';
import { AppStateType } from '../../../../redux/store/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { initialStateType } from '../../../../redux/profile-reducer';
import noAvatar from '../../../assest/image/no-avatar.png';

type MapStateToPropsType = {
  profile: initialStateType;
  noAvatar: string;
};

type MapDispatchToPropsType = {
  addPost: (messages: string) => void;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profile,
    noAvatar: noAvatar,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (messages: string) => {
      dispatch(addPostAC(messages));
    },
  };
};

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;
