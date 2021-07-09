import { addPostAC } from '../../../../redux/profile-reducer';
import Myposts from './MyPost/Myposts';
import { AppStateType } from '../../../../redux/store/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { initialStateType } from '../../../../redux/profile-reducer';

type MapStateToPropsType = {
  profile: initialStateType;
};

type MapDispatchToPropsType = {
  addPost: (messages: string) => void;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profile,
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
