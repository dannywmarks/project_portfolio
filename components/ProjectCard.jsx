import React from "react";
import Image from "next/image";

const ProjectCard = ({ name, image, desc }) => {
  console.log('image',image)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 z-10">
      <Image className="w-full" src={image} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-300 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-red-200 hover:bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:text-black hover:font-bold cursor-pointer">
          Github
        </span>
        <span className="inline-block bg-red-200 hover:bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:text-black hover:font-bold cursor-pointer">
          Demo
        </span>
        <span className="inline-block bg-red-200 hover:bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:text-black hover:font-bold cursor-pointer">
          Stack
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
