import { TYPES } from '../actions/shoppingActions';

export const shoppingInitialState = {
    products: [
        {
                "id": 1,
                "image": "/images/products/food01.jpg",
                "name": "burguer",
                "price": 550.55,
                "discount": 600.99
            },
            {
                "id": 2,
                "image": "/images/products/food02.jpg",
                "name": "soup",
                "price": 800.99,
                "discount": 890.99
            },
            {
                "id": 3,
                "image": "/images/products/food03.jpg",
                "name": "pizza",
                "price": 1000.99,
                "discount": 1100.99
            },
            {
                "id": 4,
                "image": "/images/products/food04.jpg",
                "name": "pasta italiana",
                "price": 330.99,
                "discount": 450.99
            }
      ],
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