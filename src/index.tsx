import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/store/store';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <App store={store} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
};

rerenderEntireTree();
