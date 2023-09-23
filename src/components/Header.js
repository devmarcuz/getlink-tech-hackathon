import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ isFixed, setIsFixed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [bool, setBool] = useState(false);

  return (
    <header className={`${isFixed ? "fixed" : "hidden"}`}>
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="next-page-caret"
        onClick={() => navigate("/")}
      >
        <circle
          cx="11.5"
          cy="11.5"
          r="11"
          stroke="url(#paint0_linear_177_298)"
        />
        <path
          d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
          stroke="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_177_298"
            x1="11.5"
            y1="0"
            x2="11.5"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#903AFF" />
            <stop offset="1" stop-color="#FF26B9" />
          </linearGradient>
        </defs>
      </svg>

      <div className="logo">
        <h2
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/");

            location.pathname !== "/" && setIsFixed(false);
          }}
        >
          get<span>linked</span>
        </h2>
      </div>
      <div className={`nav-container ${bool && "nav-repo"}`}>
        <div className="header-repo">
          <div className="prev-page-caret" onClick={() => setBool(false)}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.5"
                cy="11.5"
                r="11"
                stroke="url(#paint0_linear_181_74)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_181_74"
                  x1="11.5"
                  y1="0"
                  x2="11.5"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#FF26B9" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.22009 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.77991C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765767 10.8871 0.502346 10.6924 0.307617C10.4977 0.112889 10.2342 0.00243378 9.95886 4.1008e-05C9.68348 -0.00235271 9.41818 0.103509 9.22009 0.294824L5.50634 4.00858L1.79259 0.294824C1.5945 0.103509 1.3292 -0.00235271 1.05383 4.1008e-05C0.778448 0.00243378 0.515027 0.112889 0.320299 0.307617C0.12557 0.502346 0.0151142 0.765767 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.77991L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z"
                fill="#F8F8F8"
              />
            </svg>
          </div>
        </div>
        <ul>
          <li>
            <Link
              to="/?section=timeline"
              className={`${
                location.search === "?section=timeline" && "active"
              }`}
              onClick={() => {
                setIsFixed(false);
                setBool(false);
              }}
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              to="/?section=introductions"
              className={`${
                location.search === "?section=introductions" && "active"
              }`}
              onClick={() => {
                setIsFixed(false);
                setBool(false);
              }}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              to="/?section=questions"
              className={`${
                location.search === "?section=questions" && "active"
              }`}
              onClick={() => {
                setIsFixed(false);
                setBool(false);
              }}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${location.pathname === "/contact" && "active"}`}
              onClick={() => {
                setBool(false);
                location.pathname !== "/contact" &&
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                location.pathname !== "/contact" && setIsFixed(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          to={"/register"}
          onClick={() => {
            setBool(false);
            location.pathname !== "/register" &&
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            location.pathname !== "/register" && setIsFixed(false);
          }}
          className={` ${
            location.pathname === "/register" ? "btn-register" : "btn"
          }`}
        >
          Register
        </Link>
      </div>
      <img
        src="/images/menu.svg"
        alt=""
        className="bar"
        onClick={() => setBool(true)}
      />
    </header>
  );
};

export default Header;
