import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/repo-name">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
