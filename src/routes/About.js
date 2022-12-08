import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/pexels-vitor-gusmão-shimabukuro-2104044.jpg'
function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About"

                btnClass="btn-hide"
            />
        </>
    )
}

export default About
