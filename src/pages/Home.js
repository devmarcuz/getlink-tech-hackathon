import React, { useEffect, useRef, useState } from "react";
import "../css/Home.css";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import IntroductionMain from "../components/home-components/IntroductionMain";
import CriteriaMain from "../components/home-components/CriteriaMain";
import RulesMain from "../components/home-components/RulesMain";
import QuestionMain from "../components/home-components/QuestionMain";
import TimelineMain from "../components/home-components/TimelineMain";
import PrizesMain from "../components/home-components/PrizesMain";
import SponsorsMain from "../components/home-components/SponsorsMain";
import PrivacyMain from "../components/home-components/PrivacyMain";
import Footer from "../components/Footer";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [questionActiveIndex, setQuestionActiveIndex] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(false);
  const [prizesIndex, setPrizesIndex] = useState(false);
  const [sponsorIndex, setSponsorIndex] = useState(false);
  const [privacyIndex, setPrivacyIndex] = useState(false);
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60);
  const [overviewBool, setOverviewBool] = useState(false);
  const [FAQs, setFAQs] = useState(false);

  const introductionRef = useRef(null);
  const rulesRef = useRef(null);
  const questionsRef = useRef(null);
  const prizesRef = useRef(null);
  const criteriaRef = useRef(null);
  const sponsorsRef = useRef(null);
  const privacyRef = useRef(null);
  const timelineRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const checkSection = (sectionRef, index) => {
        const sectionRect = sectionRef.current.getBoundingClientRect();

        if (sectionRect.top <= window.innerHeight / 2) {
          setActiveIndex(index);
        }

        if (
          questionsRef.current.getBoundingClientRect().top <=
          window.innerHeight / 2
        ) {
          setQuestionIndex(true);
        } else {
          setQuestionIndex(false);
        }

        if (
          prizesRef.current.getBoundingClientRect().top <=
          window.innerHeight / 2
        ) {
          setPrizesIndex(true);
        } else {
          setPrizesIndex(false);
        }

        if (
          sponsorsRef.current.getBoundingClientRect().top <=
          window.innerHeight / 2
        ) {
          setSponsorIndex(true);
        } else {
          setSponsorIndex(false);
        }

        if (
          privacyRef.current.getBoundingClientRect().top <=
          window.innerHeight / 2
        ) {
          setPrivacyIndex(true);
        } else {
          setPrivacyIndex(false);
        }
      };

      // Check each section for animation trigger
      checkSection(introductionRef, 0);
      checkSection(rulesRef, 1);
      checkSection(questionsRef, 2);
      checkSection(prizesRef, 3);
      checkSection(criteriaRef, 4);
      checkSection(sponsorsRef, 5);
      checkSection(privacyRef, 6);
      checkSection(timelineRef, 7);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section === "timeline" && timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "questions" && questionsRef.current) {
      questionsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "introductions" && introductionRef.current) {
      introductionRef.current.scrollIntoView({ behavior: "smooth" });
      setOverviewBool(true);
    }
  }, [location.search]);

  const toggleAnimation = (index) => {
    if (index === questionActiveIndex) {
      setQuestionActiveIndex(null);
    } else {
      setQuestionActiveIndex(index);
    }
  };
  return (
    <div className="home">
      <Header timelineRef={timelineRef} />
      <img
        src="/images/Purple-Lens-Flare-PNG-home-repo.svg"
        alt=""
        className="lens-home-repo"
      />
      <img src="/images/Purple-lens-flare-PNG.svg" alt="" className="lens" />
      <img src="/images/Purple-lenss-flare-PNG.svg" alt="" className="lens-2" />

      <div className="igniting-main">
        <div className="igniting-title">
          <img src="/images/stars/star.svg" alt="" className="star" />
          <div className="content">
            <h2 className="typewriter">
              Igniting a Revolution in HR Innovation
            </h2>
            <div className="contain">
              <img src="/images/Vector 4.svg" alt="" className="underline" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="igniting-content">
            <img src="/images/stars/star (1).svg" alt="" className="star" />
            <img src="/images/stars/star (1).svg" alt="" className="star-2" />
            <img src="/images/IgnitingTitle.svg" alt="" className="title" />
            <img src="/images/Title repo.svg" alt="" className="title-repo" />
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link className="btn" to="/register">
              Register
            </Link>
            <div className="countdown">
              <div className="time">
                <span>{hours.toString().padStart(2, "0")}</span>H
              </div>
              <div className="time">
                <span>{minutes.toString().padStart(2, "0")}</span>M
              </div>
              <div className="time">
                <span>{seconds.toString().padStart(2, "0")}</span>S
              </div>
            </div>
          </div>

          <div className="vector-svg">
            <img src="/images/metrix 1.svg" alt="" className="metrix" />
            <img
              src="/images/man-wearing-smart-glasses-touching-virtual-screen 1.svg"
              alt=""
              className="man"
            />
            <img src="/images/Image 1.svg" alt="" className="globe" />
          </div>
        </div>
      </div>

      <IntroductionMain
        introductionRef={introductionRef}
        activeIndex={activeIndex}
      />
      <RulesMain rulesRef={rulesRef} activeIndex={activeIndex} />
      <CriteriaMain activeIndex={activeIndex} criteriaRef={criteriaRef} />
      <QuestionMain
        questionIndex={questionIndex}
        questionsRef={questionsRef}
        toggleAnimation={toggleAnimation}
        questionActiveIndex={questionActiveIndex}
      />
      <TimelineMain timelineRef={timelineRef} activeIndex={activeIndex} />
      <PrizesMain prizesIndex={prizesIndex} prizesRef={prizesRef} />
      <SponsorsMain sponsorIndex={sponsorIndex} sponsorsRef={sponsorsRef} />
      <PrivacyMain privacyIndex={privacyIndex} privacyRef={privacyRef} />

      <Footer />
    </div>
  );
};

export default Home;
