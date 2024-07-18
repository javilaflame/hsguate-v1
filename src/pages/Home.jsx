import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Projects from '../components/Projects/Projects'
import Subscribe from '../components/Subscribe/Subscribe'
import Footer from '../components/Footer/Footer'
import Copyright from '../components/Copyright/Copyright'
import MiniServices from '../components/MiniServices/MiniServices'
import AboutUs from '../components/AboutUs/AboutUs'

export default function Home() {
    return (
        <>
            <Hero />
            <MiniServices />
            <Services />
            <Projects />
            <AboutUs />
            <Subscribe />
            <Footer />
            <Copyright />
        </>
    )
}
