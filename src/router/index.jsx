import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard.jsx';
import Login from '../Pages/Login.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
export default router;