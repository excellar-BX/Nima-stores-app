import React, { useState, useEffect } from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { BiSolidHeart } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions.js";
import { ToastContainer, toast } from "react-toastify";
import Toast from "../screens/Toast/Toast.jsx";
const Stage1 = () => {
  let [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const params = useParams();
  const productId = params.id;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;


  const Categories = [
    {
      title: 'Phones and Tablets',  link:"/",
    },
    {
      title: 'Electronics', link:"/ff",
    },
    {
      title: 'Fashion', link:"/qq",
    },
    {
      title: 'Home and Kitchen', link:"/ffff",
    },
    {
      title: 'Laptops and accessories', link:"/www",
    },
    {
      title: 'Baby, kids ans Toys', link:"/eee",
    },
  ]

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  const Navigate = useNavigate();
  const AddToCartHandle = () => {
    Navigate(`/cart/${productId}?qty=${qty}`);
  };

  const Loading = () => {
    return (
      <div className="loading block w-[90%] mx-auto "> 
        <div className="my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
          <Skeleton height={150} width={250} />
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={90} />
          <Skeleton height={16} width={90} />
        </div>
        <div className="my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
          <Skeleton height={150} width={250} />
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={90} />
          <Skeleton height={16} width={90} />
        </div>
        <div className="my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
          <Skeleton height={150} width={250} />
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={90} />
          <Skeleton height={16} width={90} />
        </div>
        <div className="my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
          <Skeleton height={150} width={250} />
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={90} />
          <Skeleton height={16} width={90} />
        </div>
        <div className="my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
          <Skeleton height={150} width={250} />
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={90} />
          <Skeleton height={16} width={90} />
        </div>
        <div className="my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
          <Skeleton height={150} width={250} />
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={90} />
          <Skeleton height={16} width={90} />
        </div>
        <div className="my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
          <Skeleton height={150} width={250} />
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={90} />
          <Skeleton height={16} width={90} />
        </div>
        <div className="my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
          <Skeleton height={150} width={250} />
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={90} />
          <Skeleton height={16} width={90} />
        </div>
        <div className="my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
          <Skeleton height={150} width={250} />
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={90} />
          <Skeleton height={16} width={90} />
        </div>
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="my-[30px] mx-8">
      <div className="cartegory px-4 flex flex-row  overflow-x-hiddden overflow-y-hidden">
        

      {
        Categories.map((category) =>
        <div className=' rounded-2xl h-[200px] shadow-lg bg-[#f1a00a] ml-3'  >
          <Link to={category.link}>
        <p className=' text-center text-lg py-1 w-[200px] text-white font-semibold '>{category.title}</p>
        </Link> 
        </div>
        )
      }



      </div>
    </div>
      <div className="block w-[90%] mx-auto  ">
        
        {products.map((product) => {
          return (
            <div
            className="class-body hover:scale-[1.05] transition-all ease-out delay-750 my-[20px] mx-[15px] max-[375px]:mx-auto max-[375px]:block inline-block w-[250px] h-[350px] "
            key={product.id}
            >
              <div className="container  w-full my-[10px] rounded-[10px] shadow-xl">
                <a href={product.photo} className=" -z-30 ">
                  <img
                    src={product.photo} 
                    className="w-[90%] mx-auto rounded-xl h-[150px]"
                    alt="product"
                    />
                </a>
                <div className="info flex flex-col bg-[#f1720a] rounded-b-xl">
                  <Link to={`/products/${product._id}`}>
                    <span className=" text-[#fdba00] text-xl font-semibold m-1">
                      {product.title}
                    </span>
                  </Link>
                  <span className="price text-white ml-1">
                    $ {product.price}.00
                  </span>
                  <span className="rating flex  text-white ml-1">
                    {" "}
                    {product.rating}.0{" "}
                    <FaStar className="relative top-1 left-1" />
                  </span>
                  <span className="z-10 ">
                    <div className="flex mb-3 justify-center items-center ">
                      <NavLink to={`/products/${product._id}`}>
                        <button
                          className="bg-[#ffcc80] mr-2 outline-none border-none block mx-auto w-32 py-2 font-bold text-center rounded-md bg-opacity-100 hover:bg-opacity-80"
                          type="button"
                          >
                          Add to cart
                        </button>
                      </NavLink>
                        <button className=" bg-[#ffcc80] h-8 w-8 rounded-md top-1">
                          <BiSolidHeart className="block mx-auto" />
                        </button>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : error?  <Toast variant={toast.error } children={'products not displayed'} />: <ShowProducts />}</div>;
};

export default Stage1;
