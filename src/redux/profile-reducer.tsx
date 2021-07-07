import { v1 } from 'uuid';
import { ActionTypes, userImage, ProfileType } from '../store/store';
const ADD_POST = 'ADD-POST';

let initialState = {
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
  newPostText: 'It-kamasutra',
};

export const profileReducer = (state: ProfileType = initialState, action: ActionTypes) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: v1(),
      messages: action.postMessage,
      image: userImage,
      like: 100,
    };

    state.postData.unshift(newPost);
  }

  return state;
};
