import React from "react";
import Image from "next/image";
import Developer from "../public/assets/undraw-developer.svg";
import { FaArrowDown } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

const Hero = () => {
  return (
    <section className="mt-36">
      <p
        className="font-pencil text-2xl text-red-200 font-bold z-50 "
        id="scroll-rotate"
      >
        scroll
      </p>
      <div id="scroll-down" className="z-50 animate-bounce ">
        <FaArrowDown className="text-4xl text-red-200" />
      </div>
      <div className="grid lg:grid-cols-2 items-center content-center h-full justify-items-center pb-20 ">
        <div className="order-1 lg:order-2 gap-6 h-full w-full relative max-w-xlg px-5">
          <div className="flex flex-col content-center h-full">
            <p className="font-pencil text-xl text-red-200 font-bold my-2 ">
              &lt;img src=&quot;/coder.svg&quot; alt=&quot;me&quot;&gt;
            </p>
            <Image src={Developer} alt="developer" className="" />
            <p className="font-pencil text-xl text-red-200 font-bold my-2">
              &lt;/img&gt;
            </p>
          </div>
        </div>
        <div className="text-white flex flex-col justify-center order-2 lg:order-1  w-full  ">
          <p className="font-pencil text-xl text-red-200 font-bold my-4">
            &lt;h1&gt;
          </p>
          <div className="px-5">
            <p className="font-bold font-poppins text-6xl sm:text-8xl animate-bounce">
              Hi!
            </p>
            <p className="font-bold font-poppins text-6xl sm:text-8xl ">
              I am <span className="font-script text-red-300">Danny</span>
            </p>
          </div>

          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/h1&gt;
          </p>
          <p className="font-pencil text-xl text-red-200 font-bold">
            &lt;h2&gt;
          </p>
          <div className="px-5">
            <p className="text-4xl sm:text-6xl font-poppins">
              a full stack developer
            </p>
          </div>

          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/h2&gt;
          </p>
          <p className="font-pencil text-xl text-red-200 font-bold">
            &lt;h4&gt;
          </p>
          <div className="px-5">
            <p className="text-2xl sm:text-4xl text-gray-400 font-poppins animate-pulse">
              in the web2 & web3 spaces
            </p>
          </div>

          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/h4&gt;
          </p>

          <button className="hidden sm:block border-black py-4 w-60 my-4 text-2xl text-red-300 font-bold outline hover:bg-red-200 hover:text-black font-poppins">
            Contact
          </button>

          <div className="w-full sm:hidden mt-10">
            <div className="duration-300 ease-in-out text-center flex justify-between">
              <SocialIcon
                className="mx-4"
                style={{ height: 75, width: 75 }}
                url="https://linkedin.com/in/danny-marks"
                bgColor="#fff"
              />
              <SocialIcon
                className=""
                style={{ height: 75, width: 75 }}
                url="https://github.com/dannywmarks"
                bgColor="#fff"
              />
              <SocialIcon
                className="mx-4"
                style={{ height: 75, width: 75 }}
                url="mailto:dannywmarks@gmail.com"
                bgColor="#fff"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
