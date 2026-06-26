import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// 1. Guard for standard regular users buying tickets
export const UserProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login, but save the current location so we can bounce them back after logging in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user?.role === 'admin') {
    // If an Admin tries to check out, intercept and route them straight to their command center
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
};

// 2. Guard strictly for internal Admin System Operations
export const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated || user?.role !== 'admin') {
    // Unauthorized access attempts get sent back home
    return <Navigate to="/" replace />;
  }

  return children;
};