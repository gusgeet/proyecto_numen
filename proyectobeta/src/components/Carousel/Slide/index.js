import React from 'react';
import './slide.css';

const Slide = ({name, id}) => {
    return (
        <div className='slide'>
            <a href="/">
                <img src={name} alt={id} />
            </a>
        </div>
    )
}

export default Slide;
