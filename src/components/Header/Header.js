import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Logo,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <Logo>Ahmed Magid</Logo>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>Acomplishments</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/devahmedmagid/'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/devahmedmagid/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://https://web.facebook.com/DrAhmedMagid'>
        <AiFillFacebook size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
