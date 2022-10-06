import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Profile from "../public/profile_pic.svg";
import { SocialIcon } from "react-social-icons";
import Resume from "../public/curriculum-resume-svgrepo-com.svg";
import Blog from "../public/blog-icon.svg";

const SideBar2 = () => {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const isActiveLink = "py-2 border-t border-b text-red-300";
  const notActiveLink = "py-2 border-t border-b hover:text-red-300 text-white ";
  return (
    <div className="h-screen">
   
      <div
        className={`duration-500 ease-in-out relative bg-gray-900 p-5 pt-8 ${
          open ? "w-60" : "w-20 flex flex-col h-full justify-between "
        }`}
      >
        <BsArrowLeftShort
          className={`bg-white text-gray-900 text-3xl rounded-full absolute -right-3 top-9 border ${
            !open && "rotate-180 -right-4"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-col h-full justify-around duration-500">
          <div className="flex flex-col items-center duration-500">
            <p
              className={`${
                open
                  ? "text-[4rem] font-bold cursor-pointer text-red-300 font-poppins mx-auto"
                  : "flex flex-col h-full text-red-300 font-poppins font-bold text-4xl mb-4 -mt-2"
              }`}
            >
              <span className="text-white mx-auto ">D</span>W
              <span className="text-gray-600 -mt-1">M</span>
            </p>
            <div>
              <Link href="/">
                <Image src={Profile} alt="profile" width={100} height={100} />
              </Link>
            </div>

            {open ? (
              <div>
                {" "}
                <div className="py-4">
                  <p className="text-white text-2xl font-bold font-script text-center">
                    Danny W. Marks
                  </p>
                  <span className="text-center text-white font-poppins">
                    Full Stack Developer
                  </span>
                </div>
                <div
                  className={`${
                    open
                      ? "flex justify-center"
                      : "ease-in-out duration-300 hidden"
                  } `}
                >
                  <a
                    href="../public/assets/DMR.pdf"
                    className="text-[1.5rem] outline px-4 py-2 mt-4 mb-2 font-bold cursor-pointer text-red-300 rounded-full hover:text-black hover:bg-red-200 hover:border-6-black font-poppins"
                    download
                  >
                    Résumé
                  </a>
                </div>{" "}
              </div>
            ) : (
              <div className="mt-4">
                <div className="mt-4">
                  <Image src={Resume} width={64} height={64} />
                </div>
                <div className="mt-2 cursor-pointer">
                  <Link href="/blog">
                    <Image src={Blog} width={64} height={64} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {open ? (
            <ul className="py-12 font-poppins text-2xl w-full text-center ">
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
                className={
                  router.pathname === "/work" ? isActiveLink : notActiveLink
                }
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
                className={
                  router.pathname === "/blog" ? isActiveLink : notActiveLink
                }
              >
                {" "}
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          ) : (
            <div className="invisible 2xl:visible">
              <div className="text-red-300 font-pencil -rotate-90 mt-12 text-3xl">
                Marks
              </div>
              <div className="text-red-300 font-pencil -rotate-90 py-16 text-3xl">
                William
              </div>
              <div className="text-red-300 font-pencil -rotate-90 pl-2 text-3xl">
                Danny
              </div>
            </div>
          )}

          {open ? (
            <div className="h-60 flex justify-around px-4 w-full">
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
          ) : (
            <div className="">
              <div className="duration-300 ease-in-out ">
                <SocialIcon
                  style={{ height: 37, width: 37 }}
                  url="https://linkedin.com/in/dannywmarks"
                  bgColor="#fff"
                />
                <SocialIcon
                  className="mt-4"
                  style={{ height: 37, width: 37 }}
                  url="https://github.com/dannywmarks"
                  bgColor="#fff"
                />
                <SocialIcon
                  className="mt-4 mb-4"
                  style={{ height: 37, width: 37 }}
                  url="mailto:dannywmarks@gmail.com"
                  bgColor="#fff"
                />
              </div>
            </div>
          )}
        </div>
      </div>
     
      
    </div>
  );
};

export default SideBar2;
