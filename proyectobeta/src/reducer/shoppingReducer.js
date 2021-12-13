import { FaRegObjectUngroup } from 'react-icons/fa';
import { TYPES } from '../actions/shoppingActions';
    
import food01 from '../images/products/food01.jpg';
import food02 from '../images/products/food02.jpg';
import food03 from '../images/products/food03.jpg';
import food04 from '../images/products/food04.jpg';


export const shoppingInitialState = {
    products: [
        {
            id: 1,
            image: food01,
            name: 'salad',
            price: 550.55,
            discount: 600.99
        },
        {
            id: 2,
            image: food02,
            name: 'hamburguesa',
            price: 800.99,
            discount: 890.99
        },
        {
            id: 3,
            image: food03,
            name: 'fruit salad',
            price: 330.99,
            discount: 450.99
        },
        {
            id: 4,
            image: food04,
            name: 'gourmet style',
            price: 1000.99,
            discount: 1100.99
        }
    ],
    cart: [],
    cartProv: []
};

export function shoppingReducer(state, action){
    switch (action.type) {
        case TYPES.A_CONFIRMAR:{
            let newItem = state.products.find(product => product.id === action.payload)

            return {
                cartProv:  [...state.cartProv, {...newItem, quantity: 1}]
                }
        }

        case TYPES.CONFIRMADO:{
            return shoppingInitialState.cartProv
        }

        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product.id === action.payload)
            let itemInCart = state.cart.find((item) => item.id === newItem.id)

            return itemInCart ? {
                ...state, 
                cart: state.cart.map((item) => item.id === newItem.id 
                ? {...item, quantity: item.quantity + 1} 
                : item)
            }
            : {
                ...state,
                cart: [...state.cart , {...newItem, quantity: 1}]
            };
        }

        case TYPES.REMOVE_PRODUCT:{
            let itemToDelete = state.cart.find((item) => item.id === action.payload)
            
            return itemToDelete.quantity > 1 
            ? {
                ...state, 
                cart: state.cart.map((item) => item.id === action.payload
                ? {...item, quantity: item.quantity - 1}
                : item
                )
            }
            : {
                ...state, 
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }

        case TYPES.REMOVE_ALL:{
            return {...state, 
            cart: state.cart.filter(item => item.id !== action.payload)
            }
        }

        case TYPES.CLEAR_CART:{
            return shoppingInitialState;
        }
    
        default:
            return shoppingInitialState;
    }
}