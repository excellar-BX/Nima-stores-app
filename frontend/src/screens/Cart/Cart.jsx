import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus, BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import { addToCart } from "../../Redux/Actions/CartActions";
import Toast from "../Toast/Toast";
import { toast } from "react-toastify";
const Cart = () => {
  window.scrollTo(0, 0);

  const location = useLocation();
  const params = useParams();
  const productId = params.id;
  let qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  
  const { cartItems } = cart;

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
      
    }
  }, [dispatch, productId, qty] );

  let cartCount = cartItems.length;
  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
  return (
    <div className="mx-[10%] ">
      <Link to="/">
        <BiArrowBack className="absolute md:w-7 md:h-7 lg:ml-10 lg:mt-0 lg:w-10 lg:h-10 w-5 h-5 mr-4 mt-1 left-2 " />
      </Link>
      {cartCount === 0 ? (
        <>
          <div className="text-2xl font-bold my-10 ">
            <p>Cart is empty</p>
          </div>

          <div className=" text-center my-10">
            <span className=" text-[grey] text-lg  ">
              You will see items when you shop
            </span>
          </div>
          <div className="flex flex-col items-center justify-center min-[730px]:flex-row mx-auto w-[90%] ">
            <Link to="/">
              <button className="px-6 bg-coral py-3 rounded-md mx-auto font-semibold bg-opacity-80 hover:bg-opacity-100 mb-4 w-[250px] ">
                Shop Now
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
          
            <div>
              <span className="text-2xl font-bold my-10 ">total products {cartCount}</span>
            </div>
            {cartItems.map((item) => (
              <>
                <div className="cart-item my-5 w-[90%] mx-auto bg-coral bg-opacity-20 rounded-xl flex flex-col min-[460px]:flex-row">
                  <div className="img-container min-[460px]:w-[30%] h-[100%] block mx-auto my-2 ">
                    <a href={`${ '../../../' + item.photo }`}>
                    <img
                      src={`${ '../../../' + item.photo }`}
                      className="cart-item-img w-[160px] h-[90%] m-auto block "
                      alt={item.photo}
                    />
                    </a>
                  </div>
                  <div className="cart-item-info mx-2 max-[460px]:mx-2 min-[460px]:w-[70%] my-4 ">
                    <div>
                      <span className="cart-item-title font-courier text-xl ">
                        <Link to={`/products/${item.productId}`}>
                          {item.titlemax}
                        </Link>
                      </span>
                    </div>
                    <div className="cart-item-price flex  font-semibold text-lg  ">
                      ${item.price}
                      .00
                    </div>
                    <div className="btn-container flex min-[460px]:flex-row-reverse min-[700px]:flex-row ">
                      <button
                        className="btns p-2 bg-coral h-8 mx-6 rounded-2xl my-3 shadow-xl bg-opacity-80 hover:bg-opacity-100 "
                        onClick={() => item.qty - 1}
                      >
                        <BiMinus />
                      </button>
                      <span className="text-xl font-semibold m-3">
                        {item.qty}
                      </span>
                      <button
                        className="btns p-2 bg-coral h-8 mx-6 rounded-2xl my-3 shadow-xl bg-opacity-80 hover:bg-opacity-100  "
                        onClick={() => item.qty + 1}
                      >
                        <BiPlus />
                      </button>
                    </div>
                    <div className="text-right font-bold ">
                      Price
                      <div>$ {item.qty * item.price}.00</div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="total w-[90%] text-right m-8 p-2 font-bold border-b ">
            Total : $ {total}
          </div>

          <div className="flex flex-col items-center justify-center min-[730px]:flex-row mx-auto w-[90%] ">
            <Link to="/">
              <button className="px-6 bg-coral py-3 rounded-md mx-auto font-semibold bg-opacity-80 hover:bg-opacity-100 mb-4 w-[250px] ">
                Back to shopping
              </button>
            </Link>
            <Link to="/">
              <button className="px-6 bg-coral py-3 rounded-md mx-auto font-semibold bg-opacity-80 hover:bg-opacity-100 mb-4 w-[250px] ">
                continue to checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
