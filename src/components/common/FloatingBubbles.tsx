import React from 'react';
import styled, { keyframes } from 'styled-components';

interface BubbleProps {
  size: number;
  top: string;
  left: string;
  delay: number;
}

const float = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
  100% { transform: translate(0, 0); }
`;

const Bubble = styled.div<BubbleProps>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #B9FF82, #7FFF00);
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.6;
  z-index: 1;
`;

const FloatingBubble: React.FC<BubbleProps> = (props) => {
  return <Bubble {...props} />;
};

export default FloatingBubble;