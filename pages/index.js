import Head from "next/head";
import { Hero, Projects, About } from "../components";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Projects />
    </div>
  );
}
