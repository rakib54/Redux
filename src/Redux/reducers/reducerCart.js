import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartAction"

const initialState = {
    cart:[]
}
export const CartReducer = (state = initialState , action) =>{
    switch (action.type ){
        case ADD_TO_CART:
            return {
                cart :[...state.cart, action.id]
            }
        case REMOVE_FROM_CART :
            return{
                remainingCart : [...state.cart.filter(item => item ===!action.id)]
            }    
    }
}