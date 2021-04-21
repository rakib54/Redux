import { createStore } from "redux";
import { CartReducer } from "../reducers/reducerCart";

const store = createStore(CartReducer)

export default store