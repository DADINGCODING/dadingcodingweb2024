import React, { useEffect, useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`

const PageContainer = styled.div`
  background-color: black,
  color: white,
  min-height: 100vh,
  padding: 2rem,
`

const Title = styled.h1`
  font-size: 3rem,
  color: #B9FF82,
  margin-bottom: 2rem,
  animation: ${fadeIn} 1s ease-out,
`

const CardContainer = styled.div`
  display: flex,
  flex-wrap: wrap,
  justify-content: center,
  gap: 2rem,
  padding: 2rem 0,
`

const Card = styled.div<{ delay: number, isVisible: boolean }>`
  background: rgba(185, 255, 130, 0.2),
  backdrop-filter: blur(10px),
  border-radius: 10px,
  padding: 2rem,
  width: 300px,
  opacity: ${props => props.isVisible ? 1 : 0},
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(50px)'},
  transition: opacity 0.5s ease-out, transform 0.5s ease-out,
  transition-delay: ${props => props.delay}s,
`

const GreenCard = styled(Card)`
  background: #B9FF82,
  color: black,
`

const CardTitle = styled.h2`
  font-size: 1.5rem,
  margin-bottom: 1rem,
`

const CardContent = styled.p`
  font-size: 1rem,
`

const About: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards(prev => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  const cardData = [
    { title: '대딩코딩이란', content: '대딩코딩은 2021년 8월에 시작된 코딩 교육 봉사 동아리입니다. 교직이수를 희망하는 대학생과 교육봉사를 하고 싶은 대학생이 모여, 중·고등학생을 위한 코딩 교육을 제공하고 네트워킹합니다.' },
    { title: '우리의 비전', content: '대딩코딩은 프로그래밍 사고력 증진을 목표로, 초·중·고등학생을 대상으로 효과적인 코딩 교육을 제공합니다. 온라인과 대면 활동을 통해 창의적인 문제 해결 능력을 키웁니다. 튜터들 또한 튜터활동을 기획하고 봉사활동을 진행하면서 함께 배워갑니다.' },
    { title: '튜터 활동 | 봉사활동', content: '봉사활동 (비대면): 매달 1회 마지막주 월요일 23시에 약 30분 간 온라인 회의 참석, 교안 회의 및 대외활동(공모전) 관련 회의 참석, 주 1회 2시간 씩 수업 진행 및 활동일지 제출\n\n튜터 활동 (대면 & 비대면 선택): Tutor 탭에서 확인하세요, OT와 중간, 기말 발표는 필수적으로 참여(대면)해야합니다.' },
    { title: '봉사활동 수업 내용', content: 'Python 기초 과정부터 간단한 알고리즘 문제풀이 과정까지, 대딩코딩 2기에서 제작한 자체 교안으로 학습자의 수준에 맞춘 다양한 교육 프로그램을 제공합니다. 기본적인 프로그래밍 개념부터 Python 기초까지 차근차근 배울 수 있습니다.' },
    { title: '7기 튜터 안내', content: '서류 접수: 9월 6일 ~ 9월 13일 (회원가입 후, JOIN US란에서 접수)\n면접 일정 조정 및 추가 서류 접수: 9월 14일 ~ 9월 18일\n면접: 9월 19일 ~ 9월 22일\n합격자 발표: 9월 23일\nOT: 9월 29일(대면)' },
    { title: '학생 활동 | 교육', content: '모집 일정: 9월 9일 ~ 9월 20일\n수업 일정: 10월 1일 ~ 11월 30일 중 6주, 2주 휴동 예정\n대학생 튜터와 학생이 일주일에 하루 2시간동안 온라인으로 학습합니다.' },
    { title: '봉사활동 혜택', content: '서울동행 봉사활동 시간 인정(32시간) 및 수료증 발급, 임원진은 40시간 인정, 다양한 문화 혜택 제공. 대딩코딩에서의 활동은 여러분의 경력과 능력을 쌓을 수 있는 기회입니다.' },
  ]

  return (
    <PageContainer>
      <Title>About Us</Title>
      <CardContainer>
        {cardData.map((card, index) => (
          index % 2 === 0 ? (
            <GreenCard 
              key={index} 
              delay={index * 0.1} 
              isVisible={visibleCards.includes(index)}
              ref={el => cardRefs.current[index] = el}
            >
              <CardTitle>{card.title}</CardTitle>
              <CardContent>{card.content}</CardContent>
            </GreenCard>
          ) : (
            <Card 
              key={index} 
              delay={index * 0.1} 
              isVisible={visibleCards.includes(index)}
              ref={el => cardRefs.current[index] = el}
            >
              <CardTitle>{card.title}</CardTitle>
              <CardContent>{card.content}</CardContent>
            </Card>
          )
        ))}
      </CardContainer>
    </PageContainer>
  )
}

export default About