import React from "react";
import Image from "next/image";


export const Card = ({
  name,
  desc,
  url,
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  image1,
  image2,
  image3,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech8,
}) => {
  return (
    <div className="border-2 border-red-300 bg-gray-900 bg-opacity-70 rounded-lg p-6 text-gray-100 relative z-10">
      <div className="flex flex-wrap items-center">
        <div className="flex w-full h-48 md:h-64 relative ">
          <div className="w-8/12 pr-4 relative border-2 border-red-300 rounded-tl-lg rounded-bl-lg">
            <Image
              src={image1}
              className="w-full bg-gray-900 rounded-tl-lg rounded-bl-lg"
              alt=""
            
              layout="fill"
          
            />
          </div>

          <div className="w-4/12 h-full">
            <div className="flex flex-col w-full h-full">
              <div className="flex-1">
                <div className="w-full h-full relative  border-t-2 border-r-2 border-red-300 rounded-tr-lg">
                  <Image
                    src={image2}
                    className="absolute top-0 w-full h-full rounded-tr-lg "
                    alt=""
              
                    layout="fill"
            
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="w-full h-full relative  border-t-2 border-r-2 border-b-2 border-red-300 rounded-br-lg">
                  <Image
                    src={image3}
                    className="absolute top-0 w-full h-full object-cover object-bottom rounded-br-lg"
                    alt=""
               
                    layout="fill"
                    
                  
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-xl">{name}</h2>

            <div className="flex flex-wrap text-center pt-4 mb-2 font-bold">
              <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                {tech1}
              </div>

              <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                {tech2}
              </div>

              <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                {tech3}
              </div>
              <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                {tech4}
              </div>
              <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                {tech5}
              </div>
              <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                {tech6}
              </div>
              <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                {tech7}
              </div>
              <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                {tech8}
              </div>
            </div>

            <p className="text-xs leading-relaxed text-gray-50">{desc}</p>

            <ul className="text-xs mt-4 list-disc list-inside text-gray-50 leading-relaxed">
              <li>{bullet1}</li>

              <li>{bullet2}</li>

              <li>{bullet3}</li>

              <li>{bullet4}</li>
            </ul>
          </div>

          <div className="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
            <a
              href={url}
              className="flex items-center justify-center text-center relative font-bold text-sm outline font-poppins border-gray-300 text-gray-300 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:text-black hover:bg-gray-100"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/dannywmarks"
              className="w-full block text-center relative text-red-300 outline border-red-300 font-bold text-sm hover:bg-red-200 hover:text-black px-4 py-3 rounded-lg shadow-lg hover:shadow-none font-poppins "
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
