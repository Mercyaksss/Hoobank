import React from 'react'
import './hero.css'
// import hand from '../assets/hand.png'
import discount from  '../assets/discount.png'
import getstarted from '../assets/getstarted.png'
import triangle from '../assets/triangle.png'
import robothand from '../assets/robothand.png'
import rectangle1 from '../assets/rectangle1.png'
import rectangle2 from '../assets/rectangle2.png'
import rectangle3 from '../assets/rectangle3.png'
import ellipse11 from '../assets/ellipse11.png'
import bubble1 from '../assets/bubble1.png'
import bubble2 from '../assets/bubble2.png'
import bubble3 from '../assets/bubble3.png'


function Hero() {
  return (  
    <div className='hero-section'>
        <div className='hero-left'>
            <img src={discount} className='discount-image'/>
            <div className='hero-left-texts'>
                <h1>The Next</h1>
                <h1 className='generation'>Generation</h1>
                <h1>Payment Method.</h1>
                <p>Out team of experts uses a methodology to identify <br/> the credit cards mostly to fit your needs.<br/> We examine annual percentage rates, annual fees.</p>
                <img src={getstarted} className='getstarted-image'/>
            </div>
        </div>
        <div className='hero-right'>
          <div className='layers'>
            <img src={robothand} className='robot-hand'/>
            <img src={rectangle1} className='rectangle-1'/>
            <img src={rectangle2} className='rectangle-2'/>
            <img src={rectangle3} className='rectangle-3'/>
            <img src={bubble1} className='bubble-1'/>
            <img src={bubble2} className='bubble-2'/>
            <img src={bubble3} className='bubble-3'/>
            <img src={triangle} className='triangle'/>
            <img src={ellipse11} className='ellipse-11'/>

          </div>

        </div>
    </div>
  )
}

export default Hero
