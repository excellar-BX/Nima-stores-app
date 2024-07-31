import React, { useState } from "react";
import Header from "../../components/Header";
import Stage1 from "../../components/Stage1";
import Stage2 from "../../components/Stage2";
import Stage3 from "../../components/Carousel";
import Newsletter from "../../components/Newsletter";
import Sponsors from "../../components/sponsors";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { FaSearch } from "react-icons/fa";
import "../../components/constants/styleconstants.css";
const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Hero />
      <div className="">
        <form action="">
          <div className="h-[50px] bg-[#eee] w-[80%] my-5  flex flex-row justify-end mx-auto rounded-[25px]  ">
            <input
              type="search"
              maxLength={1000}
              name="search"
              id=""
              placeholder="search store...."
              className="h-full pl-4 w-[80%] outline-none "
              style={{ background: "none" }}
            />
            <button
              className="ml-[19%] mr-[1%] relative items-center  h-[80%] w-[43px] block my-auto rounded-[25px] bg-[#fffbfb] "
              type="submit"
            >
              <FaSearch className="block mx-auto" />
            </button>
          </div>
        </form>
      </div>

      <div className="my-[30px] mx-8">
        <div className="cartegory h-[100px] px-4 flex flex-row  overflow-x-scroll overflow-y-hidden">
          
        </div>
      </div>
      <Stage1 />
      <Stage2 />
      <Stage3 />
      <Sponsors />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
