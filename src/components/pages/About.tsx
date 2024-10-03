import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FloatingBubbles from '../common/FloatingBubbles';

const activityData = [
  { emoji: "🏫", title: "대딩코딩이란", content: "2021년 8월에 시작된\n코딩 교육 봉사 동아리입니다." },
  { emoji: "🚀", title: "우리의 비전", content: "프로그래밍 사고력 증진을 목표로,\n효과적인 코딩 교육을 제공합니다." },
  { emoji: "👨‍🏫", title: "튜터 활동", content: "매달 1회 온라인 회의,\n주 1회 2시간 수업 진행 및\n학기중 튜터활동" },
  { emoji: "💻", title: "수업 내용", content: "Python 기초부터\n간단한 알고리즘 문제풀이까지\n다양한 프로그램 제공." },
  { emoji: "📅", title: "7기 튜터 모집", content: "9월 6일~13일 서류접수,\n19일~22일 면접,\n23일 발표, 29일 OT(대면)" },
  { emoji: "🎓", title: "학생 모집", content: "9월 9일~20일 모집,\n10월 1일~11월 30일 중\n6주 수업 (2주 휴식)" },
  { emoji: "🎉", title: "활동 혜택", content: "봉사시간 인정(32시간, \n운영진 40시간),\n수료증 발급, 문화 혜택 제공" },
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
      <BackgroundImage src="/assets/images/about_circular.jpeg" alt="Background" />
      <Content>
        <IntroSection>
          <ActivityIntro>
            <ActivityIntroBox>대딩코딩 활동 소개</ActivityIntroBox>
          </ActivityIntro>
          <IntroText>
            <IntroLine>우리의 활동들을</IntroLine>
            <IntroLine>소개할게</IntroLine>
          </IntroText>
          <WhatWeDo>what we do!</WhatWeDo>
        </IntroSection>

        <CardSection ref={cardsRef} visible={cardsVisible}>
          {activityData.map((activity, index) => (
            <Card key={index}>
              <CardInner>
                <CardEmoji>{activity.emoji}</CardEmoji>
                <CardContent>
                  <CardTitle>{activity.title}</CardTitle>
                  <CardDescription>{activity.content}</CardDescription>
                </CardContent>
              </CardInner>
            </Card>
          ))}
        </CardSection>

        <SchoolSection>
          <SchoolTitle>협약 학교</SchoolTitle>
          <SchoolContainer>
            <SchoolCard>
              <SchoolImage src="/assets/images/school1.jpg" alt="동북고등학교" />
              <SchoolName>동북고등학교</SchoolName>
              
            </SchoolCard>
            <SchoolCard>
              <SchoolImage src="/assets/images/school2.jpg" alt="정신여고등학교" />
              <SchoolName>정신여자고등학교</SchoolName>
            </SchoolCard>
          </SchoolContainer>
        </SchoolSection>
      </Content>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #000000, #1a1a1a);
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 80px 20px;
  color: #fff;
`;

const IntroSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 836px;
  margin: 0 auto;
  text-align: left;
`;

const ActivityIntro = styled.div`
  margin-bottom: 40px;
`;

const ActivityIntroBox = styled.div`
  display: inline-block;
  padding: 10px 20px;
  background: black;
  color: #B9FF82;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  border-radius: 30px;
`;

const IntroText = styled.div`
  font-size: 42px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const IntroLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &::before {
    content: '';
    height: 4px;
    background-color: #B9FF82;
    margin-right: 10px;
    transition: width 0.5s ease-out;
  }

  &:nth-child(1)::before { width: 258px; }
  &:nth-child(2)::before { width: 75px; }
`;

const WhatWeDo = styled.div`
  color: #B9FF82;
  font-size: 21px;
  font-family: 'NeoDunggeunmo Pro', sans-serif;
  margin-top: 20px;
`;

const CardSection = styled.div<{ visible: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px 0;
  margin-top: 60px;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(50px)'};
`;

const Card = styled.div`
  flex: 0 1 calc(33.333% - 20px);
  min-width: 280px;
  height: 280px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardInner = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardEmoji = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

const CardContent = styled.div`
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  white-space: pre-line;
`;

const SchoolSection = styled.div`
  margin-top: 60px;
`;

const SchoolTitle = styled.h2`
  font-size: 32px;
  color: #B9FF82;
  margin-bottom: 20px;
`;

const SchoolContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SchoolCard = styled.div`
  width: 45%;
  margin-bottom: 20px;
  background: rgba(185, 255, 130, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

const SchoolImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const SchoolName = styled.h3`
  font-size: 24px;
  color: #fff;
  text-align: center;
`;

export default About;