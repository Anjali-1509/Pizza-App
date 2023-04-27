import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { getAllPizzaReducer } from "./Reducers/pizzaReducer";
import { cartReducer } from "./Reducers/cartReducer";
import { registerUserReducer,loginUserReducer } from "./Reducers/userReducer";

const rootReducer = combineReducers({
    getAllPizzaReducer : getAllPizzaReducer,
    cartReducer : cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
})

const cartItems= localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const loggedInUser = localStorage.getItem("loggedInUser") ? JSON.parse(localStorage.getItem("loggedInUser")) : null

const initialState= {
    cartReducer : {
        cartItems: cartItems
    },
    loginUserReducer: {
        loggedInUser : loggedInUser
    }
}
const middleware = [thunk]
const store = createStore(
    rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
)

export default store