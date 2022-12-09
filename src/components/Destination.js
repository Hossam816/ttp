import React from 'react'
import ImageDes1 from '../assets/pexels-pixabay-416974.jpg'
import ImageDes2 from '../assets/pexels-deva-darshan-1173777.jpg'
import ImageDes3 from '../assets/pexels-guilherme-rossi-1668928.jpg'
import ImageDes4 from '../assets/pexels-sebastian-palomino-1955134.jpg'
import DestinationData from './DestinationData';
import '../styles/Destination.css'

export default function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see alot, within a time frame</p>

            <DestinationData 
                className="first-des"
                heading="Taal Volcano, Batangas"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                img1={ImageDes1}
                img2={ImageDes2}
                
            />

            <DestinationData 
                className="first-des-revers"
                heading="Road Ideas, City road"
                text="Ornare arcu dui vivamus arcu felis bibendum ut. Lectus arcu bibendum at varius vel pharetra. Ultrices dui sapien eget mi proin sed. Faucibus turpis in eu mi bibendum neque egestas. Cursus sit amet dictum sit amet justo. Pellentesque elit ullamcorper dignissim cras. Accumsan sit amet nulla facilisi morbi tempus. Phasellus vestibulum lorem sed risus. Vel pharetra vel turpis nunc eget lorem dolor sed viverra."
                img1={ImageDes3}
                img2={ImageDes4}
            />
        </div>
    )
}
