import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Link } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          This is Ahmed Magid !, A Junior Full-Stack Web Developer From
          Damietta, Egypt.
        </SectionText>
        <Link href='/cv.pdf'>
          <Button href='cv.pdf'>Download CV</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
