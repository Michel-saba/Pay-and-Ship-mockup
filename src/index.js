import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BuyProductPage from './components/buyForm/BuyProductPage';

import './index.css';
const router = createBrowserRouter([
  {
    path: '/Pay-and-Ship-mockup/',
    element: <App></App>,
  },
  {
    path: '/Pay-and-Ship-mockup/purchase/:id',
    element: <BuyProductPage></BuyProductPage>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
