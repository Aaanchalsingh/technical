import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./app"

ReactDOM.render(
  <BrowserRouter basename="/technical">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
