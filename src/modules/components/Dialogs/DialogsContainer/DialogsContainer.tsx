import { AppStateType } from '../../../../redux/store/store';
import Dialogs from '../Dialogs';
import { addMessageAC } from '../../../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { initialStateType } from '../../../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import React from 'react';

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

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
