import React from 'react'
import './section6.css'
import Button from './button'
import airbnb from '../assets/airbnb.png'
import binance from '../assets/binance.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'


function Section6() {
    const brands = [ airbnb, binance, coinbase, dropbox];
  return (
    <>
    <div className='brands-flex'>
        {brands.map((brand)=>(
            <img src={brand}/>
        ))}
    </div>
    <div className='section-6-flex'>
        <div >
          <h1>Let's try our services now!</h1>
          <p>Everything you need to accept card payments <br/> and grow your business anywhere on the planet. </p>
        </div>
        <Button title='Get Started'/>
       
    </div>
    </>
  )
}

export default Section6
