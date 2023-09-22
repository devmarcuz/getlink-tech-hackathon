import React from "react";

const TimelineMain = ({ timelineRef, activeIndex }) => {
  return (
    <div ref={timelineRef} className="timeline-main">
      <img src="/images/stars/star pu.svg" alt="" className="star" />
      <img src="/images/stars/star (1).svg" alt="" className="star-2" />
      <img src="/images/stars/star.svg" alt="" className="star-3" />
      <div className="title">
        <h1
          className={`scroll-animation ${
            activeIndex === 7 ? "animate" : "remove"
          }`}
        >
          Timeline
        </h1>
        <p>
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </p>
      </div>

      <div className="container">
        <div className="contain">
          <div className="content">
            <h2>Hackathon Announcement</h2>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="separator">
            <svg
              width="4"
              height="137"
              viewBox="0 0 4 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="8.74228e-08"
                x2="1.99999"
                y2="137"
                stroke="#D434FE"
                stroke-width="4"
              />
            </svg>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ball"
            >
              <rect
                width="53"
                height="53"
                rx="26.5"
                fill="url(#paint0_linear_12_76)"
              />
              <path
                d="M24.528 35V19.64L26.208 21.32H21.168V18.2H28.416V35H24.528Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_12_76"
                  x1="53"
                  y1="0"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="content">
            <h2>November 18, 2023</h2>
            <div className="empty"></div>
          </div>
        </div>
        <div className="contain">
          <div className="content">
            <h2>November 18, 2023</h2>
            <div className="empty"></div>
          </div>
          <div className="separator">
            <svg
              width="4"
              height="86"
              viewBox="0 0 4 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="8.74228e-08"
                x2="2"
                y2="86"
                stroke="#D434FE"
                stroke-width="4"
              />
            </svg>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ball-2"
            >
              <rect
                width="53"
                height="53"
                rx="26.5"
                fill="url(#paint0_linear_12_78)"
              />
              <path
                d="M21.792 35V32.48L28.272 26.36C28.784 25.896 29.16 25.48 29.4 25.112C29.64 24.744 29.8 24.408 29.88 24.104C29.976 23.8 30.024 23.52 30.024 23.264C30.024 22.592 29.792 22.08 29.328 21.728C28.88 21.36 28.216 21.176 27.336 21.176C26.632 21.176 25.976 21.312 25.368 21.584C24.776 21.856 24.272 22.28 23.856 22.856L21.024 21.032C21.664 20.072 22.56 19.312 23.712 18.752C24.864 18.192 26.192 17.912 27.696 17.912C28.944 17.912 30.032 18.12 30.96 18.536C31.904 18.936 32.632 19.504 33.144 20.24C33.672 20.976 33.936 21.856 33.936 22.88C33.936 23.424 33.864 23.968 33.72 24.512C33.592 25.04 33.32 25.6 32.904 26.192C32.504 26.784 31.912 27.448 31.128 28.184L25.752 33.248L25.008 31.832H34.488V35H21.792Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_12_78"
                  x1="53"
                  y1="0"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="content">
            <h2>Teams Registration begins</h2>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
        </div>
        <div className="contain">
          <div className="content">
            <h2>Teams Registration ends</h2>
            <p>Interested Participants are no longer Allowed to register</p>
          </div>
          <div className="separator">
            <svg
              width="4"
              height="86"
              viewBox="0 0 4 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="8.74228e-08"
                x2="2"
                y2="86"
                stroke="#D434FE"
                stroke-width="4"
              />
            </svg>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ball-2"
            >
              <rect
                width="53"
                height="53"
                rx="26.5"
                fill="url(#paint0_linear_12_85)"
              />
              <path
                d="M27.384 35.288C26.216 35.288 25.056 35.136 23.904 34.832C22.752 34.512 21.776 34.064 20.976 33.488L22.488 30.512C23.128 30.976 23.872 31.344 24.72 31.616C25.568 31.888 26.424 32.024 27.288 32.024C28.264 32.024 29.032 31.832 29.592 31.448C30.152 31.064 30.432 30.536 30.432 29.864C30.432 29.224 30.184 28.72 29.688 28.352C29.192 27.984 28.392 27.8 27.288 27.8H25.512V25.232L30.192 19.928L30.624 21.32H21.816V18.2H33.576V20.72L28.92 26.024L26.952 24.896H28.08C30.144 24.896 31.704 25.36 32.76 26.288C33.816 27.216 34.344 28.408 34.344 29.864C34.344 30.808 34.096 31.696 33.6 32.528C33.104 33.344 32.344 34.008 31.32 34.52C30.296 35.032 28.984 35.288 27.384 35.288Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_12_85"
                  x1="53"
                  y1="0"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="content">
            <h2>November 18, 2023</h2>
            <div className="empty"></div>
          </div>
        </div>
        <div className="contain">
          <div className="content">
            <h2>November 18, 2023</h2>
            <div className="empty"></div>
          </div>
          <div className="separator">
            <svg
              width="4"
              height="86"
              viewBox="0 0 4 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="8.74228e-08"
                x2="2"
                y2="86"
                stroke="#D434FE"
                stroke-width="4"
              />
            </svg>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ball-2"
            >
              <rect
                width="53"
                height="53"
                rx="26.5"
                fill="url(#paint0_linear_12_93)"
              />
              <path
                d="M21.744 31.472V28.856L29.664 18.2H33.744L25.992 28.856L24.096 28.304H37.32V31.472H21.744ZM30.792 35V31.472L30.912 28.304V25.16H34.584V35H30.792Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_12_93"
                  x1="53"
                  y1="0"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="content">
            <h2>Announcement of the accepted teams and ideas</h2>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </div>
        <div className="contain">
          <div className="content">
            <h2>Getlinked Hackathon 1.0 Offically Begins</h2>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className="separator">
            <svg
              width="4"
              height="86"
              viewBox="0 0 4 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="8.74228e-08"
                x2="2"
                y2="86"
                stroke="#D434FE"
                stroke-width="4"
              />
            </svg>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ball-2"
            >
              <rect
                width="53"
                height="53"
                rx="26.5"
                fill="url(#paint0_linear_29_10)"
              />
              <path
                d="M26.648 34.288C25.48 34.288 24.32 34.136 23.168 33.832C22.032 33.512 21.056 33.064 20.24 32.488L21.776 29.512C22.416 29.976 23.152 30.344 23.984 30.616C24.832 30.888 25.688 31.024 26.552 31.024C27.528 31.024 28.296 30.832 28.856 30.448C29.416 30.064 29.696 29.528 29.696 28.84C29.696 28.408 29.584 28.024 29.36 27.688C29.136 27.352 28.736 27.096 28.16 26.92C27.6 26.744 26.808 26.656 25.784 26.656H21.488L22.352 17.2H32.6V20.32H23.744L25.76 18.544L25.16 25.288L23.144 23.512H26.696C28.36 23.512 29.696 23.744 30.704 24.208C31.728 24.656 32.472 25.272 32.936 26.056C33.4 26.84 33.632 27.728 33.632 28.72C33.632 29.712 33.384 30.632 32.888 31.48C32.392 32.312 31.624 32.992 30.584 33.52C29.56 34.032 28.248 34.288 26.648 34.288Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_29_10"
                  x1="53"
                  y1="0"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="content">
            <h2>November 18, 2023</h2>
            <div className="empty"></div>
          </div>
        </div>
        <div className="contain">
          <div className="content">
            <h2>November 18, 2023</h2>
            <div className="empty"></div>
          </div>
          <div className="separator">
            <svg
              width="4"
              height="86"
              viewBox="0 0 4 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="8.74228e-08"
                x2="2"
                y2="86"
                stroke="#D434FE"
                stroke-width="4"
              />
            </svg>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ball-2"
            >
              <rect
                width="53"
                height="53"
                rx="26.5"
                fill="url(#paint0_linear_52_3)"
              />
              <path
                d="M28.448 34.288C26.912 34.288 25.576 33.968 24.44 33.328C23.32 32.688 22.456 31.752 21.848 30.52C21.24 29.288 20.936 27.768 20.936 25.96C20.936 24.024 21.296 22.384 22.016 21.04C22.752 19.696 23.76 18.672 25.04 17.968C26.336 17.264 27.824 16.912 29.504 16.912C30.4 16.912 31.256 17.008 32.072 17.2C32.888 17.392 33.592 17.68 34.184 18.064L32.744 20.92C32.28 20.6 31.784 20.384 31.256 20.272C30.728 20.144 30.176 20.08 29.6 20.08C28.144 20.08 26.992 20.52 26.144 21.4C25.296 22.28 24.872 23.584 24.872 25.312C24.872 25.6 24.872 25.92 24.872 26.272C24.888 26.624 24.936 26.976 25.016 27.328L23.936 26.32C24.24 25.696 24.632 25.176 25.112 24.76C25.592 24.328 26.16 24.008 26.816 23.8C27.488 23.576 28.224 23.464 29.024 23.464C30.112 23.464 31.088 23.68 31.952 24.112C32.816 24.544 33.504 25.152 34.016 25.936C34.544 26.72 34.808 27.64 34.808 28.696C34.808 29.832 34.52 30.824 33.944 31.672C33.384 32.504 32.624 33.152 31.664 33.616C30.72 34.064 29.648 34.288 28.448 34.288ZM28.232 31.384C28.776 31.384 29.256 31.288 29.672 31.096C30.104 30.888 30.44 30.592 30.68 30.208C30.92 29.824 31.04 29.384 31.04 28.888C31.04 28.12 30.776 27.512 30.248 27.064C29.736 26.6 29.048 26.368 28.184 26.368C27.608 26.368 27.104 26.48 26.672 26.704C26.24 26.912 25.896 27.208 25.64 27.592C25.4 27.96 25.28 28.392 25.28 28.888C25.28 29.368 25.4 29.8 25.64 30.184C25.88 30.552 26.216 30.848 26.648 31.072C27.08 31.28 27.608 31.384 28.232 31.384Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_52_3"
                  x1="53"
                  y1="0"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="content">
            <h2>Demo Day</h2>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </div>

      <div className="container-repo">
        <div className="contain">
          <div className="left-contain">
            <img src="/images/line 9.svg" alt="" className="line" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.680664"
                y="0.680664"
                width="19.3195"
                height="19.3195"
                rx="9.65977"
                fill="url(#paint0_linear_114_707)"
              />
              <path
                d="M10.0999 15.0542V7.3742L10.9399 8.2142H8.41994V6.6542H12.0439V15.0542H10.0999Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_114_707"
                  x1="20.0002"
                  y1="0.680664"
                  x2="0.680664"
                  y2="0.680664"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="right-contain">
            <div className="title-contain">
              <h2>Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <h2>November 18, 2023</h2>
          </div>
        </div>
        <div className="contain">
          <div className="left-contain">
            <img src="/images/line 9.svg" alt="" className="line" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.680664"
                y="0.680664"
                width="19.3195"
                height="19.3195"
                rx="9.65977"
                fill="url(#paint0_linear_114_729)"
              />
              <path
                d="M7.73194 15.0542V13.7942L10.9719 10.7342C11.2279 10.5022 11.4159 10.2942 11.5359 10.1102C11.6559 9.9262 11.7359 9.7582 11.7759 9.6062C11.8239 9.4542 11.8479 9.3142 11.8479 9.1862C11.8479 8.8502 11.7319 8.5942 11.4999 8.4182C11.2759 8.2342 10.9439 8.1422 10.5039 8.1422C10.1519 8.1422 9.82394 8.2102 9.51994 8.3462C9.22394 8.4822 8.97194 8.6942 8.76394 8.9822L7.34794 8.0702C7.66794 7.5902 8.11594 7.2102 8.69194 6.9302C9.26794 6.6502 9.93194 6.5102 10.6839 6.5102C11.3079 6.5102 11.8519 6.6142 12.3159 6.8222C12.7879 7.0222 13.1519 7.3062 13.4079 7.6742C13.6719 8.0422 13.8039 8.4822 13.8039 8.9942C13.8039 9.2662 13.7679 9.5382 13.6959 9.8102C13.6319 10.0742 13.4959 10.3542 13.2879 10.6502C13.0879 10.9462 12.7919 11.2782 12.3999 11.6462L9.71194 14.1782L9.33994 13.4702H14.0799V15.0542H7.73194Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_114_729"
                  x1="20.0002"
                  y1="0.680664"
                  x2="0.680664"
                  y2="0.680664"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="right-contain">
            <div className="title-contain">
              <h2>Teams Registration begins</h2>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <h2>November 18, 2023</h2>
          </div>
        </div>
        <div className="contain">
          <div className="left-contain">
            <img src="/images/line 9.svg" alt="" className="line" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.680664"
                y="0.680664"
                width="19.3195"
                height="19.3195"
                rx="9.65977"
                fill="url(#paint0_linear_114_736)"
              />
              <path
                d="M10.5279 15.1982C9.94394 15.1982 9.36394 15.1222 8.78794 14.9702C8.21194 14.8102 7.72394 14.5862 7.32394 14.2982L8.07994 12.8102C8.39994 13.0422 8.77194 13.2262 9.19594 13.3622C9.61994 13.4982 10.0479 13.5662 10.4799 13.5662C10.9679 13.5662 11.3519 13.4702 11.6319 13.2782C11.9119 13.0862 12.0519 12.8222 12.0519 12.4862C12.0519 12.1662 11.9279 11.9142 11.6799 11.7302C11.4319 11.5462 11.0319 11.4542 10.4799 11.4542H9.59194V10.1702L11.9319 7.5182L12.1479 8.2142H7.74394V6.6542H13.6239V7.9142L11.2959 10.5662L10.3119 10.0022H10.8759C11.9079 10.0022 12.6879 10.2342 13.2159 10.6982C13.7439 11.1622 14.0079 11.7582 14.0079 12.4862C14.0079 12.9582 13.8839 13.4022 13.6359 13.8182C13.3879 14.2262 13.0079 14.5582 12.4959 14.8142C11.9839 15.0702 11.3279 15.1982 10.5279 15.1982Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_114_736"
                  x1="20.0002"
                  y1="0.680664"
                  x2="0.680664"
                  y2="0.680664"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="right-contain">
            <div className="title-contain">
              <h2>Teams Registration ends</h2>
              <p>Interested Participants are no longer Allowed to register</p>
            </div>
            <h2>November 18, 2023</h2>
          </div>
        </div>
        <div className="contain">
          <div className="left-contain">
            <img src="/images/line 9.svg" alt="" className="line" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.680664"
                y="0.680664"
                width="19.3195"
                height="19.3195"
                rx="9.65977"
                fill="url(#paint0_linear_114_790)"
              />
              <path
                d="M6.70794 12.2902V10.9822L10.6679 5.6542H12.7079L8.83194 10.9822L7.88394 10.7062H14.4959V12.2902H6.70794ZM11.2319 14.0542V12.2902L11.2919 10.7062V9.1342H13.1279V14.0542H11.2319Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_114_790"
                  x1="20.0002"
                  y1="0.680664"
                  x2="0.680664"
                  y2="0.680664"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="right-contain">
            <div className="title-contain">
              <h2>Announcement of the accepted teams and ideas</h2>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
            <h2>November 18, 2023</h2>
          </div>
        </div>
        <div className="contain">
          <div className="left-contain">
            <img src="/images/line 9.svg" alt="" className="line" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.680664"
                width="19.3195"
                height="19.3195"
                rx="9.65977"
                fill="url(#paint0_linear_114_797)"
              />
              <path
                d="M10.6599 13.5175C10.0759 13.5175 9.49594 13.4415 8.91994 13.2895C8.35194 13.1295 7.86394 12.9055 7.45594 12.6175L8.22394 11.1295C8.54394 11.3615 8.91194 11.5455 9.32794 11.6815C9.75194 11.8175 10.1799 11.8855 10.6119 11.8855C11.0999 11.8855 11.4839 11.7895 11.7639 11.5975C12.0439 11.4055 12.1839 11.1375 12.1839 10.7935C12.1839 10.5775 12.1279 10.3855 12.0159 10.2175C11.9039 10.0495 11.7039 9.92154 11.4159 9.83353C11.1359 9.74553 10.7399 9.70153 10.2279 9.70153H8.07994L8.51194 4.97353H13.6359V6.53353H9.20794L10.2159 5.64553L9.91594 9.01754L8.90794 8.12954H10.6839C11.5159 8.12954 12.1839 8.24554 12.6879 8.47753C13.1999 8.70153 13.5719 9.00953 13.8039 9.40153C14.0359 9.79353 14.1519 10.2375 14.1519 10.7335C14.1519 11.2295 14.0279 11.6895 13.7799 12.1135C13.5319 12.5295 13.1479 12.8695 12.6279 13.1335C12.1159 13.3895 11.4599 13.5175 10.6599 13.5175Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_114_797"
                  x1="20.0002"
                  y1="0"
                  x2="0.680664"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="right-contain">
            <div className="title-contain">
              <h2>Getlinked Hackathon 1.0 Offically Begins</h2>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <h2>November 18, 2023</h2>
          </div>
        </div>
        <div className="contain">
          <div className="left-contain">
            <img src="/images/line 9.svg" alt="" className="line" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.680664"
                width="19.3195"
                height="19.3195"
                rx="9.65977"
                fill="url(#paint0_linear_114_806)"
              />
              <path
                d="M10.5599 13.5175C9.79194 13.5175 9.12394 13.3575 8.55594 13.0375C7.99594 12.7175 7.56394 12.2495 7.25994 11.6335C6.95594 11.0175 6.80394 10.2575 6.80394 9.35354C6.80394 8.38553 6.98394 7.56553 7.34394 6.89353C7.71194 6.22153 8.21594 5.70953 8.85594 5.35753C9.50394 5.00553 10.2479 4.82954 11.0879 4.82954C11.5359 4.82954 11.9639 4.87753 12.3719 4.97353C12.7799 5.06953 13.1319 5.21353 13.4279 5.40553L12.7079 6.83353C12.4759 6.67354 12.2279 6.56554 11.9639 6.50953C11.6999 6.44553 11.4239 6.41353 11.1359 6.41353C10.4079 6.41353 9.83194 6.63353 9.40794 7.07353C8.98394 7.51353 8.77194 8.16553 8.77194 9.02953C8.77194 9.17353 8.77194 9.33353 8.77194 9.50953C8.77994 9.68553 8.80394 9.86153 8.84394 10.0375L8.30394 9.53353C8.45594 9.22153 8.65194 8.96153 8.89194 8.75353C9.13194 8.53753 9.41594 8.37753 9.74394 8.27354C10.0799 8.16154 10.4479 8.10554 10.8479 8.10554C11.3919 8.10554 11.8799 8.21353 12.3119 8.42953C12.7439 8.64553 13.0879 8.94953 13.3439 9.34153C13.6079 9.73354 13.7399 10.1935 13.7399 10.7215C13.7399 11.2895 13.5959 11.7855 13.3079 12.2095C13.0279 12.6255 12.6479 12.9495 12.1679 13.1815C11.6959 13.4055 11.1599 13.5175 10.5599 13.5175ZM10.4519 12.0655C10.7239 12.0655 10.9639 12.0175 11.1719 11.9215C11.3879 11.8175 11.5559 11.6695 11.6759 11.4775C11.7959 11.2855 11.8559 11.0655 11.8559 10.8175C11.8559 10.4335 11.7239 10.1295 11.4599 9.90554C11.2039 9.67353 10.8599 9.55753 10.4279 9.55753C10.1399 9.55753 9.88794 9.61353 9.67194 9.72553C9.45594 9.82954 9.28394 9.97754 9.15594 10.1695C9.03594 10.3535 8.97594 10.5695 8.97594 10.8175C8.97594 11.0575 9.03594 11.2735 9.15594 11.4655C9.27594 11.6495 9.44394 11.7975 9.65994 11.9095C9.87594 12.0135 10.1399 12.0655 10.4519 12.0655Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_114_806"
                  x1="20.0002"
                  y1="0"
                  x2="0.680664"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#D434FE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="right-contain">
            <div className="title-contain">
              <h2>Demo Day</h2>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
            <h2>November 18, 2023</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineMain;
