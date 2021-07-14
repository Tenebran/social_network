import { v1 } from 'uuid';
import { ActionTypes } from './store/store';
import { userImage } from './userImage';
const ADD_POST = 'ADD-POST';

export type PostDataType = {
  id?: string;
  image: string;
  like: number;
  messages: string;
};

export type ProfileType = {
  postData: Array<PostDataType>;
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
};

export type initialStateType = typeof initialState;

export const profileReducer = (
  state: initialStateType = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: v1(),
        messages: action.postMessage,
        image: userImage,
        like: 100,
      };

      return { ...state, postData: [newPost, ...state.postData] };

    default:
      return state;
  }
};

export const addPostAC = (title: string) => {
  return {
    type: 'ADD-POST',
    postMessage: title,
  } as const;
};
