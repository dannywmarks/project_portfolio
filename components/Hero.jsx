import React from "react";
import Image from "next/image";
import Developer from "../public/assets/undraw-developer.svg";

const Hero = () => {
  return (
   
    <section className=" py-5 lg-py-10 h-screen">
      <div className="grid lg:grid-cols-2 items-center content-center h-full justify-items-center mx-6 pb-20">
        <div className="text-white flex flex-col justify-center order-2 lg:order-1 mt-10">
          <p className="font-pencil text-xl text-red-200 font-bold my-2">&lt;h1&gt;</p>
          <p className="font-bold text-8xl xl:text-9xl">Hi,</p>
          <p className="font-bold text-8xl xl:text-9xl"> I am <span className="font-script text-red-300">Danny</span></p>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">&lt;/h1&gt;</p>
          <p className="font-pencil text-xl text-red-200 font-bold">&lt;h2&gt;</p>
          <p className="text-7xl ">a full stack developer</p>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">&lt;/h2&gt;</p>
          <p className="font-pencil text-xl text-red-200 font-bold">&lt;p&gt;</p>
          <p className="text-4xl text-gray-400">in the web2 & web3 spaces</p>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">&lt;/p&gt;</p>
      
          <button className=" border-black py-4 w-60 my-4 text-2xl text-red-300 font-bold outline hover:bg-red-200 hover:text-black hover:text-3xl">
            Contact
          </button>
        </div>
        <div className="order-1 lg:order-2 mr-5 h-full w-full mt-40">
  
          <Image src={Developer} alt="developer" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
