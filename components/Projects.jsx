import React from "react";

const Projects = () => {
  return (
    <div className="text-white text-2xl" id="projects">
      <div className="">
        <h1 className="text-[5rem] font-bold py-10 font-script">My Portfolio</h1>
        <p className="text-[2rem] text-gray-400 py-4">web3 projects </p>
        <div className="grid grid-cols-3 gap-4">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <p className="text-[2rem] text-gray-400 py-4">web2 projects</p>
        <div className="grid grid-cols-3 gap-4">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
