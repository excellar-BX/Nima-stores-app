import React from 'react';
import { Link } from 'react-router-dom';
import {FaPhoneAlt, } from 'react-icons/fa';
import { BiLogoWhatsapp, BiLogoApple, BiLogoAndroid, BiLogoFacebookCircle,BiLogoTwitter,BiLogoInstagram, BiLogoYoutube, BiCopyright, BiSolidEnvelope } from 'react-icons/bi'
const Footer = () => {
  return (
    <div>

      <div className="footer-head flex flex-row max-md:flex-col py-4 bg-[#a3a3a3] ">
        <span className='flex flex-row ' >
          <BiSolidEnvelope  className='w-[30px] h-[30px] my-3 mx-2 '/>
          <div className='flex flex-col ml-4 text-left'>
            <span className='font-semibold text-lg'>Email support</span>
            <span>
              <Link className='text-white hover:text-coral' to='mailto:olesonstoreng@gmail.com' >
                olesonstoreng@gmail.com
              </Link>
            </span>
          </div>
        </span>
        <span className='flex flex-row ' ><FaPhoneAlt className='w-[30px] h-[30px] my-3 mx-2 '/>
          <div className='flex flex-col ml-4 text-left'>
            <span className='font-semibold text-lg'>Phone contact</span>
            <span>
              <Link className='text-white hover:text-coral' to='tel:+234 7015388599' >
                +234 7015388599,
              </Link>
              <Link className='text-white hover:text-coral' to='tel:+234 7015388599' >
                +234 7015388599
              </Link>
            </span>
          </div>
        </span>
        <span className='flex flex-row ' ><BiLogoWhatsapp  className='w-[40px] h-[40px] my-3 mx-2 '/>
          <div className='flex flex-col ml-4 text-left'>
            <span className='font-semibold text-lg'>Whatsapp</span>
            <span>
              <Link className='text-white hover:text-coral' to='tel:+234 7015388599' >
                +234 7015388599,
              </Link>
              <Link className='text-white hover:text-coral' to='tel:+234 7015388599' >
                +234 7015388599
              </Link>
            </span>
          </div>
        </span> 
      </div>

{/* footer section 2 */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-white bg-black px-[5%] h-full py-7 '>
        <div className=" flex flex-col w-[200px] ml-4 mr-0 ">
          <h4 className=' text-xl font-semibold ' >ABOUT OLESON</h4>
          <div className="flex flex-col">
            <Link to='' className='text-white hover:text-coral ' >Contact Us</Link>
            <Link to='' className='text-white hover:text-coral ' >About Us</Link>
            <Link to='' className='text-white hover:text-coral ' >Careers</Link>
            <Link to='' className='text-white hover:text-coral ' >Our Blog</Link>
            <Link to='' className='text-white hover:text-coral ' >Forum</Link>
            <Link to='' className='text-white hover:text-coral ' >Terms & Conditions</Link>
          </div>
        </div>
        <div className="flex flex-col w-[200px] ml-4">
          <h4 className=' text-xl font-semibold '>PAYMENT</h4>
          <div className="flex flex-col ">
            <Link to='' className='text-white hover:text-coral ' >Paypal</Link>
            <Link to='' className='text-white hover:text-coral ' >Wallet</Link>
            <Link to='' className='text-white hover:text-coral ' >Verve</Link>
            <Link to='' className='text-white hover:text-coral ' >Mastercard</Link>
            <Link to='' className='text-white hover:text-coral ' >Visa</Link>
          </div>
        </div>
        <div className="flex flex-col w-[200px] ml-4">
          <h4 className=' text-xl font-semibold '>BUYING ON OLESON</h4>
          <div className="flex flex-col ">
            <Link to='' className='text-white hover:text-coral ' >Buyer Safety Center</Link>
            <Link to='' className='text-white hover:text-coral ' >FAQs</Link>
            <Link to='' className='text-white hover:text-coral ' >Delivery</Link>
            <Link to='' className='text-white hover:text-coral ' >Oleson Return Policy</Link>
            <Link to='' className='text-white hover:text-coral ' >Digital Services</Link>
            <Link to='' className='text-white hover:text-coral ' >Bulk Purchase</Link>
          </div>
        </div>
        <div className="flex flex-col w-[200px] ml-4">
          <h4 className=' text-xl font-semibold '>MORE INFO</h4>
          <div className="flex flex-col ">
            <Link to='' className='text-white hover:text-coral ' >Site Map</Link>
            <Link to='' className='text-white hover:text-coral ' >Track My Order</Link>
            <Link to='' className='text-white hover:text-coral ' >Privacy Policy</Link>
            <Link to='' className='text-white hover:text-coral ' >Authentic terms Policy</Link>
          </div>
        </div>
      </div>
        <div className=" bg-black text-white p-10 border-t-[1px] border-white  ">
          <div className=' '>
          <h4 className='text-2xl font-semibold' >DOWNLOAD & CONNECT WITH US</h4>
          <div className="flex flex-row text-lg">
            <BiLogoAndroid className='w-8 h-8  hover:text-coral' />
            <p>Download on<span><Link to="/"   className='text-white hover:text-coral cursor-pointer'> Google Play</Link></span></p>
          </div>
          <div className="flex flex-row text-lg">
            <BiLogoApple className='w-8 h-8  hover:text-coral' />
            <p>Download on <span ><Link to="/"  className='text-white hover:text-coral cursor-pointer' > App Store</Link></span></p>
          </div>
          <div>
            <h4 className=' text-2xl '>CONNECT WITH US</h4>
            <span className='flex flex-row my-3'>
              <BiLogoFacebookCircle className=' w-8 h-8 ml-2 hover:text-coral' /><BiLogoTwitter className=' w-8 h-8 ml-2 hover:text-coral' /><BiLogoInstagram className=' w-8 h-8 ml-2 hover:text-coral' /><BiLogoYoutube className=' w-8 h-8 ml-2 hover:text-coral' />
                        
            </span>
          </div>
          </div>
          </div>
    </div>
  );
}

export default Footer;
