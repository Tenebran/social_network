import { ActionTypes } from './store/store';
import { Dispatch } from 'redux';
import { getUserData } from './auth-reducer';
// import { API, authAPI } from '../modules/api/api';
// import { ThunkDispatch } from 'redux-thunk';

export type authType = {
  initialized: boolean;
};

let initialState: authType = {
  initialized: false,
};

export type initialStateType = typeof initialState;

export const appReducer = (
  state: initialStateType = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case 'APP/SET_INITIALIZED': {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

export const setInitializedSucess = () => {
  return { type: 'APP/SET_INITIALIZED' } as const;
};

export const initializeApp = () => {
  return (dispatch: Dispatch<any>) => {
    let dispatchResult = dispatch(getUserData());
    Promise.all([dispatchResult]).then(() => {
      dispatch(setInitializedSucess());
    });
  };
};

// export const login = (email: string, password: string, rememberMe: boolean) => async (
//   dispatch: ThunkDispatch<initialStateType, {}, any>
// ) => {
//   let response = await authAPI.login(email, password, rememberMe);

//   if (response.data.resultCode === 0) {
//     dispatch(getUserData());
//   }
// };

// export const logout = () => async (dispatch: ThunkDispatch<initialStateType, {}, any>) => {
//   let response = await authAPI.logout();

//   if (response.data.resultCode === 0) {
//     dispatch(setUserData(null, null, null, false));
//   }
// };
