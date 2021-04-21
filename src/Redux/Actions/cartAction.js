export const ADD_TO_CART = 'ADD_TO_CART'

export const REMOVE_FROM_CART = 'REMOVE_CART'

export  const AddToCart = id =>{
    return {type :ADD_TO_CART ,id}
}

export const RemoveCart = id =>{
    return {type :REMOVE_FROM_CART ,id}
}