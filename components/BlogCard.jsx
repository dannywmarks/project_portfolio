import React from "react";
import Image from "next/image";
import MS from "../public/assets/MoneyShot.svg";
import Blog from "../public/assets/projects/uniswap_clone.png";
import Profile from "../public/profile_pic.svg";


const Card2 = ({
  author,
  title,
  desc,
  date,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  return (
    <>
      {/* <!-- Card--> */}
      <div className="mb-8 break-inside p-6 rounded-xl bg-gray-900 flex flex-col bg-clip-border border-2 border-red-300">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="#">
              <Image
                className="rounded-full max-w-none w-12 h-12"
                src={Profile}
                width={50}
                height={50}
                alt={title}
              />
            </a>
            <div className="flex flex-col">
              <div>
                <a
                  className="inline-block text-lg font-bold dark:text-white"
                  href="#"
                >
                  {author}
                </a>
              </div>
              <div className="text-slate-500 dark:text-slate-300">
                {date}
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold dark:text-white">
          {title}
        </h2>
        <div className="py-4">
          <div className="flex justify-between">
            <div
              className="flex border-l-2 border-r-2 border-t-2 border-red-300"
              href="#"
            >
              <Image
                className="max-w-full "
                src={image1}
                width={2500}
                height={1500}
                alt={title}
              />
            </div>
            <div className="flex border-t-2 border-red-300 " href="#">
              <Image
                className="max-w-full "
                src={image2}
                width={2500}
                height={1500}
                alt={title}
              />
            </div>
            <div
              className="flex border-l-2 border-r-2 border-t-2 border-red-300 "
              href="#"
            >
              <Image
                className="max-w-full "
                src={image3}
                width={2500}
                height={1500}
                alt={title}
              />
            </div>
          </div>
          <div className="flex justify-between  ">
            <div
              className="flex border-b-2 border-l-2 border-t-2 border-red-300"
              href="#"
            >
              <Image
                className="max-w-full "
                src={image4}
                width={2000}
                height={1400}
                alt={title}
              />
            </div>
            <div className="flex border-2 border-red-300" href="#">
              <Image
                className="max-w-full "
                src={image5}
                width={2000}
                height={1400}
                alt={title}
              />
            </div>
          </div>
        </div>
        <p className="dark:text-slate-200">
       {desc}
        </p>
        <div className="py-4"></div>
        <div className="relative">
          {/* <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
            <svg className="mr-2" style={{width: "26px", height: "26px"}} viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
              </path>
            </svg>
      
          </span> */}
        </div>
      </div>
    </>
  );
};

export default Card2;
