import React from "react";
import Image from "next/image";
import ProfilePic from "../public/profile_pic.svg";
import { BlogCard } from "../components";
import { moneyShot} from '../utils/constants'

const About = () => {
  const { image1, image2, image3, image4, image5} = moneyShot

  return (
    <div>
      <div className="text-white grid md:grid-cols-2 gap-12">
        <div className="text-xl">
          <p className="font-pencil text-xl text-red-200 font-bold mb-10">
            &lt;h1&gt;
          </p>
          <h1 className="text-[6rem] font-bold font-script text-white ml-2 ">
            About
          </h1>
          <p className="font-pencil text-xl text-red-200 font-bold mt-10">
            &lt;/h1&gt;
          </p>
          <p className="font-pencil text-xl text-red-200 font-bold mt-4">
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
            Python languages.
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
          </p>
        </div>
        <div>
          <div>
            
            <BlogCard image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
