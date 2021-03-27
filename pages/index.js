import React from 'react'
import About from '../components/homepage/About/About'
import Footer from '../components/homepage/Footer/Footer'
import Guest from '../components/homepage/Guest/Guest'
import Header from '../components/homepage/Header/Header'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Guest/>
            <Footer/>
        </div>
    )
}

export default HomePage
