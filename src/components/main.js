import React from 'react'
import './main.css'
import Nav from './nav';
import Hero from './hero';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Footer from './footer'

function Main() {
  return (
    <>
        <Nav/>
        <div className='main'>
                <Hero/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
        </div>
        <Footer/> 

    </>
    
  )
}

export default Main
