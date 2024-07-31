import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Stage2 from "../../components/Stage2";
import Footer from "../../components/Footer";
import { FaStar } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../Redux/Actions/ProductActions.js";
import { BiMinus, BiPlus } from "react-icons/bi";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from "../Toast/Toast";



window.scrollTo(0, 0)
const Singleproduct = ({ match })  => {
  let [qty, setQty] = useState(1);
  const params = useParams();
  const productId = params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  const Error = () => {
    return (
      <div className=" text-center mx-auto block my-10 ">
        <p className="text-[100px] font-bold ">404</p>
        <p className="text-xl  ">Product Not Found</p>
      </div>
    );
  };

  const Loading = () => {
    return (
      <div className="flex flex-row h-[full] max-[600px]:flex-col">
        <div className="w-[40%] max-[600px]:w-[90%] h-[70%] block mx-auto my-[30px]">
          <Skeleton height={500} />
        </div>
        <div className="w-[45%] mx-auto my-6 max-[600px]:w-[90%] ">
          <div className="font-courier text-3xl my-5 w-[90%] ">
            <Skeleton height={50} />
          </div>
          <div className="text-lg font-semibold my-3 w-[60%] ">
            <Skeleton />
          </div>
          <div className="text-4xl my-8 font-bold w-[50%]  ">
            <Skeleton height={40} />
          </div>
          <div className="text-xl my-8 w-[100%] block min-[843px]:w-[70%]  ">
            <Skeleton height={140} />
          </div>
          <Skeleton height={80} width={150} />
        </div>
      </div>
    );
  };
  const Navigate = useNavigate();
  const AddToCartHandle = () => {
    Navigate(`/cart/${productId}?qty=${qty}`);
    
  };

  const ShowProduct = () => {
    return (
      <div>
        <div className="flex flex-row h-[full] max-[600px]:flex-col ">
          <a
            className="w-[40%] max-[600px]:w-[90%] h-[70%] block mx-auto my-[30px] "
            href={`${ '../../../' + product.photo }`}
          >
            <img src={`${ '../../../' + product.photo }`} alt="Item" />
          </a>
          <div className="w-[45%] mx-auto my-6 max-[600px]:w-[90%] ">
            <div className="font-courier text-3xl my-5 ">
              {product.titlemax}{" "}
              {product.countInStock > 0 ? (
                ""
              ) : (
                <span className=" font-extrabold ">(Unavailable)</span>
              )}
            </div>
            <div className="flex flex-row">
              <div className="text-lg font-semibold my-3">
                Rating {product.rating}.0{" "}
              </div>
              <FaStar className="mt-4 mx-2 " />
            </div>
            <div className="text-4xl my-8 font-bold">$ {product.price}.00</div>
            <div className="text-xl my-8 w-[100%] block min-[843px]:w-[70%] ">
              {product.description}
            </div>
            {product.countInStock > 0 ? (
              <div className="quantity m-2">
                <button
                  className="w-12 h-12 bg-[#eee] rounded-xl m-4 "
                  onClick={() => setQty(qty < 2 ? (qty = 1) : qty - 1)}
                >
                  {" "}
                  <BiMinus className=" inline-block center " />
                </button>
                <span className=" w-7 text-center h-1">{qty}</span>
                <button
                  className="w-12 h-12 bg-[#eee] rounded-xl m-4 "
                  onClick={(toastAddedItem) =>
                    setQty(
                      qty > product.countInStock - 1
                        ? (qty = product.countInStock)
                        : qty + 1 
                    )
                  }
                >
                  {" "}
                  <BiPlus className=" inline-block center " />
                </button>
              </div>
            ) : null}
            <div className="flex flex-row ">
              {product.countInStock > 0 ? (
                <button
                  onClick={AddToCartHandle}
                  className="w-[60%] h-[60px] border-2 border-coral mx-3 rounded-lg font-semibold hover:bg-coral "
                >
                  {" "}
                  Add to cart
                </button>
              ) : (
                <></>
              )}
              <Link
                to="/cart"
                className="w-[40%] h-[60px] text-center bg-coral rounded-lg py-4 font-semibold hover:bg-white border-2 border-coral "
              >
                Go to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      {loading ? <Loading /> : error ? <Error /> : <ShowProduct />}
      <Stage2 />
      <Footer />
    </div>
  );
};

export default Singleproduct;
