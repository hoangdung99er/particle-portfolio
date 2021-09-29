import React from "react";
import Resume from "../../Components/Resume/Resume";
import Skills from "../../Components/Skills/Skills";
import { MainLayout } from "../../styles/Layout";

function ResumePage() {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  );
}

export default ResumePage;
