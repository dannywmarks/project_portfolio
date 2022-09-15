import React from "react";
import Link from "next/link";
import Image from "next/image";
import Profile from "../public/assets/profilepixel.png";

const Sidebar = () => {
  return (
    <div className="bg-black text-white w-60 text-center flex flex-col h-full justify-between">
      <div className="pt-12">
        <span className="text-white text-3xl font-bold">Danny</span>
        <div className="py-6">
          <Image
            className="rounded-full"
            src={Profile}
            alt="Profile Pic"
            width={130}
            height={130}
          />
        </div>
      </div>

      <ul className="text-2xl">
        <li className="py-2">About</li>
        <li className="py-2">My Skills</li>
        <li className="py-2">Work</li>
        <li className="py-2">Contact</li>
        <li className="py-2">Blog</li>
      </ul>

      <div className="">
        Socials
      </div>
    </div>
  );
};

export default Sidebar;
