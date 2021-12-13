import { shoppingInitialState, shoppingReducer } from '../../reducer/shoppingReducer'
import { TYPES } from '../../actions/shoppingActions';
import { useReducer } from 'react';
import CartItem from './cartItem';


export const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { products, cart } = state;

    const deleteFromCart = (id, all = false) => {
        // console.log(id, all)
        if(all){
            dispatch({type: TYPES.REMOVE_ALL, payload: id})
        } else {
            dispatch({type: TYPES.REMOVE_PRODUCT, payload: id})
        }
    }

    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})

    }

    return(
        <>
            <h3>Carrito</h3>
            <div className='box'>
                {cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>)}
                <button onClick={() => clearCart}>Eliminar carro</button>
            </div>
        </>
    )
}

export default ShoppingCart