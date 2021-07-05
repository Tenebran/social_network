import { v1 } from 'uuid';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';

export type PostDataType = {
  id?: string;
  image: string;
  like: number;
  messages: string;
};

export type DialogsDataType = {
  id: string;
  name: string;
  image: string;
};

export type messagesData = {
  id: string;
  messages: string;
  image: string;
  userName: string;
};

export type ProfileType = {
  postData: Array<PostDataType>;
  key?: number;
  newPostText: string;
};

export type DialogsType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<messagesData>;
};

export type RootStateType = {
  profile: ProfileType;
  dialogs: DialogsType;
};

export let userImage =
  'https://sun9-8.userapi.com/impf/c841537/v841537085/99b1/4grSL5x_cg8.jpg?size=2560x1440&quality=96&sign=c984b423f823ed80c9ad893c6e36c00c&type=album';

type subscribeType = () => void;

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof addMessageAC>;

export type StoreType = {
  _state: RootStateType;
  updateNewPostText: (newText: string) => void;
  addPost: (postMassage: string) => void;
  _rerenderEntire: () => void;
  _subscribe: (callback: () => void) => void;
  addMessage: (newMessage: string) => void;
  getState: () => RootStateType;
  dispatch: (action: ActionTypes) => void;
};

const store: StoreType = {
  _state: {
    profile: {
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
    },

    dialogs: {
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
    },
  },
  updateNewPostText(newText: string) {
    this._state.profile.newPostText = newText;
    this._rerenderEntire();
  },

  addPost(postMassage: string) {
    let newPost = {
      id: v1(),
      messages: postMassage,
      image: userImage,
      like: 100,
    };

    this._state.profile.postData.unshift(newPost);
    this._rerenderEntire();
  },
  _rerenderEntire() {
    console.log('State chaged');
  },
  _subscribe(observer: subscribeType) {
    this._rerenderEntire = observer;
  },

  addMessage(postMassage: string) {
    let newMessages = {
      id: v1(),
      messages: postMassage,
      image: userImage,
      userName: 'Sergiy Garkusha',
    };
    this._state.dialogs.messagesData.push(newMessages);
    this._rerenderEntire();
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._rerenderEntire();
  },
};

export const addPostAC = (title: string) => {
  return {
    type: 'ADD-POST',
    postMessage: title,
  } as const;
};

export const addMessageAC = (title: string) => {
  return {
    type: 'ADD-MESSAGE',
    postMessage: title,
  } as const;
};

export default store;
