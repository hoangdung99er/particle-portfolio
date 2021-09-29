import React from "react";
import { NavigationElm } from "./NavigationElm";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <NavigationElm>
      <div className="avatar">
        <img
          src="https://images.pexels.com/photos/7654802/pexels-photo-7654802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active">
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active">
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 My Theme Website</p>
      </footer>
    </NavigationElm>
  );
}

export default Navigation;
