import React, { useState, useRef } from "react";

export const Timeline = () => {
  const [active, setActive] = useState(false);
  const step01 = useRef();
  const step02 = useRef();
  const step03 = useRef();
  const step04 = useRef();
  const step05 = useRef();

  const changeClass = () => {
    const li = step01.current;
    
  }  
  
  console.log(step01)

  return (

    <>
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li className="step step01" onClick={() => console.log("click")} ref={step01}>
              <div className="step-inner">FRONTEND</div>
            </li>
            <li
              className="step step02 active"
              onClick={() => console.log("click")}
            >
              <div className="step-inner">BACKEND</div>
            </li>
            <li className="step step03 " onClick={() => console.log("click")}>
              <div className="step-inner">WEB3</div>
            </li>
            <li className="step step04 " onClick={() => console.log("click")}>
              <div className="step-inner">DESIGN</div>
            </li>
            <li className="step step05 " onClick={() => console.log("click")}>
              <div className="step-inner">SOFTSKILLS</div>
            </li>
          </ul>
          <div id="line">
            <div id="line-process"></div>
          </div>
        </div>
        <div id="progress-content-section">
          <div className="section-content discovery">
            <h2>HOME SECTION</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
          </div>

          <div className="section-content strategy active">
            <h2>GALLERY SECTION</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
          </div>

          <div className="section-content creative">
            <h2>CREATIVE CREATIONS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
          </div>

          <div className="section-content production">
            <h2>TESTIMONIALS NOW</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
          </div>

          <div className="section-content analysis">
            <h2>OUR LOCATIONS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minima illum ullam omnis, assumenda cupiditate repellendus
              voluptatem nemo ipsum quas doloribus quis magni numquam
              reprehenderit vitae porro consequuntur veniam! Nulla totam eveniet
              possimus error? Reprehenderit aperiam ipsa fugit nam
              necessitatibus?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
