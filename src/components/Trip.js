import React from 'react'
import "../styles/Trip.css"
import TripData from './TripData';
import FranceImg from '../assets/pexels-max-avans-5090487.jpg'
import IndonisiaImg from '../assets/pexels-oleksandr-pidvalnyi-2166559.jpg'
import MalayziaImg from '../assets/pexels-umar-mukhtar-1538177.jpg'

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>
                You can discover unique destinations useing Google Maps.
            </p>
            <div className='tripcard'>
                <TripData 
                    image={FranceImg}
                    heading="Trip in France"
                    text="The culture of France has been shaped by geography, by historical events, and by foreign and internal forces and groups."
                />
                <TripData 
                    image={IndonisiaImg}
                    heading="Trip in Indonesia"
                    text="Indonesia is an archipelagic country located in Southeast Asia, lying between the Indian Ocean and the Pacific Ocean."
                />
                <TripData 
                    image={MalayziaImg}
                    heading="Trip in Malaysia"
                    text="Arts and music have a long tradition in Malaysia, with Malay art dating back to the Malay sultanates. "
                />
            </div>
        </div>
    )
}

export default Trip