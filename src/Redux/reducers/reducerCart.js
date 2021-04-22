import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartAction"

const initialState = {
    cart: [],
    products: [
        { id: 1, name: 'HP Laptop' },
        { id: 2, name: 'Samsung mobile' },
        { id: 3, name: 'Asus Laptop' },
        { id: 4, name: 'Apple Mac book' },
        { id: 5, name: 'Dell Laptop' }
    ]
}
export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1 
                
            }
            const newCart = [...state.cart, newItem];

            return {
                ...state, cart: newCart
            }
        case REMOVE_FROM_CART:
            const id = action.id
            const remainingCart = state.cart.filter(item => item.cartId !== id)
            return {
                ...state, cart: remainingCart
            }
        default:
            return state

    }
}