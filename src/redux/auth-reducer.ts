import { ActionTypes } from './store/store';
import { Dispatch } from 'redux';
import { API } from '../modules/api/api';
const SET_USER_DATA = 'SET_USER_DATA';

export type authType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

let initialState: authType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export type initialStateType = typeof initialState;

export const authReducer = (
  state: initialStateType = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data, isAuth: true };
    }
    default:
      return state;
  }
};

export const setUserData = (userId: number, email: string, login: string) => {
  return { type: SET_USER_DATA, data: { userId, email, login } } as const;
};

export const getUserData = () => {
  return (dispatch: Dispatch) => {
    API.getMyLogin().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserData(id, email, login));
      }
    });
  };
};
