import React, { useEffect } from 'react'
import Head from 'next/head'
import About from '../components/homepage/About/About'
import Footer from '../components/homepage/Footer/Footer'
import Guest from '../components/homepage/Guest/Guest'
import Header from '../components/homepage/Header/Header'
import { useMediaQuery } from 'react-responsive'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useDispatch } from 'react-redux'
import { getAllMusic } from '../actions/musicActions'

const Tablet = () => {
    const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1226 })
    return isTablet
}
const closeIcon = (
    <svg style={{display:"none"}}>
    </svg>
  );
const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllMusic())
    }, [])

    return (
        <div>
            {Tablet()?(<>
                <Modal open={true} onClose={false} center closeIcon={closeIcon}>
        <h2>This Web service is not available in Tablet mode :(</h2>
      </Modal>
            </>):(
                <>
                <Head>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Header/>
            <About/>
            <Guest/>
            <Footer/></>
            )}
            
        </div>
    )
}

export default HomePage
