import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slides from '../slider';


const Stage3 = () => {


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1

    }
  };

  return (
    <div>
      <Carousel
        showDots={true}
        responsive={responsive}
      >
      {
        slides.map((slide, index) => 
         
  <div className='w-full'>
  <div className="w-[270px] h-[300px] shadow-xl rounded-xl bg-red-500 my-[30px] mx-auto ">
    <div >
      <img className=" w-[100px] h-[100px] rounded-[50%] my-3 mx-auto" src={slide.photo} alt="me" />
    </div>
    <div className="card-title text-2xl font-semibold text-[#525151] text-center ">{slide.title}</div>
    <div className="card-description  text-[#525151] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid quo autem, accusamus excepturi quod. Possimus et cum quam.</div>
  </div>
</div>
        )
      }
      </Carousel>
    </div>
  );
}

export default Stage3;
