import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#about');
    }
  };

  return (
    <HeaderContainer>
      <Logo src="/mainlogo2024.png" alt="DADINGCODING" onClick={() => navigate('/')} />
      <NavWrapper>
        <NavLink to="/notice">Notice</NavLink>
        <NavLink to="/#about" onClick={handleAboutClick}>About</NavLink>
        <NavLink to="/tutor">Tutor</NavLink>
        <NavLink to="/login">Login</NavLink>
      </NavWrapper>
      <JoinUsButton onClick={() => navigate('/register')}>Join us!</JoinUsButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 368.28px;
  height: 45px;
  background-color: white;
  border-radius: 8px;
`;

const NavLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: black;
  text-decoration: none;
`;

const JoinUsButton = styled.button`
  width: 101.80px;
  height: 45px;
  background-color: rgb(186, 255, 130);
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 800;
  color: black;
  cursor: pointer;
`;

export default Header;