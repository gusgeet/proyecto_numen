import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './cartItem.css'


const CartItem = ({data, deleteFromCart}) => {

    const {id, name, price, quantity} = data;

    return (
        <div className="cart-item">
            <>
            <h4 className='nameText'>{name} </h4>        
            <h5 className='priceText'>${price} x {quantity} = ${price * quantity} </h5>
            </>
            <>
            <button className="buttonDel" onClick={() => deleteFromCart(id)}>Eliminar</button>
            <button className="buttonDel" onClick={() => deleteFromCart(id, true)}><FaTrash/></button>
            </>
        </div>
    )
}

export default CartItem