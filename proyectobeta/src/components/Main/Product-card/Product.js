import React from 'react';
import Button from '../../Button';
import './Product.css';



const Product = ({data, addToCart}) => {

    const {id, image, name, price, discount} = data;

    return (
        <div className='product'>
            <img src={image} alt={image} />
            <p className='product-name'>{name}</p>
            <div className="price">
                <p>${price} <snap>${discount}</snap> </p>
            </div>
            <Button onClick={() => addToCart(id)}>Comprar</Button>
        </div>
    )
}

export default Product;
