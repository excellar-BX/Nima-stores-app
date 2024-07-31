import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaPinterest, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
const Login = () => {
  const [type, setType] = useState("password");
  return (
    <div>
      <div className='flex md:flex-row-reverse flex-col h-screen'>


        <div className='md:w-[50%] max-md:py-20 max-md:pt-20 ' style={{ background: 'linear-gradient(270deg, #ffc061, #ffa621 )' }}>
          <div className='relative md:top-[40%] '>
            <h1 className=' text-5xl mx-3 my-5 font-semibold '>Hello, Friend!</h1>
            <span className='text-3xl block mx-3  ' >Enter Your Personal Details And Start Journey With Us</span>
            <Link to='/signup' ><button className='px-20 py-3 my-16 rounded-full font-semibold block mx-auto border-2 border-white text-white'>Signup</button></Link>
          </div>
        </div>

        <div className="md:w-[50%] max-md:py-20 max-md:pt-20 ">
          <h1 className='text-4xl mx-4 my-10 font-bold'>Login</h1>

          <div className="max-[420px]:flex">
            <Link to='' className='flex flex-row border-2 max-[420px]:w-[20%] w-[70%] mx-auto lg:text-lg md:text-lg sm:text-lg rounded-full py-2  mb-4 justify-center '>
              <FaGoogle className='my-1 mx-3 w-6 h-6' /><p className='font-semibold max-[420px]:hidden'>Login with Google Account</p>
            </Link>
            <Link to='' className='flex flex-row border-2 max-[420px]:w-[20%] w-[70%] mx-auto lg:text-lg md:text-lg sm:text-lg  rounded-full py-2  mb-4 justify-center '>
              <FaFacebook className='my-1 mx-3 w-6 h-6' /><p className='font-semibold max-[420px]:hidden'>Login with Facebook Account</p>
            </Link>
            <Link to='' className='flex flex-row border-2 max-[420px]:w-[20%] w-[70%] mx-auto lg:text-lg md:text-lg sm:text-lg  rounded-full py-2 h-13 mb-4 justify-center '>
              <FaPinterest className='my-1 mx-3 w-6 h-6' /><p className='font-semibold max-[420px]:hidden'>Login with Pintrest Account</p>
            </Link>
          </div>


          <p className='text-2xl font-semibold text-center my-5' >OR LOGIN WITH</p>
          <input className='w-[90%] mb-5 h-[50px] outline-none pl-3 bg-[#eee] block mx-auto rounded-[25px] ' type="text" placeholder='Email address' name="" id="" />
          <div className="w-[94%] ml-[5%] ">
            <div className="flex flex-row mx-auto">
              <input className='w-[100%] mb-5 h-[50px] outline-none pl-3 bg-[#eee] block mx-0 rounded-[25px] ' type={type} name="" id="" placeholder='Password' />
              {type === "password" ? (
                <FaRegEyeSlash onClick={() => setType("text")} className='my-4 w-6 h-6  relative right-[13%]' />
              ) : (
                <FaRegEye onClick={() => setType("password")} className='my-4 w-6 h-6  relative right-[13%]' />
              )}
            </div>
          </div>
          <Link to='/forgot-password' className='text-right block text-sm text-coral mr-4' >Forgot your password?</Link>
          <button type="submit" className='px-20 py-3 rounded-full font-semibold block mx-auto my-10 text-white' style={{ background: 'linear-gradient(270deg, #ffc061, #ffa621 )' }}>Login</button>
        </div>

      </div>

    </div>
  );
}

export default Login;
