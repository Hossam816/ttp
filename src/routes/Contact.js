import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/pexels-johannes-plenio-1437604.jpg'
import Footer from '../components/Footer';
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
            <Footer />
        </>
    )
}

export default Contact