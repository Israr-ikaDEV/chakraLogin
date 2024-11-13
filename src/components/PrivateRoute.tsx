import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  const token = localStorage.getItem('auth_token'); 
  
  // token => dashboard
  if (token) {
    return <Outlet />;
  }

  // no token => login
  return <Navigate to="/" replace />;
};

export default PrivateRoute;
