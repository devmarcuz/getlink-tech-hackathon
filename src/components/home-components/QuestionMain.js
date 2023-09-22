import React from "react";
import QuestionsDataContainer from "../QuestionsDataContainer";
import { questions_data } from "../../utils/questions_data";

const QuestionMain = ({
  questionsRef,
  questionIndex,
  toggleAnimation,
  questionActiveIndex,
}) => {
  return (
    <div ref={questionsRef} className="questions-main">
      <div className="left-container">
        <img src="/images/stars/star pu.svg" alt="" className="star" />
        <img src="/images/stars/star (1).svg" alt="" className="star-2" />
        <h2
          className={`scroll-animation ${questionIndex ? "animate" : "remove"}`}
        >
          Frequently Ask <br /> <span>Question</span>
        </h2>

        <div className="content">
          We got answers to the questions that you might want to ask about{" "}
          <span>getlinked Hackathon 1.0</span>
        </div>

        <div className="questions">
          {questions_data.map((data, index) => (
            <QuestionsDataContainer
              data={data}
              key={index}
              animate={index === questionActiveIndex}
              onClick={() => toggleAnimation(index)}
            />
          ))}
        </div>
      </div>
      <div className="right-container">
        <img src="/images/_.svg" alt="" className="icon" />
        <img src="/images/_ (1).svg" alt="" className="icon-2" />
        <img src="/images/_ (1).svg" alt="" className="icon-3" />
        <img src="/images/stars/sata gra.svg" alt="" className="star" />
        <img src="/images/stars/sata gra.svg" alt="" className="star-2" />
        <img src="/images/stars/star.svg" alt="" className="star-3" />
        <img
          src="/images/cwok_casual_21 1.svg"
          alt=""
          className={`vector right-vector-animation ${
            questionIndex ? "animate" : "remove"
          }`}
        />
      </div>
    </div>
  );
};

export default QuestionMain;
