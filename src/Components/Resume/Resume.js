import React from "react";
import { InnerLayout } from "../../styles/Layout";
import SmallTitle from "../SmallTitle/SmallTitle";
import Title from "../Title/Title";
import { ResumeStyled } from "./ResumeElm";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../ResumeItem/ResumeItem";

function Resume() {
  const briefcase = <WorkIcon />;
  const education = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <div className="resume">
          <div className="small-title">
            <SmallTitle title="Working Experience" icon={briefcase} />
          </div>
          <div className="resume-content">
            <ResumeItem
              year="2017 - 2022"
              title="Information Technology"
              subtitle="IUH University"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident laborum qui odio id enim saepe sint nesciunt ipsa dolorem quaerat autem, distinctio eveniet molestiae quae sequi velit assumenda. Quasi."
            />
            <ResumeItem
              year="2017 - 2022"
              title="Information Technology"
              subtitle="IUH University"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident laborum qui odio id enim saepe sint nesciunt ipsa dolorem quaerat autem, distinctio eveniet molestiae quae sequi velit assumenda. Quasi."
            />
            <ResumeItem
              year="2017 - 2022"
              title="Information Technology"
              subtitle="IUH University"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident laborum qui odio id enim saepe sint nesciunt ipsa dolorem quaerat autem, distinctio eveniet molestiae quae sequi velit assumenda. Quasi."
            />
          </div>
        </div>
        <div className="resume">
          <div className="small-title">
            <SmallTitle title="Working Experience" icon={education} />
          </div>
          <div className="resume-content">
            <ResumeItem
              year="2017 - 2022"
              title="Information Technology"
              subtitle="IUH University"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident laborum qui odio id enim saepe sint nesciunt ipsa dolorem quaerat autem, distinctio eveniet molestiae quae sequi velit assumenda. Quasi."
            />
            <ResumeItem
              year="2017 - 2022"
              title="Information Technology"
              subtitle="IUH University"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident laborum qui odio id enim saepe sint nesciunt ipsa dolorem quaerat autem, distinctio eveniet molestiae quae sequi velit assumenda. Quasi."
            />
            <ResumeItem
              year="2017 - 2022"
              title="Information Technology"
              subtitle="IUH University"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident laborum qui odio id enim saepe sint nesciunt ipsa dolorem quaerat autem, distinctio eveniet molestiae quae sequi velit assumenda. Quasi."
            />
          </div>
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

export default Resume;
