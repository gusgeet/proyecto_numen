import React from 'react';
import { TYPES } from '../../actions/shoppingActions';
import { shoppingInitialState, shoppingReducer } from '../../reducer/shoppingReducer'
import { useReducer } from 'react';
import CartItem from '../cartItem';
import Button from '../Button';

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const addToCart = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})

    }

    const deleteFromCart = () => {}

    const clearCart = () => {}

    const {products, cart} = state;


    return(
        <>
            <h3>Carrito</h3>
            <div className='box'>
                {cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>)}
                <Button onClick={() => clearCart}>Eliminar carro</Button>
            </div>
        </>
    )
}

export default ShoppingCart