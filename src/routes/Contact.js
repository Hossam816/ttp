import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assets/pexels-johannes-plenio-1437604.jpg'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
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
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact