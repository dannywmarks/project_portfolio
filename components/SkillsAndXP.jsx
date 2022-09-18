import React from "react";

const SkillsAndXP = () => {
  return (
    <div className="mt-20">
      <p className="font-pencil text-xl text-red-200 font-bold my-2 mt-14">
        &lt;h1&gt;
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-4 ">
        <div className="">
          <p className="text-[6rem] font-bold font-script text-white leading-9">
            My Skills &amp;
          </p>
          <p className="text-[6rem] font-bold font-script text-white">
            Experience
          </p>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/h1&gt;
          </p>

          <p className=" text-gray-300 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            dolorum similique iusto quidem nam ipsum cum, debitis ab est
            consectetur fugiat laborum ducimus obcaecati, soluta, dolores odit
            perferendis dolore nulla.
          </p>
        </div>
        <div className="z-10">
          <ul className="text-white w-full p-6 mx-auto my-4 shadow-2xl">
            My Skills
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
              <h3>Management</h3>
              <span className="bar">
                {" "}
                <span className="management"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndXP;
