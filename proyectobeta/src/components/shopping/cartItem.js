import React from 'react';
import Button from "../Button";

const CartItem = ({data, deleteFromCart}) => {
    
    const {id, name, price, quantity} = data;

    return (
        <div className="cart-item">
            <h4>{name} </h4>        
            <h5>${price} x {quantity} = ${price * quantity} </h5>
            <Button onClick={() => deleteFromCart(id)}>Eliminar uno</Button>
            <Button onClick={() => deleteFromCart(id, true)}>Eliminar todos</Button>
        </div>
    )
}

export default CartItem