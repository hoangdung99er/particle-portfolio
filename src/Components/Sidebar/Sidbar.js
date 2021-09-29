import Navigation from "../Navigation/Navigation";
import React from "react";
import { SidebarElm } from "./SidebarElm";

function Sidbar({ navToggle }) {
  return (
    <SidebarElm className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation />
    </SidebarElm>
  );
}

export default Sidbar;
