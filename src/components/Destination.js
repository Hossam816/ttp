import React from 'react'
import ImageDes1 from '../assets/pexels-pixabay-416974.jpg'
import ImageDes2 from '../assets/pexels-deva-darshan-1173777.jpg'
import ImageDes3 from '../assets/pexels-deva-darshan-1173777.jpg'
import ImageDes4 from '../assets/pexels-deva-darshan-1173777.jpg'
import '../styles/Destination.css'

export default function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see alot, within a time frame</p>

            <div className='first-des'>
                <div className='des-text'>
                    <h2>Taal Volcano, Batangas</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='image'>
                    <img alt='img' src={ImageDes1} />
                    <img alt='img' src={ImageDes2} />
                </div>
            </div>
        </div>
    )
}
