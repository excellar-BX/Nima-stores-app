import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, FaPinterest, FaGoogle, FaFacebook } from 'react-icons/fa';
const Signup = () => {

  const [type, setType] = useState("password");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async function registerUser(event) {
    event.preventDefault()
    await fetch('http://localhost:5000/api/register', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
    const data = await Response.json()
    console.log(data)
  }
  return (
    <div className='flex md:flex-row flex-col h-screen  ' >

      <div className='md:w-[50%] max-md:py-20 max-md:pt-20 ' style={{ background: 'linear-gradient(270deg, #ffc061, #ffa621 )' }}>
        <div className="relative md:top-[40%]">
          <h1 className=' text-5xl mx-3 my-5 font-semibold ' >Welcome Back!</h1>
          <span className='text-3xl block mx-3  ' >To keep connected with us please login with your personal info</span>
          <Link to='/login' ><button className='px-20 py-3 my-16 rounded-full font-semibold block mx-auto border-2 border-white text-white'>Login</button></Link>
        </div>
      </div>

      <div className="md:w-[50%] md-[300px] max-md:py-20 max-md:pt-20 ">

        <h1 className='text-4xl mx-4 my-10 font-bold'>Create account</h1>

        <div className="max-[420px]:flex">
          <Link to='' className='flex flex-row border-2 max-[420px]:w-[20%] w-[70%] mx-auto rounded-full py-2 lg:text-lg md:text-lg sm:text-lg  mb-4 justify-center '>
            <FaGoogle className='my-1 mx-3 w-6 h-6' /><p className='font-semibold max-[420px]:hidden'>Signup with Google Account</p>
          </Link>
          <Link to='' className='flex flex-row border-2 max-[420px]:w-[20%] w-[70%] mx-auto rounded-full py-2 lg:text-lg md:text-lg sm:text-lg  mb-4 justify-center '>
            <FaFacebook className='my-1 mx-3 w-6 h-6' /><p className='font-semibold max-[420px]:hidden'>Signup with Facebook Account</p>
          </Link>
          <Link to='' className='flex flex-row border-2 max-[420px]:w-[20%] w-[70%] mx-auto rounded-full py-2 lg:text-lg md:text-lg sm:text-lg h-13 mb-4 justify-center '>
            <FaPinterest className='my-1 mx-3 w-6 h-6' /><p className='font-semibold max-[420px]:hidden'>Signup with Pintrest Account</p>
          </Link>
        </div>


        <p className='text-2xl font-semibold text-center my-5' >OR SIGNUP WITH</p>

        <form onSubmit={registerUser} >

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-[90%] mb-5 h-[50px] outline-none pl-3 bg-[#eee] block mx-auto rounded-[25px] ' type="text" name="" id="" placeholder='Username' />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-[90%] mb-5 h-[50px] outline-none pl-3 bg-[#eee] block mx-auto rounded-[25px] ' type="email" name="" id="" placeholder='Email' />
          <div className="w-[94%] ml-[5%] ">
            <div className="flex flex-row mx-auto">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-[100%] mb-5 h-[50px] outline-none pl-3 bg-[#eee] block mx-0 rounded-[25px] ' type={type} name="" id="" placeholder='Password' />
              {type === "password" ? (
                <FaRegEyeSlash onClick={() => setType("text")} className='my-4 w-6 h-6  relative right-[13%]' />
              ) : (
                <FaRegEye onClick={() => setType("password")} className='my-4 w-6 h-6  relative right-[13%]' />
              )}
            </div>
          </div>
          <button type="submit" className='px-20 py-3 rounded-full font-semibold block mx-auto my-6 text-white' style={{ background: 'linear-gradient(270deg, #ffc061, #ffa621 )' }}>Signup</button>
        </form>

      </div>

    </div>
  );
}

export default Signup;
