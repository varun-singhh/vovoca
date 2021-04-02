import React from 'react'
import UserDashboard from '../components/Dashboard/UserDashboard'
import { useSelector } from 'react-redux';
import Head from 'next/head'
import redirect from 'nextjs-redirect'
const Redirect = redirect('/')
const dashboard = () => {
    const authenticated = useSelector((state) => state.auth);
    return (
        <div>
            <Head>
                <title>VOVOCA | Welcome to Dashboard</title>
            </Head>
            {authenticated.isAuthenticated?(<UserDashboard/>):( <Redirect/>)}
            
        </div>
    )
}

export default dashboard
