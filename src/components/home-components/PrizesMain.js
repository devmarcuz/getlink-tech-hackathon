import React from "react";

const PrizesMain = ({ prizesIndex, prizesRef }) => {
  return (
    <div ref={prizesRef} className="prizes-main">
      <img
        src="/images/Purple-Lens-Flare-PNG-prizes-repo.svg"
        alt=""
        className="lens-prizes-repo"
      />
      <img
        src="/images/Purple-Lens-Flare-PNG-prizes-repo-2.svg"
        alt=""
        className="lens-prizes-repo-2"
      />
      <img
        src="/images/Purple-Lens-Flare-rewards-PNG.svg"
        alt=""
        className="len"
      />
      <img
        src="/images/Purple-Lens-Flare-rewards-2-PNG.svg"
        alt=""
        className="len-2"
      />
      <div className="filter-dark"></div>
      <div className="header-prizes">
        <img src="/images/stars/star pu.svg" alt="" className="star" />
        <img src="/images/stars/star pu.svg" alt="" className="star-2" />
        <div className="content">
          <h2
            className={`scroll-animation ${prizesIndex ? "animate" : "remove"}`}
          >
            Prizes and <br />
            <span>Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="left-container">
          <img src="/images/stars/starLittle.svg" alt="" className="star" />
          <img src="/images/stars/star.svg" alt="" className="star-2" />
          <img
            src="/images/9486889 1.svg"
            alt=""
            className={`vector left-vector-animation ${
              prizesIndex ? "animate" : "remove"
            }`}
          />
        </div>
        <div className="right-container">
          <img src="/images/stars/star.svg" alt="" className="star" />
          <img src="/images/stars/star.svg" alt="" className="star-2" />
          <img src="/images/stars/star (1).svg" alt="" className="star-3" />
          <img
            src="/images/Rewards.svg"
            alt=""
            className={`vector right-vector-animation ${
              prizesIndex ? "animate" : "remove"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default PrizesMain;
