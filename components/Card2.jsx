import React from "react";
import Image from "next/image"
import MS from '../public/assets/MoneyShot.svg'

const Card2 = () => {

  return (
    <div className="container mr-6 p-2 md:p-0 border-2 border-red-300 rounded-xl my-10">
      <div className="shadow-lg flex flex-wrap w-full mx-auto ">
        <div
          className="bg-cover bg-bottom  w-full md:w-1/3 h-64 md:h-auto relative"
        >
          <div className="absolute text-xl h-full w-full mt-3">
            <Image className="" src={MS} alt="MS" height={300} width={250}/>
          </div>
        </div>

        <div className="bg-gray-900 w-full md:w-2/3 rounded-2xl">
          <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
            <div className="bg-gray-900 lg:h-full p-6 -mt-6 md:mt-0 rounded-2xl relative mb-4 md:mb-0">
              <div className="w-full lg:w-1/5 text-center md:text-left">
                <h3>Saint Basils Cathedral</h3>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                  Moscow - Russia
                </p>
                <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
              </div>

              <div className="w-full  lg:px-3">
                <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima impedit mollitia ullam reprehenderit consequatur sunt,
                  ab natus animi illo assumenda quisquam consequuntur ea
                  blanditiis distinctio tempora! Libero, delectus veritatis qui
                </p>
              </div>

              <div className="w-1/2  mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                <button className="mt-6 w-full block text-center relative text-gray-900 font-bold text-sm bg-red-300 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
