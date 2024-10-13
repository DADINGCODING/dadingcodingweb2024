import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import FloatingBubbles from '../common/FloatingBubbles';
import About from './About';  // About 컴포넌트 import

const Home: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (contentRef.current) {
        const opacity = 1 - Math.min(position / window.innerHeight, 1);
        contentRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash === '#about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <HomeContainer>
      <HeroSection>
        <FloatingBubbles />
        <ContentWrapper ref={contentRef}>
          <Subtitle>코딩 교육 봉사 동아리</Subtitle>
          <TitleWrapper>
            <DadingTitle>DADING</DadingTitle>
            <CodingTitle>
              C<LogoO>🤓</LogoO>DING
            </CodingTitle>
          </TitleWrapper>
          <Description>
            코딩을 좋아한다면 누구나!
            <br />
            <Strong>지금 바로 ✨코딩 선생님✨이 되어보세요</Strong>
          </Description>
        </ContentWrapper>
        <IconsContainer>
          <FloatingEmoji style={{ left: '10%', top: '20%' }}>🖥️</FloatingEmoji>
          <FloatingEmoji style={{ right: '15%', top: '30%' }}>💡</FloatingEmoji>
          <FloatingEmoji style={{ left: '20%', bottom: '25%' }}>🔍</FloatingEmoji>
          <FloatingEmoji style={{ right: '25%', bottom: '20%' }}>📁</FloatingEmoji>
          <FloatingEmoji style={{ left: '30%', top: '40%' }}>📊</FloatingEmoji>
          <FloatingEmoji style={{ right: '35%', top: '50%' }}>✨</FloatingEmoji>
        </IconsContainer>
      </HeroSection>
      
      <AboutSection id="about" ref={aboutRef}>
        <About />
      </AboutSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background: linear-gradient(to bottom, #000000, #1a1a1a);
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h2`
  font-size: 32px;
  color: #C7FF96;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  margin-bottom: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const DadingTitle = styled.h1`
  font-size: 128px;
  font-family: 'Couture', sans-serif;
  font-weight: 700;
  letter-spacing: 14.08px;
  line-height: 1;
  margin: 0;
  color: black;
  background: linear-gradient(107deg, #B9FF82 0%, #00EF8A 100%);
  width: 636.43px;
  height: 119.02px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 65px;
  padding: 10px;
`;

const CodingTitle = styled.h1`
  font-size: 128px;
  font-family: 'Couture', sans-serif;
  font-weight: 700;
  letter-spacing: 14.08px;
  line-height: 1;
  margin: 20px 0 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoO = styled.span`
  font-size: 100px;
  vertical-align: middle;
  margin: 0 10px;
`;

const Description = styled.p`
  font-size: 40px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 300;
  line-height: 1.4;
  margin-top: 40px;
  color: white;
`;

const Strong = styled.span`
  font-weight: 600;
  color: white;
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const IconsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const FloatingEmoji = styled.div`
  position: absolute;
  font-size: 50px;
  opacity: 0.4;
  animation: ${float} 3s ease-in-out infinite;
`;

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 2rem;
`;

export default Home;