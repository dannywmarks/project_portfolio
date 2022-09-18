import React from "react";
import { projects } from "../utils/constants";
import { ProjectCard } from "../components";

const Projects = () => {
  return (
    <div className="text-white text-2xl background-text z-10" id="projects">
      <div className="">
        <p className="font-pencil text-xl text-red-200 font-bold my-2">
          &lt;h1&gt;
        </p>
        <h1 className="text-[6rem] font-bold py-10 font-script">
          My Portfolio
        </h1>
        <p className="font-pencil text-xl text-red-200 font-bold my-2">
          &lt;/h1&gt;
        </p>
        <p className="font-pencil text-xl text-red-200 font-bold my-2">
          &lt;p&gt;
        </p>
        <p className=" text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          dolorum similique iusto quidem nam ipsum cum, debitis ab est
          consectetur fugiat laborum ducimus obcaecati, soluta, dolores odit
          perferendis dolore nulla.
        </p>
        <p className="font-pencil text-xl text-red-200 font-bold my-2">
          &lt;/p&gt;
        </p>
        <button className=" border-black py-4 w-60 mt-6 ml-2 text-2xl text-red-300 font-bold outline hover:bg-red-200 hover:text-black">
          See More!
        </button>

        <p className="text-red-200 mt-8">
          &gt;&gt; git commit -m &quot;I love coding, check out some of my work.&quot;
        </p>
        <p className="text-red-200">&gt;&gt; git push origin -u main</p>

        <p className="text-[2rem] text-gray-400 py-8 font-bold mt-8">
          web3 projects{" "}
        </p>

        <div className="grid grid-cols-3 gap-4 z-10">
          {projects.map(
            (project, idx) =>
              project.type === "web3" && (
                <ProjectCard
                  className="z-10"
                  key={idx}
                  name={project.name}
                  image={project.image}
                  desc={project.desc}
                />
              )
          )}
        </div>
        <p className="text-[2rem] text-gray-400 py-8 font-bold">
          web2 projects
        </p>
        <div className="grid grid-cols-3 gap-4 z-10">
          {projects.map(
            (project, idx) =>
              project.type === "web2" && (
                <ProjectCard
                  className="z-10"
                  key={idx}
                  name={project.name}
                  image={project.image}
                  desc={project.desc}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
