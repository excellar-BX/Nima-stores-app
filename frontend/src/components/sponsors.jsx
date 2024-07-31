import React from 'react';
import pic from '../assets/oleson.png'
const Sponsors = () => {
  const Trademarks = [
    {photo:pic},
    {photo:pic},
    {photo:pic},
    {photo:pic},
  ]
  return (
    <div className='flex flex-col items-center justify-center mx-auto md:flex-row ' >
      {
        Trademarks.map(trademark => 
          <img className='mx-[5%] w-[150px]' src={trademark.photo} alt="trademark" />
          )
      }
    </div>
  );
}

export default Sponsors;
