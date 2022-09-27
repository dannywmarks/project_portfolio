import React from "react";
import Image from "next/image";
import MS from "../public/assets/MoneyShot.svg";
import Blog from "../public/assets/projects/uniswap_clone.png"

const Card2 = () => {
  return (
    
    <>
    {/* <!-- Card--> */}
      <article class="mb-4 break-inside p-6 rounded-xl bg-gray-900 dark:bg-slate-800 flex flex-col bg-clip-border border-2 border-red-300">
        <div class="flex pb-6 items-center justify-between">
          <div class="flex">
            <a class="inline-block mr-4" href="#">
              <img class="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/35.jpg" />
            </a>
            <div class="flex flex-col">
              <div>
                <a class="inline-block text-lg font-bold dark:text-white" href="#">Wade Warren</a>
              </div>
              <div class="text-slate-500 dark:text-slate-300 dark:text-slate-400">
                July 17, 2018
              </div>
            </div>
          </div>
        </div>
        <h2 class="text-3xl font-extrabold dark:text-white">
          Web Design templates Selection
        </h2>
        <div class="py-4">
          <div class="flex justify-between gap-1 mb-1">
            <a class="flex" href="#">
              <img class="max-w-full rounded-tl-lg"
                src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </a>
            <a class="flex" href="#">
              <img class="max-w-full"
                src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </a>
            <a class="flex" href="#">
              <img class="max-w-full rounded-tr-lg"
                src="https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </a>
          </div>
          <div class="flex justify-between gap-1">
            <a class="flex" href="#">
              <img class="max-w-full rounded-bl-lg"
                src="https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </a>
            <a class="flex" href="#">
              <img class="max-w-full rounded-br-lg"
                src="https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </a>
          </div>
        </div>
        <p class="dark:text-slate-200">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolores in vitae delectus nemo necessitatibus nobis voluptates soluta possimus odit mollitia sit quasi sed natus impedit expedita, optio amet debitis hic vero earum libero reiciendis ipsa! At veniam officiis voluptatem.
        </p>
        <div class="py-4">
          
        </div>
        <div class="relative">
         
          {/* <span class="flex absolute right-3 top-2/4 -mt-3 items-center">
            <svg class="mr-2" style={{width: "26px", height: "26px"}} viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
              </path>
            </svg>
      
          </span> */}
        </div>
       
      </article>

  </>
  );
};

export default Card2;
