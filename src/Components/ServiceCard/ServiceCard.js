import React from "react";
import { ServiceCardStyled } from "./ServiceCardElm";

function ServiceCard({ image, title, paragraph }) {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
}

export default ServiceCard;
