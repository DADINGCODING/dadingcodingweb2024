import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: black;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo to="/">Dading Coding</Logo>
      <Nav>
        <NavLink to="/notice">Notice</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/tutor">Tutor</NavLink>
        <NavLink to="/mypage">My Page</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;