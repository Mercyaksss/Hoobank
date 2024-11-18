import React from 'react'
import './footer.css'
import logo from '../assets/logo.png'
import footer from '../assets/footer.png'
import insta from '../assets/insta.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'


function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer'>
            <div className='row-1'>
                <img src={logo}/>
                <p>A new way to make the payments<br/> easy, reliable and secure.</p>
            </div>
            <div className='row-2'>
                <p className='first-link'>Usefull Links</p>
                <ul>
                    <li>Content</li>
                    <li>How it works</li>
                    <li>Create</li>
                    <li>Explore</li>
                    <li>Terms & services</li>
                </ul>
            </div>
            <div className='row-3'>
                <p className='first-link'>Community</p>
                <ul>
                    <li>Help center</li>
                    <li>Partners</li>
                    <li>Suggestions</li>
                    <li>Blogs</li>
                    <li>Newsletters</li>
                </ul>
            </div>
            <div>
                <p className='first-link'>Partners</p>
                <ul>
                    <li>Out partners</li>
                    <li>Become a partner</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className='copyright'>
            <div>
                <img src={footer}/>
            </div>
            <div className='social'>
                <img src={insta}/>
                <img src={facebook}/>
                <img src={twitter}/>
                <img src={linkedin}/>
            </div>
        </div>
    </div>
  )
}

export default Footer
