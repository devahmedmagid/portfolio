import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Link } from './AcomplishmentsStyles';

const data = [
  {
    title: 'Harvard CS50X Introduction to Computer Science',
    link: 'https://cs50.harvard.edu/certificates/dda036eb-91b0-42ce-ba7d-0c4b30083e2d',
    id: 0,
  },
  {
    title: 'Harvard CS50W Web Programming with Python and Javascript',
    link: 'https://cs50.harvard.edu/certificates/dda036eb-91b0-42ce-ba7d-0c4b30083e2d',
    id: 1,
  },
  {
    title: 'Final Project of CS50X on Harvard Website',
    link: 'https://cs50.harvard.edu/x/2021/gallery/',
    id: 2,
  },
  {
    title: 'Building Web Apps with React and Firebase',
    link: 'https://ude.my/UC-45a19ea8-8890-45c7-b487-512eabed032e',
    id: 3,
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>

    <Boxes>
      {data.map((card) => (
        <Link href={card.link}>
          <Box key={card.id}>
            <BoxNum>{`${card.id + 1}`}</BoxNum>
            <BoxText>{card.title}</BoxText>
          </Box>
        </Link>
      ))}
    </Boxes>

    <SectionDivider />
  </Section>
);

export default Acomplishments;
