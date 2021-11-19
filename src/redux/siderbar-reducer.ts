import { v1 } from 'uuid';
import {
  messageIcon,
  musicIcon,
  newsIcon,
  profileIcon,
  settingsIcon,
  userIcon,
} from '../modules/assest/icons';

export type SiderbarType = {
  link: string;
  name: string;
  icon: JSX.Element;
  key: string;
};

let initialState: Array<SiderbarType> = [
  { link: '/profile', name: 'My profile', icon: profileIcon, key: v1() },
  { link: '/dialogs', name: 'Messages', icon: messageIcon, key: v1() },
  { link: '/users', name: 'Users', icon: userIcon, key: v1() },
  { link: '/news', name: 'News', icon: newsIcon, key: v1() },
  { link: '/music', name: 'Music', icon: musicIcon, key: v1() },
  { link: '/settings', name: 'Settings', icon: settingsIcon, key: v1() },
];

export type initialStateSiderbarType = typeof initialState;

export const siderbarReducer = (
  state: initialStateSiderbarType = initialState,
  action: ActionTypes
): initialStateSiderbarType => {
  switch (action) {
    default:
      return state;
  }
};

type ActionTypes = {};
