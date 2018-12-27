import React from 'react';
import { render } from 'react-dom';
import AppContext from 'app-context-js';

import App from './app';

import './style.scss';

AppContext.addAttr("name-app", "Fumoffu-Chat");
AppContext.addAttr("version", "v1.0.0");
AppContext.addAttr("maintainer", "Alan M.E <alanmarquez@outlook.com>");

render(<App />, document.getElementById('root'));
