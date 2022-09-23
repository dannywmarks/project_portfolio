import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Profile from "../public/profile_pic.svg";
import { SocialIcon } from "react-social-icons";
// import resume from '../public/assets/DMR.pdf'

const Sidebar = () => {
  const router = useRouter();

  const isActiveLink = "py-2 border-t border-b text-red-300";
  const notActiveLink = "py-2 border-t border-b hover:text-red-300 text-white";

  return (
    <div className="bg-gray-800 text-white w-50 text-center flex flex-col h-full justify-between ">
      <div className="pt-6 pb-4 bg-gray-900 px-6">
        <p className="text-[4rem] font-bold cursor-pointer text-red-300 font-poppins">
          D<span className="text-white">M</span>
        </p>
        <div className="py-6">
          <Link href="/">
            <Image src={Profile} alt="profile" width={100} height={100} />
          </Link>
        </div>

        <p className="text-white text-2xl font-bold font-script">Danny Marks</p>
        <span className="text-white font-poppins">Full Stack Developer</span>
        <div className="m-6">
          <a
            href="../public/assets/DMR.pdf"
            className="p-6 text-[1.5rem] outline px-4 py-2 mt-4 mb-2 font-bold cursor-pointer text-red-300 rounded-full hover:text-black hover:bg-red-200 hover:border-6-black font-poppins"
            download
          >
            Résumé
          </a>
        </div>
      </div>

      <ul className="text-2xl py-12 font-poppins">
        <li
          className={
            router.pathname === "/about" ? isActiveLink : notActiveLink
          }
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={
            router.pathname === "/skills" ? isActiveLink : notActiveLink
          }
        >
          {" "}
          <Link href="/skills">My Skills</Link>
        </li>
        <li
          className={router.pathname === "/work" ? isActiveLink : notActiveLink}
        >
          {" "}
          <Link href="/work">Work</Link>
        </li>
        <li
          className={
            router.pathname === "/contact" ? isActiveLink : notActiveLink
          }
        >
          {" "}
          <Link href="/contact">Contact</Link>
        </li>
        <li
          className={router.pathname === "/blog" ? isActiveLink : notActiveLink}
        >
          {" "}
          <Link href="/blog">Blog</Link>
        </li>
      </ul>

      <div className="h-60 flex justify-around px-4">
        <SocialIcon
          style={{ height: 45, width: 45 }}
          url="https://linkedin.com/in/dannywmarks"
          bgColor="#fff"
        />
        <SocialIcon
          style={{ height: 45, width: 45 }}
          url="https://github.com/dannywmarks"
          bgColor="#fff"
        />
        <SocialIcon
          style={{ height: 45, width: 45 }}
          url="mailto:dannywmarks@gmail.com"
          bgColor="#fff"
        />
      </div>
    </div>
  );
};

export default Sidebar;