import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyled from "./styles/Globalstyles";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
