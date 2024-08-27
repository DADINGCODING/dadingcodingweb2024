import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLink href="https://www.instagram.com/dadingcoding">INSTAGRAM</FooterLink>
        <FooterLink href="https://www.seoulvolunteer.org">서울동행</FooterLink>
        <FooterLink href="mailto:president@dadingcoding.org">회장 연락처</FooterLink>
      </FooterContent>
      <FooterDivider />
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

  &:hover {
    color: #B9FF82;
  }
`;

const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid #fff;
  margin: 20px auto;
  width: 80%;
`;

export default Footer;