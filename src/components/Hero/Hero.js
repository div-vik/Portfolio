import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import Projects from "../Projects/Projects";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! <br />
        I'm Divya Vikash
      </SectionTitle>
      <SectionText>
        As a seasoned software and frontend developer, my objective is to
        design, develop and deliver high-quality software solutions that cater
        to the needs of clients and users alike. I have a deep passion for
        creating intuitive and visually appealing user interfaces that provide a
        seamless user experience. Apart from Front-End, I have good knowledge in
        backend using NodeJs, MongoDB.
      </SectionText>
      <Button onClick={() => (window.location = "#projects")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
