import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const ContactSection = styled.div`
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h2`
  color: #B9FF82;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CreatorInfo = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContactSection>
        <ContactTitle>contact us</ContactTitle>
        <ContactLinks>
          <Link href="https://www.instagram.com/dadingcoding/" target="_blank">INSTAGRAM</Link>
          <Link href="https://www.donghaeng.seoul.kr/main.do" target="_blank">서울동행</Link>
          <Link href="#">회장 연락처</Link>
        </ContactLinks>
      </ContactSection>
      <CreatorInfo>
        <p>대딩코딩 4,5기 학생들이 만들었습니다.</p>
        <p>PM | 정유진</p>
        <p>FRONTEND | 김채영, 김나균, 정유진</p>
        <p>BACKEND | 박상영, 최원탁, 심다솔</p>
        <p>DESIGN | 황설휘</p>
      </CreatorInfo>
    </FooterContainer>
  );
};

export default Footer;