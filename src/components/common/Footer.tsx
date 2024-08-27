import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLink href="https://www.instagram.com/dadingcoding" target="_blank" rel="noopener noreferrer">INSTAGRAM</FooterLink>
        <FooterLink href="https://www.seoulvolunteer.org" target="_blank" rel="noopener noreferrer">서울동행</FooterLink>
        <FooterLink href="mailto:president@dadingcoding.org">회장 연락처</FooterLink>
      </FooterContent>
      <FooterDivider />
      <Copyright>&copy; 2024 DADINGCODING. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 40px 0;
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

export default Footer;