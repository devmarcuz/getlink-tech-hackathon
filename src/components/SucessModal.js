import React from "react";
import "../css/Success.css";

const SucessModal = ({ setBool }) => {
  return (
    <div className="sucess-modal">
      <div className="container">
        <img src="/images/stars/star (1).svg" alt="" className="star" />
        <img src="/images/stars/sata gra.svg" alt="" className="star-2" />
        <img src="/images/stars/star pu.svg" alt="" className="star-3" />
        <img src="/images/congratulation.svg" alt="" className="vector" />
        <h1>
          Congratulations <br />
          you have successfully Registered!
        </h1>
        <p>
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <div className="btn" onClick={() => setBool(false)}>
          Back
        </div>
      </div>
    </div>
  );
};

export default SucessModal;
