import React from 'react'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0% { transform: translateY(0px), }
  50% { transform: translateY(-20px), }
  100% { transform: translateY(0px), }
`

const Bubble = styled.div<{ size: number, top: number, left: number, delay: number }>`
  width: ${props => props.size}px,
  height: ${props => props.size}px,
  border-radius: 50%,
  background: linear-gradient(107deg, #B9FF82 0%, #00EF8A 100%),
  position: absolute,
  top: ${props => props.top}%,
  left: ${props => props.left}%,
  animation: ${float} 6s ease-in-out infinite,
  animation-delay: ${props => props.delay}s,
`

const FloatingBubbles: React.FC = () => {
  return (
    <>
      <Bubble size={200} top={10} left={10} delay={0} />
      <Bubble size={150} top={70} left={80} delay={1} />
      <Bubble size={100} top={40} left={60} delay={2} />
      <Bubble size={80} top={80} left={20} delay={3} />
    </>
  )
}

export default FloatingBubbles