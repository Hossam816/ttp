import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/pexels-johannes-plenio-1437604.jpg'
function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Contact"

                btnClass="btn-hide"
            />
        </>
    )
}

export default Contact