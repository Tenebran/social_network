import { v1 } from 'uuid';
import { ActionTypes } from './store/store';
import { userImage } from './userImage';

export type MessagesDataType = {
  id: string;
  messages: string;
  image: string;
  userName: string;
};

export type DialogsDataType = {
  id: string;
  name: string;
  image: string;
};

export type DialogsType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
};

const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState: DialogsType = {
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

export type initialStateType = typeof initialState;

export const dialogsReducer = (
  state: initialStateType = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessages = {
        id: v1(),
        messages: action.postMessage,
        image: userImage,
        userName: 'Sergiy Garkusha',
      };
      return { ...state, messagesData: [...state.messagesData, newMessages] };

    default:
      return state;
  }
};

export const addMessageAC = (title: string) => {
  return {
    type: 'ADD-MESSAGE',
    postMessage: title,
  } as const;
};
