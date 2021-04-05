import React from 'react';
import UserDashboard from '../components/Dashboard/UserDashboard';
import { useSelector } from 'react-redux';
import redirect from 'nextjs-redirect';
import Link from 'next/link';
import Header from '../components/homepage/Header/Header';
const dashboard = () => {
  const authenticated = useSelector((state) => state.auth);
  return <div>{authenticated.isAuthenticated ? <UserDashboard /> : <></>}</div>;
};

export default dashboard;
