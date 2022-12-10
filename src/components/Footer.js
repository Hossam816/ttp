import React from 'react'
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='top-text'>
                    <h1>Trippy</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div className='top-logos'>

                    <a href='#'>
                        <i class="fa-brands fa-square-facebook"></i>
                    </a>

                    <a href='#'>
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href='#'>
                        <i class="fa-brands fa-behance"></i>
                    </a>

                    <a href='#'>
                        <i class="fa-brands fa-square-twitter"></i>
                    </a>
                </div>
            </div>

            <div className='bottom'>

                <div className='bottom-links'>
                    <h3>Project</h3>
                    <a href='#'>Changelog</a>
                    <a href='#'>Status</a>
                    <a href='#'>License</a>
                    <a href='#'>All Versions</a>
                </div>

                <div className='bottom-links'>
                    <h3>Community</h3>
                    <a href='#'>GitHub</a>
                    <a href='#'>Issues</a>
                    <a href='#'>Project</a>
                    <a href='#'>Twitter</a>
                </div>

                <div className='bottom-links'>
                    <h3>Help</h3>
                    <a href='#'>Supporrt</a>
                    <a href='#'>Troubleshooting</a>
                    <a href='#'>Contact Us</a>
                </div>

                <div className='bottom-links'>
                    <h3>Others</h3>
                    <a href='#'>Terms of service</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>License</a>
                </div>

            </div>
            <div className='container-fluid foot'>
                <div className='footer-text'>
                    &copy; 2022 Hossam In Egypt, Assyut-All Rights Reserved
                </div>
                <div className='footer-terms'>
                    <a href='#'>Terms</a> | <a href='#'>Privacy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer