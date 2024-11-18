import React from 'react'
import './section4.css'
import methods from '../assets/methods.png'
import Button from './button'

function Section4() {
  return (
    <div className='section-4'>
        <div className='section-4-left'>.
            <h1>Find a better card deal <br/> in few easy steps.</h1>
            <p>With the right credit card, you can improve your financial life <br/> by building credit, earning rewards and saving money. But <br/> with hundreds of credit cards on the market.</p>
            <Button title='Get Started'/>
        </div>
        <div className='section-4-right'>
            <img src={methods}/>
        </div>
      
    </div>
  )
}

export default Section4
