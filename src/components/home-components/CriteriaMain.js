import React from "react";
import { Link } from "react-router-dom";

const CriteriaMain = ({ criteriaRef, activeIndex }) => {
  return (
    <div ref={criteriaRef} className="criteria-main introduction-main">
      <img
        src="/images/Purple-Lens-Flare-PNG-cateria-repo.svg"
        alt=""
        className="lens-criteria-repo"
      />
      <img
        src="/images/Purple-Lens-Flare-PNG-cateria-repo-2.svg"
        alt=""
        className="lens-criteria-repo-2"
      />
      <img
        src="/images/Purple-Lens-Flare-creteria-PNG.svg"
        alt=""
        className="len"
      />
      <img
        src="/images/Purple-Lens-Flare-criteria-2-PNG.svg"
        alt=""
        className="len-2"
      />
      <div className="left-container">
        <img src="/images/stars/star pu.svg" alt="" className="stars" />
        <img src="/images/stars/star (1).svg" alt="" className="stars-2" />
        <img src="/images/stars/star.svg" alt="" className="stars-3" />
        <img src="/images/Ellipse 2.svg" alt="" className="ellipse" />
        <img
          src="/images/8046554 1.svg"
          alt=""
          className={`vector left-vector-animation ${
            activeIndex === 4 ? "animate" : "remove"
          }`}
        />
      </div>
      <div className="right-container">
        <h2
          className={`scroll-animation ${
            activeIndex === 4 ? "animate" : "remove"
          }`}
        >
          Judging Criteria
          <br />
          <span>Key attributes</span>
        </h2>
        <div className="content">
          <p>
            <span>Innovation and Creativity</span>: Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </p>
          <p>
            <span>Functionality</span>: Assess how well the solution works. Does
            it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </p>
          <p>
            <span>Impact and Relevance</span>: Determine the potential impact of
            the solution in the real world. Does it address a significant
            problem, and is it relevant to the target audience? Judges would
            assess the potential social, economic, or environmental benefits.
          </p>
          <p>
            <span>Technical Complexity</span>: Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </p>
          <p>
            <span>Adherence to Hackathon Rules</span>: Judges will Ensure that
            the team adhered to the rules and guidelines of the hackathon,
            including deadlines, use of specific technologies or APIs, and any
            other competition-specific requirements.
          </p>
          <Link className="btn">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default CriteriaMain;
