import React from 'react'
import styled from 'styled-components'
import FloatingBubbles from '../common/FloatingBubbles'

const PageContainer = styled.div`
  width: 100%,
  height: 100vh,
  background-color: black,
  position: relative,
  overflow: hidden,
`

const Content = styled.div`
  position: absolute,
  top: 50%,
  left: 50%,
  transform: translate(-50%, -50%),
  text-align: center,
  color: white,
  z-index: 1,
`

const Title = styled.h1`
  font-size: 4rem,
  margin-bottom: 1rem,
  font-family: 'Couture', sans-serif,
`

const Subtitle = styled.h2`
  font-size: 1.5rem,
  color: #C7FF96,
  font-family: 'Couture', sans-serif,
`

const Description = styled.p`
  font-size: 1rem,
  margin-top: 1rem,
`

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Content>
        <Subtitle>코딩 교육 봉사 동아리</Subtitle>
        <Title>DADING CODING</Title>
        <Description>코딩을 좋아한다면 누구나! 지금 바로 ✨코딩 선생님✨이 되어보세요</Description>
      </Content>
      <FloatingBubbles />
    </PageContainer>
  )
}

export default Home