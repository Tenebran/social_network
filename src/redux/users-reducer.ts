import { API } from '../modules/api/api';
import { ActionTypes } from './store/store';
import { Dispatch } from 'redux';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
  isFetching: boolean;
  followingInProgress: Array<any>;
};

let initialState: UsersType = {
  usersData: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export type initialStateType = typeof initialState;

export const usersReducer = (
  state: initialStateType = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case FOLLOW: {
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
    case UNFOLLOW: {
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

    case SET_USERS: {
      return { ...state, usersData: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.page };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.currentPage };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingIn
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(id => id !== action.userId)],
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userID: string) => ({ type: FOLLOW, userID } as const);
export const unFollowSuccess = (userID: string) => ({ type: UNFOLLOW, userID } as const);
export const setUsers = (users: Array<UsersDataType>) => ({ type: SET_USERS, users } as const);
export const setCurrentPage = (page: number) => ({ type: SET_CURRENT_PAGE, page } as const);
export const setTotalUsersCount = (currentPage: number) =>
  ({
    type: SET_TOTAL_USERS_COUNT,
    currentPage,
  } as const);
export const setIsFetching = (isFetching: boolean) =>
  ({ type: TOGGLE_IS_FETCHING, isFetching } as const);
export const setIsFollowingInProgress = (followingIn: boolean, userId: string) =>
  ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingIn, userId } as const);

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsFetching(true));
    API.getUsers(currentPage, pageSize).then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setIsFetching(false));
      dispatch(setCurrentPage(currentPage));
    });
  };
};

export const follow = (userId: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsFollowingInProgress(true, userId));
    API.followUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(setIsFollowingInProgress(false, userId));
    });
  };
};

export const unFollow = (userId: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setIsFollowingInProgress(true, userId));
    API.unFollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unFollowSuccess(userId));
      }
      dispatch(setIsFollowingInProgress(false, userId));
    });
  };
};
