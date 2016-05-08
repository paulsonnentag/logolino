import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app';

var appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);

// prevent default scrolling when touching app
appElement.addEventListener('touchmove', e => e.preventDefault());
