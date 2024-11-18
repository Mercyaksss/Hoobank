import React from 'react'
import './section5.css'
import Reviews from './reviews'
import ellipse4 from '../assets/ellipse4.png'

function Section5() {
  return (
    <div className='section-5'>
      {/* <img src={ellipse4} className='ellipse-4'/> */}
        <div className='section-5a'>
            <h1>What people are <br/>saying about us</h1>
            <p>Everything you need to accept card payments <br/> and grow you business anywhere on the planet.</p>
        </div>
        <div className='section-5b'>
            <Reviews/>
        </div>
      
    </div>
  )
}

export default Section5
