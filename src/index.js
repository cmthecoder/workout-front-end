import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { WorkoutsContextProvider } from './context/workoutsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <Router>
        <App />
      </Router>
    </WorkoutsContextProvider>
  </React.StrictMode>
);