import React from 'react';
import Button from '../../Button';
import './Product.css';

const Product = (props) => {
    return (
        <div className='product'>
            <img src={props.image} alt={props.image} />
            <p className='product-name'>{props.name}</p>
            <div className="price">
                <p>${props.price} <snap>${props.discount}</snap> </p>
            </div>
            <Button>Quick Shop</Button>
        </div>
    )
}

export default Product;
