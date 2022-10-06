import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="text-white bg-gray-900  py-6 px-4 ">
  

        <div className="flex mt-4">
        <Link href="/">
          <a className="mr-6 text-red-300">Home</a>
        </Link>
        <Link href="about/">
          <a className="mr-6 text-red-300">About</a>
        </Link>
        <Link href="/work">
          <a className="mr-6 text-red-300">Work</a>
        </Link>
        <Link href="/skills">
          <a className="mr-6 text-red-300">Skills</a>
        </Link>
        <Link href="/contact">
          <a className="mr-6 text-red-300">Contact</a>
        </Link>
        <Link href="/blog">
          <a className="mr-6 text-red-300">Blog</a>
        </Link>
        </div>
     
    </nav>
  );
};

export default Navbar;
