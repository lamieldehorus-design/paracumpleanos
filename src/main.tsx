import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from './router';
import { VoteProvider } from './context/VoteContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider>
      <VoteProvider>
        <App />
      </VoteProvider>
    </RouterProvider>
  </React.StrictMode>
);
