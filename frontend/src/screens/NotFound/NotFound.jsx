import React from 'react';
import "../../components/constants/styleconstants.css"
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className=''>
    <div className='m-auto block text-center my-[10%]' >
      <h1 className='text-4xl font-semibold mt-4 ml-5'>Ooops...</h1>
      <h2 className='text-2xl ml-5'>Page not Found</h2>
      <img src="./Notfound4.png" className='w-[250px] block mx-auto'  alt="error 404" />
      <Link to='/' className=' '>     
      <button className='w-[50%] block mx-auto h-10 rounded-2xl font-bold bg-coral'  >Home Page</button>
      </Link>
    </div>
    </div>
  );
}

export default NotFound;
