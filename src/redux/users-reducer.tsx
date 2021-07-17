import { v1 } from 'uuid';
import Users from '../modules/components/Users/Users';
import { ActionTypes } from './store/store';
import { userImage } from './userImage';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UsersDataType = {
  id: string;
  followed: boolean;
  name: string;
  status: string | null;
  location: { city: string | null; country: string | null };
  photos: { small: string | null; large: string | null };
};

export type UsersType = {
  usersData: Array<UsersDataType>;
};

let initialState: UsersType = {
  usersData: [],
};

export type initialStateType = typeof initialState;

export const usersReducer = (
  state: initialStateType = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case 'FOLLOW': {
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case 'UNFOLLOW': {
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }

    case 'SET_USERS': {
      return { ...state, usersData: [...state.usersData, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userID: string) => ({ type: FOLLOW, userID: userID } as const);
export const unFollowAC = (userID: string) => ({ type: UNFOLLOW, userID: userID } as const);
export const setUsersAC = (users: Array<UsersDataType>) =>
  ({ type: SET_USERS, users: users } as const);
