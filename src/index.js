import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BuyProductForm from './components/buyForm/BuyProductForm';

import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/purchase/:id',
    element: <BuyProductForm></BuyProductForm>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
