import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='Card'>
            <div className="icon">{props.icon}</div>
           <h4>{props.title}</h4>
           <p>{props.text}</p>
        </div>
    )
}

export default Card;
