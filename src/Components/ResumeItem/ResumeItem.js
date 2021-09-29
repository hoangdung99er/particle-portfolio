import React from "react";
import { ResumeItemStyled } from "./ResumeItemElm";

function ResumeItem({ year, title, subtitle, text }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <span></span>
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}

export default ResumeItem;
