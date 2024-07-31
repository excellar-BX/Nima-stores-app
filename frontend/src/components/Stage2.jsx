import React from "react";
import Minitems from '../miniitems-slide'
import './constants/styleconstants.css'
import { FaStar} from "react-icons/fa"
const Stage2 = () => {



    return (
        <div>
            <h2 className="font-semibold text-2xl">Recommended For You</h2>
            <div className="flex flex-row overflow-x-scroll pr-10 mb-16 ">
                    {
                        Minitems.map((minitem, index) =>
        <div className=" my-[20px] mx-[15px] inline-block w-[150px] h-[250px] ">
          <div className="container scroll w-full mx-[30px] rounded-[10px] shadow-lg">
           <img src={minitem.photo} className='w-[90%] mx-auto rounded-xl h-[100px]' alt="" />
              <div className="info flex flex-col bg-[#f1720a] rounded-b-xl">
                  <span className=" text-[#fdba00] text-xl font-semibold m-1">{minitem.title}</span>
                  <span className="price text-white ml-1">$ {minitem.price}.00</span>
                  <span className="rating flex  text-white ml-1"> {minitem.rating}.0 <FaStar className='relative top-1 left-1' /></span>
                   <span className='z-10 '><button className='bg-[#ffcc80] outline-none border-none block mx-auto my-2 w-28 py-1 mb-2 font-bold text-center rounded-md hover:bg-opacity-[0.5]  transition-all ' >Add to cart</button></span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
            </div>
        </div>
    )
}

export default Stage2