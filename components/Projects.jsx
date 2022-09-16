import React from "react";
import { projects } from "../utils/constants";
import { ProjectCard } from "../components";

const Projects = () => {
 
  return (
    <div className="text-white text-2xl" id="projects">
      <div className="">
        <h1 className="text-[5rem] font-bold py-10 font-script">
          My Portfolio
        </h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum similique iusto quidem nam ipsum cum, debitis ab est consectetur fugiat laborum ducimus obcaecati, soluta, dolores odit perferendis dolore nulla.
        </p>
        <button className=" border-black py-4 w-60 my-4 ml-2 text-2xl text-red-300 font-bold outline hover:bg-red-200 hover:text-black">
            See More!
          </button>
        <p className="text-[2rem] text-gray-400 py-4 font-bold">web3 projects </p>
        <div className="grid grid-cols-3 gap-4">
          {projects.map(
            (project, idx) =>
            
              project.type === "web3" && (
                <ProjectCard key={idx} name={project.name} img={project.img} desc={project.desc} />
              )
          )}
        </div>
        <p className="text-[2rem] text-gray-400 py-4 font-bold">web2 projects</p>
        <div className="grid grid-cols-3 gap-4">
          {projects.map(
            (project, idx) =>
              project.type === "web2" && (
                <ProjectCard key={idx} name={project.name} img={project.img} desc={project.desc} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
