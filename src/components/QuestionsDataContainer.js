import React from "react";

const QuestionsDataContainer = ({ data, animate, onClick }) => {
  return (
    <div className={`question `}>
      <div className={`container ${animate ? "animate" : ""}`}>
        <p>{data.question}</p>
        <p className="answer">{data.answer}</p>
      </div>
      {!animate ? (
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
        >
          <path
            d="M4.78 10V6.2H0.96V4.32H4.78V0.559999H6.58V4.32H10.4V6.2H6.58V10H4.78Z"
            fill="#D434FE"
          />
        </svg>
      ) : (
        <span className="svg" onClick={onClick}>
          -
        </span>
      )}
    </div>
  );
};

export default QuestionsDataContainer;
