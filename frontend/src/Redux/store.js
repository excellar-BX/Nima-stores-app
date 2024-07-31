import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './Reducers/ProductReducers';
import { cartReducer } from './Reducers/CartReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")): []

const initlalState = {
cart: {
    cartItems: cartItemsFromLocalStorage,
}
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initlalState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;