import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #B9FF82;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Title>DADING CODING</Title>
      <Subtitle>코딩 교육 봉사 동아리</Subtitle>
      <Description>
        코딩을 좋아한다면 누구나! 지금 바로 ✨코딩 선생님✨이 되어보세요
      </Description>
    </HomeContainer>
  );
};

export default Home;