import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello, <br />
      I'm Josh!
    </SectionTitle>
    <SectionText>
      I'm a full stack web developer with a passion for creating beautiful, functional websites.
    </SectionText>
    
  </LeftSection>
 </Section>
);

export default Hero;