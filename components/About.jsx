import React from "react";
import Image from "next/image";
import ProfilePic from "../public/profile_pic.svg";
import { BlogCard } from "../components";
import {
  moneyShot,
  springBoard,
  web3,
  musicAndMartialArts,
} from "../utils/constants";

const About = () => {
  const { image1, image2, image3, image4, image5 } = springBoard;
  const { image6, image7, image8, image9, image10 } = moneyShot;
  const { image11, image12, image13, image14, image15 } = web3;
  const { image16, image17, image18, image19, image20} = musicAndMartialArts

  return (
    <div className="mt-40">
      <div className="flex items-center mb-2">
        <p className="font-pencil text-xl text-red-200 font-bold ">
          &lt;h1&gt;
        </p>
        <h1 className="text-[4rem] font-bold font-script text-white ml-2 ">
          My Journey
        </h1>
        <p className="font-pencil text-xl text-red-200 font-bold ">
          &lt;/h1&gt;
        </p>
        
      </div>
      <div className="flex">
      <p className="font-pencil text-xl text-red-200 font-bold ">
          &lt;p&gt;
        </p>
        <p className="text-[2rem] text-gray-400 mb-8 font-bold ">
          about me{" "}
        </p>
        <p className="font-pencil text-xl text-red-200 font-bold">
          &lt;/p&gt;
        </p>
      </div>

      <div className="text-white grid md:grid-cols-2 md:gap-2 xl:gap-8">
        <div>
          <div className="">
            <BlogCard
              desc={moneyShot.desc}
              author={moneyShot.author}
              date={moneyShot.date}
              title={moneyShot.title}
              image1={image6}
              image2={image9}
              image3={image7}
              image4={image8}
              image5={image10}
            />
                <BlogCard
              desc={web3.desc}
              author={web3.author}
              date={web3.date}
              title={web3.title}
              image1={image11}
              image2={image12}
              image3={image13}
              image4={image14}
              image5={image15}
            />
          
          </div>
          {/* <p className="font-pencil text-xl text-red-200 font-bold mt-4">
            &lt;p&gt;
          </p>

          <p>
            I am passionate about building things digitally that interact and compliment
            the world physically. I started my journey in the tech industry in
            early 2013 with an IOS app named Money Shot. Money Shot started as
            an idea drawn on a napkin, bootstrapped and personally designed, and
            brought to life, finding its way to both the IOS and Android stores.
            I had zero experience in tech and worked with a development firm to
            create my idea. My passion project eventually ran out of momentum
            due to a lack of resources. I left feeling frustrated and
            unsatisfied that development stopped due to finances. The pain and
            frustration of failing lit a fire inside of me to learn how to
            create and develop on my own.
          </p>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/p&gt;
          </p>
          <p className="font-pencil text-xl text-red-200 font-bold mt-4">
            &lt;p&gt;
          </p>
          <p>
            Over the years, I’ve cultivated my passion for coding through books,
            Udemy courses, and free coding resources found on youtube. Looking
            to take my hobby seriously I joined and completed the Springboard
            software engineering Bootcamp, which I specifically chose due to its
            heavy focus on building a foundation with both the Javascript and
            Python languages. The free resources served their purpose, but 
            without a clear structured path it became hard to see the forest through the trees.
          
          </p>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/p&gt;
          </p>4
          <br />
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
          </p>
          <br />
          <p>Lets make something special</p>
          <p className="font-pencil text-xl text-red-200 font-bold my-2">
            &lt;/p&gt;
          </p> */}
        </div>
        <div>
          <div>
          
              <BlogCard
              desc={springBoard.desc}
              author={springBoard.author}
              date={springBoard.date}
              title={springBoard.title}
              image1={image1}
              image2={image2}
              image3={image3}
              image4={image4}
              image5={image5}
            />
              <BlogCard
              desc={musicAndMartialArts.desc}
              author={musicAndMartialArts.author}
              date={musicAndMartialArts.date}
              title={musicAndMartialArts.title}
              image1={image16}
              image2={image17}
              image3={image18}
              image4={image19}
              image5={image20}
            />
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
