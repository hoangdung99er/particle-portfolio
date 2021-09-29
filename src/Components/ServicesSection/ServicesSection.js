import React from "react";
import { InnerLayout } from "../../styles/Layout";
import ServiceCard from "../ServiceCard/ServiceCard";
import Title from "../Title/Title";
import { ServicesSectionElm } from "./ServicesSectionElm";
import AI from "../../imageSvg/ai.svg";
import webdev from "../../imageSvg/web-dev.svg";
import filesync from "../../imageSvg/filesync.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionElm>
        <Title title="Services" span="services" />
        <div className="services">
          <ServiceCard
            image={filesync}
            title="File Sync"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!"
          />
          <div className="mid-card">
            <ServiceCard
              image={AI}
              title="Artificial Intelligence"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!"
            />
          </div>
          <ServiceCard
            image={webdev}
            title="Developer"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!"
          />
        </div>
      </ServicesSectionElm>
    </InnerLayout>
  );
}

export default ServicesSection;
