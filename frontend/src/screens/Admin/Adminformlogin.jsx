import React, {useState} from 'react';
import {BiLove,} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
const Adminformlogin = () => {
  
  const [type, setType] = useState("password");
  return (
    <div className='bgimg w-[100%] h-[200%] fixed right-0 ' style={{backgroundSize:'100% 100vh'}} >
      <div className='adform w-[80%] sm:w-[60%] md:w-[50%] h-[40%] block my-20 rounded-2xl m-auto lg:flex lg:w-[70%] bg-coral bg-opacity-60 '>
        <form action="" className='lg:w-[50%] '>
          <h1 className='text-3xl font-bold text-white p-5 '>Welcome back</h1>
          <label htmlFor="email" className='text-lg p-4 font-semibold' >Email address <span className='text-red '>*</span></label>
          <input className='pl-2 my-3 mx-auto block h-[50px] w-[95%] rounded-3xl outline-none text-sm ' type="text" name="email" id="" placeholder='Email address' />
          <label htmlFor="password" className='text-lg p-4 font-semibold' >Password <span className='text-red '>*</span></label>
          <div className="flex flex-row ml-2 ">
            <input className='pl-2 my-3 mx-auto block h-[50px] w-[95%] rounded-3xl outline-none text-sm ' type={type} name="password" id="" placeholder='Password' />
            {type === "password" ? (
              <FaRegEyeSlash onClick={() => setType("text")} className='my-7 relative right-[13%]' />
            ) : (
              <FaRegEye onClick={() => setType("password")} className='my-7 relative right-[13%]' />
            )}
          </div>
          <label htmlFor="passkey" className='text-lg p-4 font-semibold' >Admin passkey <span className='text-red '>*</span></label>
          <input className='pl-2 my-3 mx-auto block h-[50px] w-[95%] rounded-3xl outline-none text-sm ' type="text" name="passkey" id="" placeholder='Admin passkey' />
        <Link className='block text-sm font-bold text-white text-right mr-4 mb-4'>Forgot password</Link>
        
        <div className="btn">
          <Link to='/admin/home'>
            <button type="submit" className=' h-10 bg-[#8e6420] bg-opacity-80 hover:bg-opacity-100 w-[60%] block mx-auto rounded font-semibold text-lg
             '>Login</button>
             </Link>
          </div>
        <div className=" my-6 ">
        <span className='block text-center font-semibold '>Don't have an account? <Link to='/admin/signup' className=' font-semibold text-white  mr-4'>signup</Link></span>
        </div>
        </form>
        <div className='bgimg w-[50%] max-lg:hidden ' style={{backgroundSize:'100% 100%'}} ></div>
      </div>
    </div>
  );
}

export default Adminformlogin;
