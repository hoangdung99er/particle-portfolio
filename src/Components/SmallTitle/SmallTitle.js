import React from "react";
import { ResumeStyled } from "./SmallTitleElm";

function SmallTitle({ icon, title }) {
  return (
    <ResumeStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </ResumeStyled>
  );
}

export default SmallTitle;
