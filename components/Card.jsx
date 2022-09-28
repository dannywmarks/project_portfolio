import React from "react";
import Image from "next/image";
import ProjectImage from '../public/profile_pic.svg'

export const Card = () => {
  return (
  
      <div
        className="border-2 border-red-300 bg-gray-900 bg-opacity-60 rounded-lg p-6 text-gray-100 relative z-10"
     
      >
        <div className="flex flex-wrap items-center">
          <div className="flex w-full h-48 md:h-64 lg:h-72 relative">
            <div className="w-8/12 pr-4 relative">
              <Image
                src={ProjectImage}
                className="w-full  object-cover object-top rounded-lg bg-white"
                alt=""
               
         
              />
            </div>

            <div className="w-4/12 h-full">
              <div className="flex flex-col w-full h-full">
                <div className="flex-1 pb-2">
                  <div className="w-full h-full relative">
                    <Image
                      src={ProjectImage}
                      className="absolute top-0 w-full h-full object-cover object-center rounded-lg bg-white"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <div className="w-full h-full relative">
                    <Image
                      src={ProjectImage}
                      className="absolute top-0 w-full h-full object-cover object-bottom rounded-lg bg-white"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-8 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-xl">
                Tailmail - Tailwind CSS Email Design Kit
              </h2>

              <div className="flex flex-wrap text-center pt-4 mb-2">
                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                  Tailwind CSS
                </div>

                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                  React
                </div>

                <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-red-300 text-gray-900">
                  Next.js
                </div>
              </div>

              <p className="text-xs leading-relaxed text-gray-50">
                This revolutionary email design kit is going to transform the
                way in which you send modern emails.
              </p>

              <ul className="text-xs mt-4 list-disc list-inside text-gray-50 leading-relaxed">
                <li>Responsive</li>

                <li> Mobile-friendly</li>

                <li> Media queries</li>

                <li> 20MB of JavaScript</li>
              </ul>
            </div>

            <div className="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
              <a
                href="https://stackdiary.com/"
                class="flex items-center justify-center text-center relative text-white font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75"
              >
                Github
              </a>

              <button  className="w-full block text-center relative text-gray-900 font-bold text-sm bg-red-300 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Live Demo</button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Card;
