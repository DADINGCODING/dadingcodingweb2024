import React from 'react';
import styled from 'styled-components';

const About: React.FC = () => {
  const activities = [
    { title: '대딩코딩이란', content: '대딩코딩은 2021년 8월에 시작된 코딩 교육 봉사 동아리입니다. 대학생들이 모여 초·중·고등학생들에게 코딩을 가르치며 함께 성장합니다.', image: '/images/activity1.jpg' },
    { title: '우리의 비전', content: '프로그래밍 사고력 증진을 목표로, 초·중·고등학생을 대상으로 효과적인 코딩 교육을 제공합니다. 우리는 코딩 교육을 통해 미래 인재를 양성하고자 합니다.', image: '/images/activity2.jpg' },
    { title: '튜터 활동', content: '매달 1회 마지막주 월요일 23시에 약 30분 간 온라인 회의 참석, 주 1회 2시간 씩 수업 진행. 튜터들은 학생들의 눈높이에 맞춰 코딩을 가르치며 리더십과 의사소통 능력을 키웁니다.', image: '/images/activity3.jpg' },
    { title: '봉사활동 수업 내용', content: 'Python 기초 과정부터 간단한 알고리즘 문제풀이 과정까지, 자체 교안으로 학습자의 수준에 맞춘 다양한 교육 프로그램을 제공합니다. 실습과 프로젝트 중심의 학습으로 실제 코딩 능력을 향상시킵니다.', image: '/images/activity4.jpg' },
  ];

  return (
    <AboutContainer>
      <Title>About Us</Title>
      <ActivityGrid>
        {activities.map((activity, index) => (
          <ActivityCard key={index} isEven={index % 2 === 0}>
            <ActivityImage src={activity.image} alt={activity.title} />
            <ActivityContent>
              <ActivityTitle>{activity.title}</ActivityTitle>
              <ActivityDescription>{activity.content}</ActivityDescription>
            </ActivityContent>
          </ActivityCard>
        ))}
      </ActivityGrid>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #B9FF82;
  text-align: center;
  margin-bottom: 40px;
`;

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`;

const ActivityCard = styled.div<{ isEven: boolean }>`
  display: flex;
  flex-direction: ${props => props.isEven ? 'row' : 'row-reverse'};
  background-color: #111;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ActivityImage = styled.img`
  width: 50%;
  object-fit: cover;
`;

const ActivityContent = styled.div`
  width: 50%;
  padding: 20px;
`;

const ActivityTitle = styled.h2`
  font-size: 24px;
  color: #B9FF82;
  margin-bottom: 10px;
`;

const ActivityDescription = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.6;
`;

export default About;