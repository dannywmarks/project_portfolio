import Head from "next/head";
import { Hero, Projects, About, SkillsAndXP, Contact } from "../components";

export default function Home() {
  return (
    <div className="container mx-auto px-10">
      <Hero />
      <div className="work_box " >
        <SkillsAndXP id="work_small"/>
        <div className="-z-10" id="work_big">SKILLS</div>
      </div>
      <div className="work_box" >
        <Projects id="work_small"/>
        <div className="-z-10" id="work_big">WORK</div>
      </div>
     
      <div className="work_box" >
        <About />
        <div className="" id="work_big">ME</div>
      </div>
      <div className="work_box" >
        <Contact id="work_small"/>
        <div className="-z-10" id="work_big">MAIL</div>
      </div>
    </div>
  );
}
