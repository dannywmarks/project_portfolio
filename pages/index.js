import Head from "next/head";
import { Hero, Projects, About, SkillsAndXP } from "../components";

export default function Home() {
  return (
    <div className="container mx-auto px-10">
      <Hero />
      <div className="work_box" >
        <Projects id="work_small"/>
        <div id="work_big">WORK</div>
      </div>
      <div className="work_box h-screen" >
        <SkillsAndXP id="work_small"/>
        <div id="work_big">SKILLS</div>
      </div>
    </div>
  );
}
