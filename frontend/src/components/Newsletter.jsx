import React from 'react';
import pic from '../assets/subscribe.png'
const Newsletter = () => {
  return (
    <div className='bgimg py-16 ' >
        <p className='title text-center font-semibold text-3xl my-2' >Suscribe To Our Newsletter</p>
      <span className='subtitle font-semibold text-lg text-center block mx-5  first-letter:text-3xl' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facere fuga blanditiis excepturi consequuntur sapiente amet quidem, nostrum dolor. Tenetur voluptatum voluptatibus praesentium architecto exercitationem quos explicabo veniam eveniet. Laboriosam?</span>
      <form action="">
      <div className="subscribe w-[70%] flex flex-row   bg-[#eee] mx-auto rounded-[25px] my-4">
      <input className='i-email w-[70%] rounded-[25px]' type="email" name="" id="" placeholder='Email Address' />
      <button type="submit" className='subscribe-btn w-[30%] border-white border-2 bg-coral rounded-[25px] px-7 text-lg font-semibold bg-opacity-80 hover:bg-opacity-100 '>Subscribe</button>
      </div>
      </form>
    </div>
  );
}

export default Newsletter;
