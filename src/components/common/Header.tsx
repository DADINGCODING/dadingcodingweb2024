import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>DADINGCODING</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/tutor">Tutor</NavLink>
        <NavLink to="/notice">Notice</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #B9FF82;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    color: #B9FF82;
  }
`;

export default Header;