import Head from "next/head";
import { Hero, Projects, About, SkillsAndXP, Contact } from "../components";

export default function Home() {
  return (
    <div className="mx-auto container px-8  mb-8  ">
      <Head>
        <title>Danny Marks Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
      <Hero />
      </div>
   
      <div className="work_box" id="about">
        <About />
        <div className="" id="work_big">
          ME
        </div>
      </div>

      <div className="work_box ">
        <Projects id="work_small" />
        <div className="-z-10" id="work_big">
          WORK
        </div>
      </div>
      <div className="work_box " id="skills">
        <SkillsAndXP id="work_small" />
        <div className="-z-10" id="work_big">
          SKILLS
        </div>
      </div>
      <div className="work_box ">
        <Contact id="work_small" />
        <div className="-z-10" id="work_big">
          MAIL
        </div>
      </div>
    </div>
  );
}
