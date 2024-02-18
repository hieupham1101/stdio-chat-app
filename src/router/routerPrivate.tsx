// import { useAppSelector } from '../redux/hook';
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { WithChildrenProps } from './type';

import { useAppSelector } from '../redux/hook';
import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import { WithChildrenProps } from './type';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const token = useAppSelector((state) => state.auth);
  return token ? <>{children}</> : <Navigate to='/login' replace />;
};

export default RequireAuth;
