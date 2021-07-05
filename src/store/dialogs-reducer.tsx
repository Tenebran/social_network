import { v1 } from 'uuid';
import { ActionTypes, DialogsType, userImage } from './store';

const ADD_MESSAGE = 'ADD-MESSAGE';

export const dialogsReducer = (state: DialogsType, action: ActionTypes) => {
  if (action.type === ADD_MESSAGE) {
    let newMessages = {
      id: v1(),
      messages: action.postMessage,
      image: userImage,
      userName: 'Sergiy Garkusha',
    };
    state.messagesData.push(newMessages);
  }
  return state;
};
