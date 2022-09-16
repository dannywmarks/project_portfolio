import Head from "next/head";
import { Hero, Projects, About } from "../components";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="work_box" >
        <Projects id="work_small"/>
        <div id="work_big">WORK</div>
      </div>
    </div>
  );
}
