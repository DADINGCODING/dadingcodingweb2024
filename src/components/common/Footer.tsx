import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLink href="https://www.instagram.com/dadingcoding" target="_blank" rel="noopener noreferrer">INSTAGRAM</FooterLink>
        <FooterLink href="https://www.donghaeng.seoul.kr/main.do" target="_blank" rel="noopener noreferrer">서울동행</FooterLink>
        <FooterLink href="mailto:president@dadingcoding.org">회장 연락처</FooterLink>
      </FooterContent>
      <FooterDivider />
      <Copyright>&copy; 2024 DADINGCODING. All rights reserved.</Copyright>
      <AdditionalInfo>
        대딩코딩 웹은 4,5기 튜터의 프로젝트로 만들었습니다.<br />
        PM | 정유진 프론트엔드 | 정유진 김채영 김나균 백엔드 | 박상영 최원탁 심다솔
      </AdditionalInfo>
      <FontAttribution>
        Fonts made from <FontLink href="http://www.onlinewebfonts.com" target="_blank" rel="noopener noreferrer">Web Fonts</FontLink> is licensed by CC BY 4.0
      </FontAttribution>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #B9FF82;
  }
`;

const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid #333;
  margin: 20px auto;
  width: 80%;
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
`;

const AdditionalInfo = styled.div`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

const FontAttribution = styled.div`
  text-align: center;
  font-size: 12px;
  color: #666;
  margin-top: 10px;
`;

const FontLink = styled.a`
  color: #B9FF82;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;