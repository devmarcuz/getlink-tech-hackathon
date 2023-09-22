import React from "react";

const SponsorsMain = ({ sponsorIndex, sponsorsRef }) => {
  return (
    <div ref={sponsorsRef} className="sponsors-main">
      <img
        src="/images/Purple-Lens-Flare-partners-PNG.svg"
        alt=""
        className="len"
      />
      <img
        src="/images/Purple-Lens-Flare-PNG-sponsor-repo.svg"
        alt=""
        className="lens-sponsor-repo"
      />
      <img
        src="/images/Purple-Lens-Flare-PNG-sponsor-repo-2.svg"
        alt=""
        className="lens-sponsor-repo-2"
      />
      <img
        src="/images/Purple-Lens-Flare-partners-2-PNG.svg"
        alt=""
        className="len-2"
      />
      <div className="title">
        <h2
          className={`scroll-animation ${sponsorIndex ? "animate" : "remove"}`}
        >
          Partners and Sponsors
        </h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="partners">
        <img src="/images/stars/star pu.svg" alt="" className="star" />
        <img src="/images/stars/sata gra.svg" alt="" className="star-2" />
        <img src="/images/stars/star.svg" alt="" className="star-3" />

        <img
          src="/images/Partner and sponsors section.svg"
          alt=""
          className="vector"
        />
      </div>
    </div>
  );
};

export default SponsorsMain;
