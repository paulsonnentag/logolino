import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import scrollLock from './utils/scroll-lock';

var appElement = document.getElementById('app');

scrollLock(appElement);

ReactDOM.render(<App />, appElement);
