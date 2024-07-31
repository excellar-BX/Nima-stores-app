import React from "react";
import pic from "../assets/me.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { Ads } from "../slider";
import { Link } from "react-router-dom";
const Hero = () => {
  let adIsImg = false;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className=" text-black w-full max-[680px]:h-fit max-[680px]:pb-3  h-[500px] pt-1   bg-[#f3b12c] bg-opacity-25 ">
        <Carousel
          className="  "
          showDots={false}
          arrows={false}
          keyBoardControl={true}
          autoPlay={true}
          infinite={true}
          pauseOnHover={true}
          autoPlaySpeed={5000}
          responsive={responsive}
        >
          {Ads.map((slide) => (
            <div
              className={`advertisement w-[95%] h-20 bg-[${slide.background}] shadow-xl block mx-auto my-1 rounded-[5px]  `}
            >
              <div key={slide.id} className=" px-[2%]">
                <Link to={slide.redirect}>
                  <div>
                    <div className="flex flex-row">
                      <div className="texts w-[50%] ">
                        <div>
                          <span
                            className={`text-${slide.textColor} text-[80%] `}
                          >
                            {slide.Maintext}
                          </span>
                        </div>
                        <div>
                          <span
                            className={`text-${slide.textColor} text-[110%] `}
                          >
                            {slide.text}
                          </span>
                        </div>
                      </div>
                      <div className="photos w-[40%] h-[80px] ">
                        {adIsImg === true ? (
                          <img src="./me.png" alt="" />
                        ) : (
                          <video
                            src="./ads.mp4"
                            loop={true}
                            autoPlay={true}
                            alt="advertisement"
                            className="w-full h-[80px] block mx-auto "
                          ></video>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="subscript relative float-right mr-[3%] w-fit  text-xs bottom-[20px] mx-2  bg-white ">
          <span className="text-right ">Advertisement</span>
        </div>

        <div className=" ">
          <Carousel
            className=" basis-full w-full mx-auto overflow-hidden "
            showDots={true}
            keyBoardControl={true}
            autoPlay={true}
            infinite={true}
            pauseOnHover={true}
            autoPlaySpeed={15000}
            responsive={responsive}
          >
            
            <div className="flex flex-row max-[680px]:flex-col py-1 justify-center ">
              <div className="left-side text-left block w-[60%] max-[680px]:w-full bg-slate pl-3 ">
                <div className="flex text-5xl font-semibold text-white my-5 ">
                  <span className="flex max-[400px]:flex-col ">LATEST <div className="flex max-[400px]:m-0 mx-2">DEALS <BiSolidPurchaseTag className=" " /> </div>
                  </span>
                </div>
                <span className="w-[80%] text-left block text-white ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores velit eveniet est sunt soluta nobis magni! Commodi
                  nemo quam vitae debitis sed, ratione amet culpa totam natus
                  iure deleniti aliquid.
                </span>
                <div className="anim-button w-[120px] h-[40px] rounded-md text-center text-white text-sm my-4  bg-[grey] ">
                  <span className="p-2 block"> Check Products</span>
                </div>
              </div>
              <div className="right-side w-[40% ] max-[680px]:w-full min-[680px]:max-w-[350px]">
                  <img src={pic} alt="pic" className=" w-[100%] " />
              </div>
            </div>
            {/* ................... */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
