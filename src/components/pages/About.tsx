import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import FloatingBubbles from '../common/FloatingBubbles';

interface ActivityItem {
  title: string;
  content: string;
  emoji: string;
}

const activityData: ActivityItem[] = [
  {
    title: "대딩코딩이란",
    content: "2021년 8월에 시작된\n코딩 교육 봉사 동아리입니다.",
    emoji: "🏫"
  },
  {
    title: "우리의 비전",
    content: "프로그래밍 사고력 증진을 목표로,\n효과적인 코딩 교육을 제공합니다.",
    emoji: "🚀"
  },
  {
    title: "튜터 활동",
    content: "매달 1회 온라인 회의,\n주 1회 2시간 수업 진행 및\n활동일지 제출.",
    emoji: "👨‍🏫"
  },
  {
    title: "수업 내용",
    content: "Python 기초부터\n간단한 알고리즘 문제풀이까지\n다양한 프로그램 제공.",
    emoji: "💻"
  },
  {
    title: "7기 튜터 모집",
    content: "9월 6일~13일 서류접수,\n19일~22일 면접,\n23일 발표, 29일 OT(대면)",
    emoji: "📅"
  },
  {
    title: "학생 모집",
    content: "9월 9일~20일 모집,\n10월 1일~11월 30일 중\n6주 수업 (2주 휴식)",
    emoji: "🎓"
  },
  {
    title: "활동 혜택",
    content: "봉사시간 인정(32시간, 임원진 40시간),\n수료증 발급, 문화 혜택 제공",
    emoji: "🎉"
  }
];
const About: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardsVisible = scrollPosition > (aboutRef.current?.offsetTop ?? 0) - window.innerHeight / 2;

  return (
    <AboutContainer ref={aboutRef}>
      <FloatingBubbles />
      <CircularBackground>
        <BackgroundImage src="/assets/images/about_circular.jpeg" alt="Background" />
        <BackgroundOverlay />
      </CircularBackground>

      <Content>
        <IntroSection>
          <Line />
          <Line2 />
          <Line3 />
          <IntroText>
            <div>안녕!</div>
            <div>우리의 활동들을</div>
            <div>소개할게</div>
          </IntroText>
          <ActivityIntro>
            <ActivityIntroBox>대딩코딩 활동 소개</ActivityIntroBox>
          </ActivityIntro>
          <WhatWeDo>what we do!</WhatWeDo>
        </IntroSection>

        <CardSection ref={cardsRef} visible={cardsVisible}>
          {activityData.map((activity, index) => (
            <ActivityCard key={index} index={index} visible={cardsVisible}>
              <CardEmoji>{activity.emoji}</CardEmoji>
              <CardContent>
                <CardTitle>{activity.title}</CardTitle>
                <CardDescription>{activity.content}</CardDescription>
              </CardContent>
            </ActivityCard>
          ))}
        </CardSection>
      </Content>
      <BackgroundTextWrapper>DADING CODING</BackgroundTextWrapper>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #000000, #1a1a1a);
`;

const CircularBackground = styled.div`
  position: absolute;
  width: 1361.99px;
  height: 474.07px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 923px;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.70);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 80px 20px;
  color: #fff;
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const FloatingBox = styled.div`
  position: absolute;
  width: 130.51px;
  height: 46.93px;
  background: linear-gradient(180deg, rgba(227.44, 255, 203.32, 0.80) 0%, rgba(199, 255, 150, 0.80) 64%, rgba(119.40, 153, 90, 0.80) 100%);
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
`;

const DadingCodingText = styled.div`
  position: absolute;
  width: 100%;
  top: 451.36px;
  color: rgba(185, 255, 130, 0.30);
  font-size: 200px;
  font-family: 'Couture', sans-serif;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  white-space: nowrap;
`;

const IntroSection = styled.div`
  position: relative;
  width: 836.13px;
  height: 466.30px;
  margin: 0 auto;
`;

const Line = styled.div`
  width: 258.66px;
  height: 0;
  left: 0;
  top: 129.69px;
  position: absolute;
  border: 4px #B9FF82 solid;
`;

const Line2 = styled.div`
  width: 75.34px;
  height: 0;
  left: 122.21px;
  top: 258.06px;
  position: absolute;
  border: 4px #B9FF82 solid;
`;

const Line3 = styled.div`
  width: 83.20px;
  height: 0;
  left: 272.84px;
  top: 183.62px;
  position: absolute;
  border: 4px #B9FF82 solid;
`;

const IntroText = styled.div`
  position: absolute;
  left: 0;
  top: 100.80px;
  color: white;
  font-size: 41.76px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;

  div {
    margin-bottom: 20px;
  }
`;

const ActivityIntro = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

const ActivityIntroBox = styled.div`
  width: 227.92px;
  height: 43.69px;
  background: black;
  box-shadow: 1.74px 2.61px 7.13px rgba(0, 0, 0, 0.25);
  border-radius: 47.84px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #B9FF82;
  font-size: 20.88px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
`;

const WhatWeDo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #B9FF82;
  font-size: 20.88px;
  font-family: 'NeoDunggeunmo Pro', sans-serif;
`;


const cardAppear = (index: number) => keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px) translateX(${index * 50}px) rotate(${index * 5}deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0);
  }
`;

const CardSection = styled.div<{ visible: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  transition: opacity 0.5s ease;
  opacity: ${props => props.visible ? 1 : 0};
  overflow-x: auto;
  padding: 0 20px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(185, 255, 130, 0.5);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ActivityCard = styled.div<{ index: number; visible: boolean }>`
  flex: 0 0 300px;
  height: 400px;
  margin-right: 20px;
  background: linear-gradient(180deg, rgba(227.44, 255, 203.32, 0.80) 0%, rgba(199, 255, 150, 0.80) 64%, rgba(119.40, 153, 90, 0.80) 100%);
  border-radius: 20px;
  padding: 20px;
  transition: all 0.5s ease;
  opacity: ${props => props.visible ? 1 : 0};
  animation: ${props => props.visible ? cardAppear(props.index) : 'none'} 1s ease forwards;
  animation-delay: ${props => props.index * 0.1}s;
  scroll-snap-align: start;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardEmoji = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  color: black;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 18px;
  white-space: pre-line;
`;

export default About;