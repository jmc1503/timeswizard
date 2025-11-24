// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProgressProvider } from './context/ProgressContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressProvider>
      <div className="app-shell">
        <div className="phone-frame">
          <App />
        </div>
      </div>
    </ProgressProvider>
  </React.StrictMode>
);