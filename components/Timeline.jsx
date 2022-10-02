import React from "react";
import $ from "jquery";
import Image from 'next/image'
import HTML from '../public/icons8-html-5.svg'
import CSS from '../public/icons8-css3.svg'
import JAVASCRIPT from '../public/icons8-javascript.svg'
import TYPESCRIPT from '../public/icons8-typescript.svg'
import REACT from '../public/icons8-react.svg'
import REDUX from '../public/icons8-redux.svg'
import NEXTJS from '../public/icons8-next.js.svg'
import PYTHON from '../public/icons8-python.svg'
import NODEJS from '../public/icons8-node-js.svg'
import MONGODB from '../public/icons8-mongodb.svg'
import MYSQL from '../public/icons8-my-sql.svg'
import POSTGRES from '../public/icons8-postgresql.svg'
import ETHEREUM from '../public/icons8-ethereum (1).svg'
import SOLIDITY from '../public/icons8-solidity-48.svg'
import TRUFFLE from '../public/truffle-seeklogo.com.svg'
import GANACHE from '../public/ganache-seeklogo.com.svg'
import ETHERSJS from '../public/ethers-seeklogo.com.svg'
import FIGMA from '../public/icons8-figma.svg'
import PHOTOSHOP from '../public/icons8-adobe-photoshop.svg'
import VS from '../public/icons8-visual-studio-code-2019.svg'
import GC from '../public/icons8-chrome-48.png'
import JEST from '../public/jest-logo-F9901EBBF7-seeklogo.com.png'
import GIT from '../public/icons8-git.svg'



export const Timeline = () => {
  const changeClass = (e) => {
    const classnames = e.target.className.split(' ')
    const step1 = "step01"
    const step2 = "step02"
    const step3 = "step03"
    const step4 = "step04";
    const step5 = "step05";
    console.log((classnames[1]));

    $(".step").click(function () {
      $(this).addClass("active").prevAll().addClass("active");
      $(this).nextAll().removeClass("active");
    });

    switch (classnames[1]) {
      case step1:
        $("#line-progress").css("width", "3%");
        $(".front-end").addClass("active").siblings().removeClass("active");
        break;
      case step2:
        $("#line-progress").css("width", "25%");
        $(".back-end").addClass("active").siblings().removeClass("active");
        break;
      case step3:
        $("#line-progress").css("width", "50%");
        $(".web-three").addClass("active").siblings().removeClass("active");
        break;
      case step4:
        $("#line-progress").css("width", "75%");
        $(".design").addClass("active").siblings().removeClass("active");
        break;
      case step5:
        $("#line-progress").css("width", "100%");
        $(".soft-skills").addClass("active").siblings().removeClass("active");
        break;
      default:
        return;
    }

  
  };

  return (
    <>
      <div className="progress-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li className="step step01 active" onClick={(e) => changeClass(e)}>
              <div className="step-inner">FRONT END</div>
            </li>
            <li className="step step02"  onClick={(e) => changeClass(e)}>
              <div className="step-inner ">BACK END</div>
            </li>
            <li className="step step03 " onClick={changeClass}>
              <div className="step-inner">WEB3</div>
            </li>
            <li className="step step04"  onClick={(e) => changeClass(e)}>
              <div className="step-inner">TOOLS / DESIGN</div>
            </li>
            <li className="step step05"  onClick={(e) => changeClass(e)}>
              <div className="step-inner">SOFT SKILLS</div>
            </li>
          </ul>
          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>
        <div id="progress-content-section" className="border-2 border-red-300" >
          <div className="section-content front-end active  bg-gray-900 rounded-lg">
            <h2>FRONT END</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
            <div className="p-4">
              <Image src={HTML} alt="html"/>
              <Image src={CSS} alt="css"/>
              <Image src={JAVASCRIPT} alt="javascript"/>
              <Image src={TYPESCRIPT} alt="typescript"/>
              <Image src={REACT} alt="react"/>
              <Image src={REDUX} alt="redux"/>
              <Image src={NEXTJS} alt="nextjs"/>
            </div>
          </div>

          <div className="section-content back-end bg-gray-900 rounded-lg">
            <h2>BACKEND</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
            <div className="p-4">
              <Image src={PYTHON} alt="python"/>
              <Image src={NODEJS} alt="nodejs"/>
              <Image src={MONGODB} alt="mongodb"/>
              <Image src={MYSQL} alt="mysql"/>
              <Image src={POSTGRES} alt="postgres"/>
            </div>
          </div>

          <div className="section-content web-three bg-gray-900 rounded-lg">
            <h2>WEB3 / BLOCKCHAIN</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
            <div className="p-4">
              <Image src={SOLIDITY} alt="solidity"/>
              <Image src={ETHEREUM} alt="ethereum"/>
              <Image src={ETHERSJS} alt="ethers"/>
              <Image src={GANACHE} alt="ganache"/>
              <Image src={TRUFFLE} alt="truffle"/>
            </div>
          </div>

          <div className="section-content design bg-gray-900 rounded-lg">
            <h2>TOOLS / DESIGN</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
            <div className="p-4">
              <Image src={FIGMA} alt="figma"/>
              <Image src={PHOTOSHOP} alt="photoshop"/>
              <Image src={VS} alt="visual studio code"/>
              <Image src={GC} alt="chrome dev tools"/>
              <Image src={JEST} height={44} width={44} alt="jest"/>
              <Image src={GIT} alt="git"/>
            
            </div>
          </div>

          <div className="section-content soft-skills bg-gray-900 rounded-lg">
            <h2>SOFT SKILLS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
            <div className="p-4">
              <Image src={HTML} alt="html"/>
              <Image src={CSS} alt="css"/>
              <Image src={JAVASCRIPT} alt="javascript"/>
              <Image src={TYPESCRIPT} alt="typescript"/>
              <Image src={REACT} alt="react"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
