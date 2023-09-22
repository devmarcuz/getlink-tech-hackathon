import React from "react";
import { Link } from "react-router-dom";

const PrivacyMain = ({ privacyIndex, privacyRef }) => {
  return (
    <div ref={privacyRef} className="privacy-main">
      <img
        src="/images/Purple-Lens-Flare-footer-PNG.svg"
        alt=""
        className="len"
      />
      <img
        src="/images/Purple-Lens-Flare-PNG-privacy-repo.svg"
        alt=""
        className="lens-privacy-repo"
      />
      <div className="left-container">
        <img src="/images/stars/star pu.svg" alt="" className="star-3" />

        <div className="title">
          <img src="/images/stars/star (1).svg" alt="" className="star" />
          <img src="/images/stars/star pu.svg" alt="" className="star-2" />
          <h2
            className={`scroll-animation ${
              privacyIndex ? "animate" : "remove"
            }`}
          >
            Privacy Policy and <br />
            <span>Terms</span>
          </h2>
          <p className="text">Last updated on September 12, 2023</p>
          <p className="text-normal">
            Below are our privacy & policy, which outline a lot of goodies.
            <br />
            it’s our aim to always take of our participant
          </p>
          <p className="text-repo">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        <div className="body">
          <img src="/images/Rectangle 24.svg" alt="" className="filter" />
          <div className="content">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </div>
          <div className="license-container">
            <h2>Licensing Policy</h2>
            <p className="text">Here are terms of our Standard License:</p>
            <div className="lists">
              <div className="list">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path
                    d="M5 8L7 10.5L13.5 6"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="list">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path
                    d="M5 8L7 10.5L13.5 6"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
            <Link className="btn">Read More</Link>
          </div>
        </div>
      </div>
      <div className="right-container">
        <img src="/images/stars/star.svg" alt="" className="star" />
        <img src="/images/stars/sata gra.svg" alt="" className="star-2" />
        <img src="/images/stars/star (1).svg" alt="" className="star-3" />
        <img src="/images/stars/star.svg" alt="" className="star-4" />
        <img src="/images/Vector.svg" alt="" className="vector" />
        <img
          src="/images/08 1.svg"
          alt=""
          className={`lock right-vector-animation ${
            privacyIndex ? "animate" : "remove"
          }`}
        />
      </div>
    </div>
  );
};

export default PrivacyMain;
