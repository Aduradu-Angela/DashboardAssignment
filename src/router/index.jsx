import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard.jsx';
import Login from '../Pages/Login.jsx'; 
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import ViewProduct from '../Pages/ViewProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/view/:sku",
    element: <ViewProduct />,
  },
]);

export default router;
