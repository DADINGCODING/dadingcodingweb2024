import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <HeaderContainer>
      <Logo src="/mainlogo2024.png" alt="DADINGCODING" onClick={handleLogoClick} />
      <NavWrapper>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/tutor">Tutor</NavLink>
          <NavLink to="/notice">Notice</NavLink>
        </NavLinks>
      </NavWrapper>
      <JoinUsButton>Join us!</JoinUsButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: black;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px 30px;
  margin-right: 20px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 33px;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

const JoinUsButton = styled.button`
  background-color: #B9FF82;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
`;

export default Header;