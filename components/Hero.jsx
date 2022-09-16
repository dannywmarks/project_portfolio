import React from "react";
import Image from "next/image";
import Developer from "../public/assets/undraw-developer.svg";

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-center">
      <div className="lg:flex">
        <div className="flex flex-col h-screen justify-center content-start">
          <h1 className="text-[5rem] font-bold">Hi!</h1>
          <h1 className="text-[5rem] font-bold">I am <span className="font-script text-red-300">Danny</span>,</h1>
          <h1 className="text-[3rem] ">a full stack developer</h1>
          <p className="lg:text-[2rem] text-gray-400">
          in the web2 & web3 spaces
          </p>
          <button className=" border-black py-4 w-60 my-4 ml-2 text-2xl text-red-300 font-bold outline hover:bg-red-200 hover:text-black">
            Contact
          </button>
        </div>
        <div>
          <div className="flex flex-col h-screen justify-center px-10">
            <Image src={Developer} alt="developer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
