import React from 'react'
import './section3.css'
import transactions from '../assets/transactions.png'
import googleplay from '../assets/googleplay.png'
import applestore from '../assets/applestore.png'
import ellipse5 from '../assets/ellipse5.png'



function Section3() {
  return (
    <div className='section-3'>
        <img src={transactions} className='transactions'/>
        {/* <img src={ellipse5} className='ellipse-5'/> */}
        <div className='section-3-right'>
            <h1>Easily control your <br/> billing & invoicing.</h1>
            <p>With the right credit card, you can improve your financial life <br/> by building credit, earning rewards and saving money. But <br/> with hundreds of credit cards on the market.</p>
            <div className='store'>
                <img src={googleplay}/>
                <img src={applestore}/>
            </div>
        </div>
    </div>
  )
}

export default Section3
