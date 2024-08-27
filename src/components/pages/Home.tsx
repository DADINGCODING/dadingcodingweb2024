import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const Home: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <HomeContainer>
      <HeroSection>
        <BackgroundEmoji>🖥️💡🔍📊</BackgroundEmoji>
        <Title>
          <GreenText>DADING</GreenText>
          <WhiteText>CODING</WhiteText>
        </Title>
        <Subtitle>코딩 교육 봉사 동아리</Subtitle>
      </HeroSection>
      <ScrollDownText visible={scrollPosition < 100}>
        Scroll Down
      </ScrollDownText>
      <IntroSection visible={scrollPosition > 300}>
        <IntroText>
          코딩을 좋아한다면 누구나!<br />
          지금 바로 ✨코딩 선생님✨이 되어보세요
        </IntroText>
      </IntroSection>
      <ActivitySection>
        <ActivityTitle>대딩코딩 활동 소개</ActivityTitle>
        <ActivityCards>
          <ActivityCard>
            <CardTitle>제목어쩌구</CardTitle>
            <CardContent>어쩌구저쩌구 설명어쩌구저쩌구 설명 어쩌구저쩌구 설명어쩌구저쩌구 설명</CardContent>
          </ActivityCard>
          {/* Add more ActivityCard components as needed */}
        </ActivityCards>
      </ActivitySection>
    </HomeContainer>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HomeContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackgroundEmoji = styled.div`
  position: absolute;
  font-size: 48px;
  opacity: 0.2;
  pointer-events: none;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  font-family: 'Couture', sans-serif;
  text-align: center;
`;

const GreenText = styled.span`
  color: #B9FF82;
`;

const WhiteText = styled.span`
  color: white;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #B9FF82;
  margin-top: 20px;
`;

const ScrollDownText = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;

const IntroSection = styled.section<{ visible: boolean }>`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  animation: ${fadeIn} 1s ease-out;
`;

const IntroText = styled.p`
  font-size: 24px;
  text-align: center;
  line-height: 1.5;
`;

const ActivitySection = styled.section`
  padding: 100px 0;
`;

const ActivityTitle = styled.h2`
  font-size: 36px;
  color: #B9FF82;
  text-align: center;
  margin-bottom: 40px;
`;

const ActivityCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ActivityCard = styled.div`
  background: linear-gradient(to bottom, #B9FF82, #7FFF00);
  border-radius: 20px;
  padding: 20px;
  width: 250px;
  color: black;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 14px;
`;

export default Home;