import React from "react";
import Image from "next/image";
import ProfilePic from "../public/profile_pic.svg";
import { Card2 } from "../components";

const About = () => {
  return (
    <div className="text-white grid md:grid-cols-2 gap-2">
      <div className="text-xl">
        <p className="font-pencil text-xl text-red-200 font-bold my-2">
          &lt;h1&gt;
        </p>
        <h1 className="text-[6rem] font-bold font-script py-8">About</h1>
        <p className="font-pencil text-xl text-red-200 font-bold my-2">
          &lt;/h1&gt;
        </p>
        <p className="font-pencil text-xl text-red-200 font-bold my-2">
          &lt;p&gt;
        </p>
        <p>
          I’m a Full-Stack Developer located in the Bay Area. I have a serious
          passion for UI effects, animations and creating intuitive, dynamic
          user experiences.
        </p>
        <br />
        <p>
          Well-organised person, problem solver, independent employee with high
          attention to detail. Fan of MMA, outdoor activities, TV series and
          English literature. A family person and father of two fractious boys,
        </p>
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
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
      </div>
    </div>
  );
};

export default About;
