import React from 'react';
import ProductDetail from '../page/ProductDetail';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate); // true면 로그인이 됨, false면 로그인이 안됨
  return authenticate === true ? <ProductDetail /> : <Navigate to='/login' />;
};

export default PrivateRoute;
