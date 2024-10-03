import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { useRole } from '../../hooks/useRole';

interface HeaderProps {
  isDarkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  const { user } = useAuth();
  const { role } = useRole();

  return (
    <HeaderContainer isDark={isDarkMode}>
      <Logo isDark={isDarkMode}>
        <img src={isDarkMode ? "/assets/images/logo_dark.png" : "/assets/images/logo_light.png"} alt="Dading Coding Logo" />
      </Logo>
      <Nav>
        <NavLink to="/notice" isDark={isDarkMode}>Notice</NavLink>
        <NavLink to="/about" isDark={isDarkMode}>About</NavLink>
        <NavLink to="/tutor" isDark={isDarkMode}>Tutor</NavLink>
        {user && <NavLink to="/dashboard" isDark={isDarkMode}>Dashboard</NavLink>}
        {user && <NavLink to="/mypage" isDark={isDarkMode}>My page</NavLink>}
      </Nav>
      <UserInfo isDark={isDarkMode}>
        {user ? (
          <>
            <span>{user.name}({role}) 님 안녕하세요!</span>
            <NavLink to="/logout" isDark={isDarkMode}>Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" isDark={isDarkMode}>Login</NavLink>
            <NavLink to="/register" isDark={isDarkMode}>Register</NavLink>
          </>
        )}
      </UserInfo>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.isDark ? '#333' : '#f8f9fa'};
  color: ${props => props.isDark ? '#fff' : '#333'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.div<{ isDark: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  img {
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)<{ isDark: boolean }>`
  text-decoration: none;
  color: ${props => props.isDark ? '#fff' : '#333'};
  &:hover {
    text-decoration: underline;
  }
`;

const UserInfo = styled.div<{ isDark: boolean }>`
  font-size: 0.9rem;
  color: ${props => props.isDark ? '#fff' : '#333'};
  display: flex;
  gap: 1rem;
`;