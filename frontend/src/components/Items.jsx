import React from 'react'
import pic from '../assets/me.png'
import { FaStar, FaCartPlus } from "react-icons/fa"
import {Link, useParams} from 'react-router-dom'
import CartBtn from './cartBtn'
const Items = () => {
    const data = [
        {
            photo:pic, title:"Dried fish", price:"15", rating:'3'
        },
        {
            photo:pic, title:"Dried fish", price:"16", rating:'3'
        },
        {
            photo:pic, title:"Dried fish", price:"10", rating:'5'
        },
        {
            photo:pic, title:"Dried fish", price:"12", rating:'3'
        },
        {
            photo:pic, title:"Dried fish", price:"12", rating:'4'
        },
        {
            photo:pic, title:"Dried fish", price:"16", rating:'1'
        },
        {
            photo:pic, title:"Dried fish", price:"15", rating:'3'
        },
        {
            photo:pic, title:"Dried fish", price:"9", rating:'5'
        },
        {
            photo:pic, title:"Dried fish", price:"13", rating:'3'
        },
    ]
    
    return (
        <> 
        { 
        data.map((item, index) =>
        
        <Link to='/products:id'>
        <div className="class-body hover: scale-[1.05] transition-all ease-out delay-750 my-[20px] mx-[15px] inline-block w-[250px] h-[350px] ">
            <div className="container  w-full my-[10px] mx-[30px] rounded-[10px] shadow-xl">
                <img src={item.photo} className='w-[90%] mx-auto rounded-xl h-[150px]' alt="item" />
                <div className="info flex flex-col bg-[#f1720a] rounded-b-xl">
                    <span className=" text-[#fdba00] text-xl font-semibold m-1">{item.title}</span>
                    <span className="price text-white ml-1">$ {item.price}.00</span>
                    <span className="rating flex  text-white ml-1"> {item.rating}.0 <FaStar className='relative top-1 left-1' /></span>
                    <span className='z-10 '><CartBtn/></span>
                </div>
            </div>
        </div>
        </Link>)
}
        </>
    );
}

export default Items 