import { createStore, combineReducers } from 'redux';
import { profileReducer } from '../profile-reducer';
import { dialogsReducer } from '../dialogs-reducer';

let reducers = combineReducers({ profileReducer, dialogsReducer });

let store = createStore(reducers);

export type StoreType = typeof store;

export default store;
