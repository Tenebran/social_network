import { ActionTypes } from './store/store';
import { Dispatch } from 'redux';
import { API, authAPI } from '../modules/api/api';
import { ThunkDispatch } from 'redux-thunk';
const SET_USER_DATA = 'SET_USER_DATA';

export type authType = {
  userId: null | number;
  email: null | string;
  login: null | string;
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
      return { ...state, ...action.data };
    }
    default:
      return state;
  }
};

export const setUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return { type: SET_USER_DATA, data: { userId, email, login, isAuth } } as const;
};

export const getUserData = () => {
  return (dispatch: Dispatch) => {
    API.getMyLogin().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email: string, password: string, rememberMe: boolean) => async (
  dispatch: ThunkDispatch<initialStateType, {}, any>
) => {
  let response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getUserData());
  }
};

export const logout = () => async (dispatch: ThunkDispatch<initialStateType, {}, any>) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};
