import { v1 } from 'uuid';
import { ActionTypes, userImage, ProfileType } from './store';
const ADD_POST = 'ADD-POST';

export const profileReducer = (state: ProfileType, action: ActionTypes) => {
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
