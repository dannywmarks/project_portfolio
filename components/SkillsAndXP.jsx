import React from "react";
import { Timeline } from "./Timeline";

const SkillsAndXP = () => {
  return (
    <div className="mt-20 h-full md:h-screen">
      <div className="flex items-center">
        <p className="font-pencil text-xl text-red-200 font-bold ">
          &lt;h1&gt;
        </p>
        <p className="text-[4rem] font-bold font-script text-white ml-2">
          My Toolbox
        </p>
        <p className="font-pencil text-xl text-red-200 font-bold">
          &lt;/h1&gt;
        </p>
      </div>
      <div className="flex">
      <p className="font-pencil text-xl text-red-200 font-bold ">
          &lt;p&gt;
        </p>
        <p className="text-[2rem] text-gray-400 mb-8 font-bold ">
          strengths and skillsets{" "}
        </p>
        <p className="font-pencil text-xl text-red-200 font-bold">
          &lt;/p&gt;
        </p>
      </div>

      <div className=" grid lg:grid-cols-2 gap-4 font-poppins font-bold content-center ">
        <div className="">
          {/* <p className=" text-gray-300 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            dolorum similique iusto quidem nam ipsum cum, debitis ab est
            consectetur fugiat laborum ducimus obcaecati, soluta, dolores odit
            perferendis dolore nulla.
          </p> */}
          <Timeline />
        </div>
        <div className="z-10">
          <ul className="text-white w-full p-12 mx-auto my-4 shadow-2xl text-2xl rounded-2xl">
            <li className="p-2 my-2">
              <h3>Frontend</h3>
              <span className="bar">
                {" "}
                <span className="frontend"></span>
              </span>
            </li>
            <li className="p-2 my-2">
              <h3>Backend</h3>
              <span className="bar">
                {" "}
                <span className="backend"></span>
              </span>
            </li>
            <li className="p-2 my-2">
              <h3>Web3</h3>
              <span className="bar">
                {" "}
                <span className="web3"></span>
              </span>
            </li>
            <li className="p-2 my-2">
              <h3>Communication</h3>
              <span className="bar">
                {" "}
                <span className="communication"></span>
              </span>
            </li>

            <li className="p-2 my-2">
              <h3>Orginization</h3>
              <span className="bar">
                {" "}
                <span className="organization"></span>
              </span>
            </li>
            <li className="p-2 my-2">
              <h3>Leadership</h3>
              <span className="bar">
                {" "}
                <span className="organization"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndXP;
