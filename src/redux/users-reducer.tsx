import { ActionTypes } from './store/store';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};

let initialState: UsersType = {
  usersData: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
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
      return { ...state, usersData: action.users };
    }

    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.page };
    }

    case 'SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.currentPage };
    }
    default:
      return state;
  }
};

export const followAC = (userID: string) => ({ type: FOLLOW, userID } as const);
export const unFollowAC = (userID: string) => ({ type: UNFOLLOW, userID } as const);
export const setUsersAC = (users: Array<UsersDataType>) => ({ type: SET_USERS, users } as const);
export const setCurrentPageAC = (page: number) => ({ type: SET_CURRENT_PAGE, page } as const);
export const setTotalUsersCountAC = (currentPage: number) =>
  ({
    type: SET_TOTAL_USERS_COUNT,
    currentPage,
  } as const);
