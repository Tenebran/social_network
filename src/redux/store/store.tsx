import { createStore, combineReducers } from 'redux';
import { profileReducer, addPostAC, setUsersProfile } from '../profile-reducer';
import {
  dialogsReducer,
  addMessageAC,
  MessagesDataType,
  DialogsDataType,
} from '../dialogs-reducer';
import {
  follow,
  unFollow,
  usersReducer,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setIsFollowingInProgress,
} from '../users-reducer';
import { authReducer, setUserData } from '../auth-reducer';

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
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
  | ReturnType<typeof follow>
  | ReturnType<typeof unFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof setUsersProfile>
  | ReturnType<typeof setUserData>
  | ReturnType<typeof setIsFollowingInProgress>;

export type AppStateType = ReturnType<typeof reducers>;

export default store;
