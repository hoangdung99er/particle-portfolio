import React from "react";
import ImageSection from "../../Components/ImageSection/ImageSection";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Title from "../../Components/Title/Title";
import { MainLayout } from "../../styles/Layout";
import { AboutStyled } from "./AboutPageElm";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title="About Me" span="About Me" />
        <ImageSection />
        <ServicesSection />
        <ReviewSection />
      </AboutStyled>
    </MainLayout>
  );
}

export default AboutPage;
