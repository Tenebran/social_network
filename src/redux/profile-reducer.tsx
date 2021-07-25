import { v1 } from 'uuid';
import { ActionTypes } from './store/store';
import { userImage } from './userImage';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type PostDataType = {
  id?: string;
  image: string;
  like: number;
  messages: string;
};

export type ProfileData = {
  aboutMe: string | null;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  userId: number | null;
  photos: {
    small: string | null;
    large: string | null;
  };
};

export type ProfileType = {
  postData: Array<PostDataType>;
  profileInfo: ProfileData;
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
    aboutMe: null,
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
    },
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: null,
    userId: null,
    photos: {
      small: null,
      large: null,
    },
  },
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
