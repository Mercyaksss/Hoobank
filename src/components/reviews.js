import React from 'react'
import './reviews.css'
import quotes from '../assets/quotes.png'
import zendaya from '../assets/zendaya.jpeg'
import lana from '../assets/lana.jpeg'
import raye from '../assets/raye.jpeg'


function Reviews() {
    const reviews = [
        {picture: zendaya, name: 'Zendaya', post: 'Founder & leader', text: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.'},
        {picture: lana, name: 'Lana', post: 'Founder & leader', text: 'Money makes your life easier. If you are lucky to have it.'},
        {picture: raye, name: 'Raye', post: 'Founder & leader', text: 'It is usually people in the money business, finance, and international trade that are really rich.'}
    ]
  return (
    <div className='reviews-flex'>
    {reviews.map((i)=> (
        <div className='reviews-card'>
            <img src={quotes} className='quotes-image'/>
            <p className='quote'>{i.text}</p>
            <div className='user'>
                <img src={i.picture}/>
                <div className='user-b'>
                    <h4>{i.name}</h4>
                    <p>{i.post}</p>
                </div>

            </div>
        </div>
    ))}
    </div>

  )
}

export default Reviews
