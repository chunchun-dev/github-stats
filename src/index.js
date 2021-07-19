import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p id='disclaimer'>*This project is neither maintained nor endorsed by GitHub</p>
  </React.StrictMode>,
  document.getElementById('root')
);