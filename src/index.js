import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Promise from 'promise-polyfill';

import './sass/styles.scss';
import App from './components/App';

const supportsHistory = 'pushState' in window.history
if(!window.Promise) {
  window.Promise = Promise;
}

render((
  <BrowserRouter forceRefresh={!supportsHistory}>
    <App/>
  </BrowserRouter>
), document.getElementById('app'));
