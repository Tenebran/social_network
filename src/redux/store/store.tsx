import { createStore, combineReducers, applyMiddleware } from 'redux';
import { profileReducer, addPostAC, setUsersProfile, setStatus } from '../profile-reducer';
import {
  dialogsReducer,
  addMessageAC,
  MessagesDataType,
  DialogsDataType,
} from '../dialogs-reducer';
import {
  followSuccess,
  unFollowSuccess,
  usersReducer,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setIsFollowingInProgress,
} from '../users-reducer';
import { authReducer, setUserData } from '../auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

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
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unFollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof setUsersProfile>
  | ReturnType<typeof setUserData>
  | ReturnType<typeof setIsFollowingInProgress>
  | ReturnType<typeof setStatus>;

export type AppStateType = ReturnType<typeof reducers>;

export default store;
