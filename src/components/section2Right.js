import React from 'react';
import './section2.css';
import star from '../assets/star.png';
import check from '../assets/check.png';
import telegram from '../assets/telegram.png';

function Section2Right() {
    const section2info = [
        {icon: star, title: 'Rewards', text: 'The best credit cards offer some tantalizing combinations of promotions and prices.'},
        {icon: check, title: '100% Secured', text: 'We take proactive steps to make sure your information and transactions are secure.'},
        {icon: telegram, title: 'Balance Transfer', text: 'A balance transfer credit card can save you a lot of money in interest charges.'}
    ];

    return (
        <>
            {section2info.map((item, index) => (
                <div className='card' key={index}>
                    <img src={item.icon} alt={`${item.title} icon`} />
                    <div className='right-texts'>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Section2Right;
