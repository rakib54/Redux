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
            const newId = action.id;
            const newCart = [...state.cart , newId];
        
            return {
                products: state.products, cart: newCart
            }
        case REMOVE_FROM_CART:
            const id = action.id
            const remainingCart = state.cart.filter(item => !item ===id)
            return {
                cart :remainingCart
            }
        default:
            return state

    }
}