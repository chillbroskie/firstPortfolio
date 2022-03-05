import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        My name is Matthew Evans. I'm a Full Stack Web / Mobile Developer. It's
        a passion of mine to help build and create simple user experiences on
        the client-side as well as backend server-side.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
