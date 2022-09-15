import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="text-white bg-black w-full flex py-2 px-4 hidden">
      <p className="font-bold text-3xl">D W M</p>
      <Link href="/">
        <div>
          <Image src="" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
