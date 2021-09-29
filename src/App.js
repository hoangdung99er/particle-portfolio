import Sidebar from "./Components/Sidebar/Sidbar";
import { MainContainerStyled } from "./AppElm";
import Homepage from "./Pages/Homepage/Homepage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ResumePage from "./Pages/ResumePage/ResumePage";
import PortfoliosPage from "./Pages/Portfolio/Portfolio";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import { Switch as Switching, Route } from "react-router-dom";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";
import { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Brightness7Icon from "@material-ui/icons/Brightness7";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <>
      <Sidebar navToggle={navToggle} />

      <MainContainerStyled>
        <div className="light-dark-mode">
          <div className="left-content">
            {!checked ? <Brightness7Icon /> : <Brightness4Icon />}
          </div>
          <div className="right-content">
            <Switch
              checked={checked}
              onClick={themeToggler}
              size="medium"
              value=""
              inputProps={{ "aria-label": "" }}
            />
          </div>
        </div>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <div className="menus-toggle">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
            <MenuIcon />
          </IconButton>
        </div>

        <Switching>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/portfolios">
            <PortfoliosPage />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switching>
      </MainContainerStyled>
    </>
  );
}

export default App;
