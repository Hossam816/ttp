import React from 'react'
import Destination from '../components/Destination';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
function Homes() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="btn btn-outline-dark btn-show"
            />
            <Destination />
        </>
    )
}

export default Homes