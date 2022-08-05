import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px;
  overflow: hidden;
  transition: 1s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  height: 600px;
  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: 10px;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #003865;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #f15412;
  padding-top: 1rem;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #f15412;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #003865;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #003865;
  font-style: 2rem;
  line-height: 24px;
  height: 150px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: white;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #d80455;
  border-radius: 5px;
  transition: 0.5s;
  &:hover {
    background: #ff0063;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    margin: 10px;
  }
`;
export const Tag = styled.li`
  color: #f15412;
  font-size: 1.5rem;
`;
