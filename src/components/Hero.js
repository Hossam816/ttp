import React from 'react'
import "../styles/HeroStyles.css"

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="HeroImg" src='https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' />
                <div className='hero-text'>
                    <h1>Your Journey Your Story</h1>
                    <p>Choose Your Favourite Destination</p>
                    <a href='/'>
                        Travel Plan 
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero