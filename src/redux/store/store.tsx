import { createStore, combineReducers } from 'redux';
import { profileReducer, addPostAC } from '../profile-reducer';
import {
  dialogsReducer,
  addMessageAC,
  MessagesDataType,
  DialogsDataType,
} from '../dialogs-reducer';
import {
  followAC,
  unFollowAC,
  usersReducer,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setIsFetchingAC,
} from '../users-reducer';

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
});

let store = createStore(reducers);

export type StoreType = typeof store;

export type PostDataType = {
  id?: string;
  image: string;
  like: number;
  messages: string;
};

export type ProfileType = {
  postData: Array<PostDataType>;
  key?: number;
  newPostText: string;
};

export type DialogsType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
};

export type RootStateType = {
  profile: ProfileType;
  dialogs: DialogsType;
};

export type ActionTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unFollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof setIsFetchingAC>;

export type AppStateType = ReturnType<typeof reducers>;

export default store;
