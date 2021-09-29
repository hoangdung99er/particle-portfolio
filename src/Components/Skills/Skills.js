import React from "react";
import { InnerLayout } from "../../styles/Layout";
import { SkillsStyled } from "./SkillsElm";
import Title from "../Title/Title";
import ProgressBar from "../ProgressBar/ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title="Skills" span="Skills" />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title="HTML5" width="70%" text="70%" />
          <ProgressBar title="CSS" width="85%" text="85%" />
          <ProgressBar title="JavaScript" width="90%" text="90%" />
          <ProgressBar title="Node.js" width="85%" text="85%" />
          <ProgressBar title="MongoDB" width="75%" text="75%" />
          <ProgressBar title="ReactJS" width="95%" text="95%" />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

export default Skills;
