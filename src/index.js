import React from 'react';
import ReactDOM from 'react-dom';
import environment from './util/relayEnv';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App environment={environment} />
  </React.StrictMode>,
  document.getElementById('root')
);