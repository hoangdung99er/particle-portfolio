import React from "react";
import { MenuItemStyled } from "./MenusElm";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Menus({ menuItems }) {
  return (
    <MenuItemStyled>
      {menuItems.map((item) => (
        <div key={item.id} className="grid-item">
          <div className="portfolio-content">
            <div className="portfolio-image">
              <img src={item.image} alt="" />
              <ul>
                <li>
                  <a href={item.link1} target="_blank" rel="noreferrer" alt="">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href={item.link2} target="_blank" rel="noreferrer" alt="">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
            <h6>{item.title}</h6>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </MenuItemStyled>
  );
}

export default Menus;
