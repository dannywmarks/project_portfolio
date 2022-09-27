import Head from "next/head";
import { Hero, Projects, About, SkillsAndXP, Contact } from "../components";

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Danny Marks Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="work_box container mt-20">
        <About />
        <div className="" id="work_big">
          ME
        </div>
      </div>
      <div className="work_box container">
        <div className="work_box container">
          <Projects id="work_small" />
          <div className="-z-10" id="work_big">
            WORK
          </div>
        </div>
        <div className="work_box container ">
          <SkillsAndXP id="work_small" />
          <div className="-z-10" id="work_big">
            SKILLS
          </div>
        </div>

        <Contact id="work_small" />
        <div className="-z-10" id="work_big">
          MAIL
        </div>
      </div>
    </div>
  );
}
