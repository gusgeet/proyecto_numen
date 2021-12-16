import React from 'react';
import Button from '../../src/components/Button';
import './Product.css';



const Product = ({data, addToCart, cambiarEstadoModal1}) => {

    const {id, image, name, price, discount} = data;

    return (
        <div className='product'>
            <img src={image} alt={image} />
            <p className='product-name'>{name}</p>
            <div className="price">
                <p>${price} <snap>${discount}</snap> </p>
            </div>
            <Button onClick={(e) => addToCart(id, cambiarEstadoModal1)} >Comprar</Button>
        </div>
    )
}

export default Product;
