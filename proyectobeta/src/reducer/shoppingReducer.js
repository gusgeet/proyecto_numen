import { TYPES } from '../actions/shoppingActions';

export const shoppingInitialState = {
    products: [
        {id: 1, name: "Plato 1", price: 550.55},
        {id: 2, name: "Plato 2", price: 550.55},
        {id: 3, name: "Plato 3", price: 550.55},
        {id: 4, name: "Plato 4", price: 550.55}
    ],
    cart: []
};

export function shoppingReducer(state, action){
    switch (action.type){
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload)
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
                cart: [...state.cart, {...newItem, quantity: 1}]
                };
            
            }

        case TYPES.REMOVE_PRODUCT: {}

        case TYPES.REMOVE_ALL: {}

        case TYPES.CLEAR_CART: {}

        default:
            return state;
    }
}