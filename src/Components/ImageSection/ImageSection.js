import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSectionStyled } from "./ImageSectionElm";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img
          src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Lorem Ipsum</span>
        </h4>
        <p className="paragraphy">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          doloremque autem voluptates, sunt magnam maxime error molestiae
          repellendus, vel explicabo animi perferendis. Molestias vel expedita
          consequatur distinctio iste dolores pariatur aliquid fugiat, corporis
          non hic cum ipsum cupiditate nobis. Provident.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languagues</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Lorem Ipsum</p>
            <p>26</p>
            <p>: VietNam</p>
            <p>: Vietnamese</p>
            <p>Go Vap, TPHCM</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton title="Download CV" />
      </div>
    </ImageSectionStyled>
  );
}

export default ImageSection;
