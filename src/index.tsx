import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import state from './testState/state';

ReactDOM.render(<App state={state} />, document.getElementById('root'));