import { v1 } from 'uuid';
import { ActionTypes, DialogsType, userImage } from '../store/store';

const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState = {
  dialogsData: [
    {
      id: v1(),
      name: 'Sergiy Garkusha',
      image: userImage,
    },
    {
      id: v1(),
      name: 'Sergiy Garkusha',
      image: userImage,
    },
    {
      id: v1(),
      name: 'Sergiy Garkusha',
      image: userImage,
    },
    {
      id: v1(),
      name: 'Sergiy Garkusha',
      image: userImage,
    },
    {
      id: v1(),
      name: 'Sergiy Garkusha',
      image: userImage,
    },
    {
      id: v1(),
      name: 'Sergiy Garkusha',
      image: userImage,
    },
  ],

  messagesData: [
    {
      id: v1(),
      messages: 'Hello',
      image: userImage,
      userName: 'Sergiy Garkusha',
    },
    {
      id: v1(),
      messages: 'fhtrh',
      image: userImage,
      userName: 'Sergiy Garkusha',
    },
    {
      id: v1(),
      messages: 'fdhtrhrthrthrhzt',
      image: userImage,
      userName: 'Sergiy Garkusha',
    },
    {
      id: v1(),
      messages: 'dhghrtdhrthtrhtrhtr',
      image: userImage,
      userName: 'Sergiy Garkusha',
    },
    {
      id: v1(),
      messages: 'hgdhtthhtehte',
      image: userImage,
      userName: 'Sergiy Garkusha',
    },
    {
      id: v1(),
      messages: 'dghtehz4rnm',
      image: userImage,
      userName: 'Sergiy Garkusha',
    },
  ],
};

export const dialogsReducer = (state: DialogsType = initialState, action: ActionTypes) => {
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
