import React from 'react'
import './section2.css'
import group10 from  '../assets/group10.png'
import Button from './button'
import Section2Right from './section2Right'


function Section2() {
  return (
    <div className='section-2'>
        <img src={group10}/>
        <div className='section-2-inner-container'>
            <div className='section-2-left'>
                <h1>You do the business, <br/> we'll handle the money.</h1>
                <p>With the right credit card, you can improve your financial life <br/> by building credit, earning rewards and saving money. But <br/> with hundreds of credit cards on the market.</p>
                <Button title='Get Started'/>
            </div>
             <div className='section-2-right'>
                <Section2Right/>
             </div>

        </div>
        
    </div>
  )
}

export default Section2
