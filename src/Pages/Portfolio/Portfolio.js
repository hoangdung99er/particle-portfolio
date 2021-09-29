import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../../styles/Layout";
import Title from "../../Components/Title/Title";
import portfolios from "../../data/portfolios";
import Menus from "../../Components/Menus/Menus";
import Button from "../../Components/Button/Button";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

function Portfolio() {
  const [menuItems, setMenuItems] = useState(portfolios);
  const [button, setButton] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };

  return (
    <MainLayout>
      <Title title="Portfolios" span="Portfolios" />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menus menuItems={menuItems} />
      </InnerLayout>
    </MainLayout>
  );
}

export default Portfolio;
