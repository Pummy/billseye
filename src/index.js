import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename="/demo">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();