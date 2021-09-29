import React from "react";
import { ReviewSectionStyled } from "./ReviewSectionElm";
import { InnerLayout } from "../../styles/Layout";
import Title from "../Title/Title";
import ReviewItem from "../ReviewItem/ReviewItem";

function ReviewSection() {
  return (
    <ReviewSectionStyled>
      <Title title="Reviews" span="Reviews" />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, enim?1" />
          <ReviewItem text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, enim?1" />
        </div>
      </InnerLayout>
    </ReviewSectionStyled>
  );
}

export default ReviewSection;
