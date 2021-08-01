import { AppStateType } from '../../../../redux/store/store';
import Dialogs from '../Dialogs';
import { addMessageAC } from '../../../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { initialStateType } from '../../../../redux/dialogs-reducer';

type MapStateToPropsType = {
  dialogs: initialStateType;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  addMessage: (message: string) => void;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogs: state.dialogs,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addMessage: (message: string) => {
      dispatch(addMessageAC(message));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
