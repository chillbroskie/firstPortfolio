import React from 'react';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio :D
      </SectionTitle>
      <SectionText>
        My name is Matthew Evans. I'm a Full Stack Web / Mobile Developer. It's a passion of mine to help build and create simple/sleek user experiences on the client-side as well as how to support that on the backend server-side.
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;