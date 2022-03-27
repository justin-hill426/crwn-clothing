import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/user.context';


ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>,
  document.getElementById('root')
);



