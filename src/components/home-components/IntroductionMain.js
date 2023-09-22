import React from "react";

const IntroductionMain = ({ introductionRef, activeIndex }) => {
  return (
    <div className="introduction-main" ref={introductionRef}>
      <div className="left-container">
        <img src="/images/stars/sata gra.svg" alt="" className="star" />
        <img
          src="/images/The big idea.svg"
          alt=""
          className={`bulb left-vector-animation ${
            activeIndex === 0 ? "animate" : "remove"
          }`}
        />
        <img src="/images/arrow.svg" alt="" className="arrow" />
      </div>
      <div className="right-container">
        <img src="/images/stars/star pu.svg" alt="" className="star" />
        <h2
          className={`scroll-animation ${
            activeIndex === 0 ? "animate" : "remove"
          }`}
        >
          Introduction to getlinked <br /> <span>tech Hackathon 1.0</span>
        </h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
};

export default IntroductionMain;
