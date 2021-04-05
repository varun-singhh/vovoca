import React, { useEffect } from "react";
import UserDashboard from "../components/Dashboard/UserDashboard";
import { useSelector } from "react-redux";
import cookie from 'js-cookie'
import Head from "next/head";

const dashboard = () => {
  const authenticated = useSelector((state) => state.auth);
  var token;
  if (process.browser) {
    token = cookie.get("token");
  }

  return (
    <div>
      <Head>
        <title>VOVOCA | Welcome to Dashboard</title>
      </Head>
      {authenticated.isAuthenticated || token ? (
        <UserDashboard />
      ) : process.browser ? (
        (window.location.href = "/")
      ) : (
        ""
      )}
    </div>
  );
};

export default dashboard;
