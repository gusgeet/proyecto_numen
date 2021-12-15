import { FaRegObjectUngroup } from 'react-icons/fa';
import { TYPES } from '../actions/shoppingActions';
import axios from 'axios';
import ProductBase from './productBase';

const baseURL = "http://localhost:3001/Productos";

let productos = axios.get(baseURL)
.then(response => {
    const data = response.data.map(el => el);
    console.log(data)
    return data;
});

/* let productos = async () => {
    try {
        const response = await axios.get(baseURL)
        return response.data
        
    } catch (error) {
        console.log(error)
    }
    
} */

//revisar products o el llamado al array, da error al hacer click
export const shoppingInitialState = {
    products: productos,
    cart: [],
    cartProv: []
};

export function shoppingReducer(state, action){
    switch (action.type) {
        
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find((product) => product.id === action.payload)
            console.log(newItem)
            let itemInCart = state.cart.find((item) => item.id === newItem.id)
            
            return itemInCart ? {
                ...state, 
                cart: state.cart.map((item) => item.id === newItem.id 
                ? {...item, quantity: item.quantity + 1} 
                : item
                )
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
        return state;
    }
}