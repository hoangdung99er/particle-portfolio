import React from "react";
import { ReviewItemStyled } from "./ReviewItemElm";

function ReviewItem({ text }) {
  return (
    <ReviewItemStyled>
      <p>{text}</p>
    </ReviewItemStyled>
  );
}

export default ReviewItem;
