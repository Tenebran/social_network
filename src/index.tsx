import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { RootStateType } from './store/store';
import store from './store/store';

console.log(store);

export let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store._subscribe(store._rerenderEntire);
