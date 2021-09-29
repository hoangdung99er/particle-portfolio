import React from "react";
import Particle from "../../Components/Particles/Particles";
import { HomepageStyled } from "./HomepageElm";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";

function Homepage() {
  return (
    <HomepageStyled>
      <div className="particles">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span>Lorem Ipsum</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          repudiandae enim excepturi, praesentium nulla eveniet, facere illo
          aperiam perspiciatis assumenda asperiores voluptas quia est molestiae
          ut quisquam non possimus pariatur.
        </p>
        <div className="icons">
          <a
            href="https://www.w3schools.com/css/css3_2dtransforms.asp"
            className="icon i-facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.w3schools.com/css/css3_2dtransforms.asp"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.w3schools.com/css/css3_2dtransforms.asp"
            className="icon i-youtube"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomepageStyled>
  );
}

export default Homepage;
