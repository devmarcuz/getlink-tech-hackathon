import React from "react";

const RulesMain = ({ rulesRef, activeIndex }) => {
  return (
    <div ref={rulesRef} className={`rules-main`}>
      <img src="/images/stars/star.svg" alt="" className="star-repo" />
      <img
        src="/images/Purple-Lens-Flare-PNG-intro-repo.svg"
        alt=""
        className="lens-rules-repo"
      />
      <img
        src="/images/Purple-lens-flare-rules-PNG.svg"
        alt=""
        className="lens-main"
      />
      <img
        src="/images/Purple-Lens-Flare -rules-main-2-PNG.svg"
        alt=""
        className="lens-main-2"
      />

      <div className="left-container">
        <img src="/images/stars/star (1).svg" alt="" className="star" />
        <img src="/images/stars/star.svg" alt="" className="star-2" />
        <h2
          className={`scroll-animation ${
            activeIndex === 1 ? "animate" : "remove"
          }`}
        >
          Rules and <br />
          <span>Guidelines</span>
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
      <div className="right-container">
        <img
          src="/images/7450159 1.svg"
          alt=""
          className={`vector right-vector-animation ${
            activeIndex === 1 ? "animate" : "remove"
          }`}
        />
      </div>
    </div>
  );
};

export default RulesMain;
