import axios from "axios"
import { CART_ADD_ITEM } from "../Constants/CartConstants";



export const addToCart = (id,qty) => async(dispatch,getState) => {
    const {data} = await axios.get(`http://localhost:5000/api/products/${id}`);

    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data._id,
            titlemax:data.titlemax,
            photo:data.photo,
            price:data.price,
            countInStock:data.countInStock,
            qty,

        },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};