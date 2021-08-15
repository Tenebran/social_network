import { v1 } from 'uuid';
import { ActionTypes } from './store/store';
import { userImage } from './userImage';
import { Dispatch } from 'redux';
import { API, profileAPI } from '../modules/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STATUS = 'SET_STATUS';

export type PostDataType = {
  id?: string;
  image: string;
  like: number;
  messages: string;
};

export type ProfileData = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};

export type ProfileType = {
  postData: Array<PostDataType>;
  profileInfo: ProfileData;
  isFetching: boolean;
  status: string;
};

let initialState: ProfileType = {
  postData: [
    {
      id: v1(),
      messages: 'Hello',
      image: userImage,
      like: 10,
    },
    {
      id: v1(),
      messages: 'Heloooooooooooooooooooooooooooooooooooooooooooo',
      image: userImage,
      like: 12,
    },
    {
      id: v1(),
      messages: 'fdhtrhrthrthrhzt',
      image: userImage,
      like: 13,
    },
    {
      id: v1(),
      messages: 'dhghrtdhrthtrhtrhtr',
      image: userImage,
      like: 18,
    },
    {
      id: v1(),
      messages: 'hgdhtthhtehte',
      image: userImage,
      like: 11,
    },
    {
      id: v1(),
      messages: 'dghtehz4rnm',
      image: userImage,
      like: 11,
    },
  ],

  profileInfo: {
    aboutMe: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      github: '',
      mainLink: '',
    },
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: 0,
    photos: {
      small: '',
      large: '',
    },
  },
  isFetching: false,
  status: '',
};

export type initialStateType = typeof initialState;

export const profileReducer = (
  state: initialStateType = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: v1(),
        messages: action.postMessage,
        image: userImage,
        like: 100,
      };

      return { ...state, postData: [newPost, ...state.postData] };
    }

    case 'SET_USER_PROFILE': {
      return { ...state, profileInfo: action.profileInfo };
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export const addPostAC = (title: string) => {
  return {
    type: ADD_POST,
    postMessage: title,
  } as const;
};

export const setUsersProfile = (profileInfo: ProfileData) =>
  ({ type: SET_USER_PROFILE, profileInfo } as const);
export const setIsFetching = (isFetching: boolean) =>
  ({ type: TOGGLE_IS_FETCHING, isFetching } as const);

export const getMyProfile = (userID: string) => {
  return (dispatch: Dispatch) => {
    let userId = userID;
    if (!userId) {
      userId = '18258';
    }
    dispatch(setIsFetching(true));
    API.getMyProfile(userId).then(data => {
      dispatch(setUsersProfile(data));
    });
  };
};

export const setStatus = (status: string) => ({ type: SET_STATUS, status: status } as const);

export const getStatus = (userID: string) => {
  return (dispatch: Dispatch) => {
    let userId = userID;
    if (!userId) {
      userId = '18258';
    }
    dispatch(setIsFetching(true));
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
      dispatch(setIsFetching(false));
    });
  };
};

export const updateStatus = (status: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
