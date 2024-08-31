import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useRole } from '../../hooks/useRole';
import { User } from '../../types/user';  

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const { isAdmin } = useRole();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleAboutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#about');
    }
  };

  const handleAuthAction = () => {
    if (user) {
      logout();
    } else {
      navigate('/login');
    }
  };
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoWrapper onClick={handleLogoClick}>
          <Logo src="/mainlogo2024.png" alt="DADINGCODING" />
        </LogoWrapper>
        <NavWrapper>
          <NavLinks>
            <NavLink to="/notice">Notice</NavLink>
            <NavLink to="/#about" onClick={handleAboutClick}>About</NavLink>
            <NavLink to="/tutor">Tutor</NavLink>
            {user && <NavLink to="/mypage">My Page</NavLink>}
          </NavLinks>
        </NavWrapper>
        <RightSection>
          {user ? (
            <>
              <UserInfo>{`${user.name}${isAdmin ? '(관리자)' : ''} 님 안녕하세요!`}</UserInfo>
              <AuthButton onClick={handleAuthAction}>Logout</AuthButton>
            </>
          ) : (
            <>
              <AuthButton onClick={handleAuthAction}>Login</AuthButton>
              <JoinUsButton onClick={() => navigate('/joinus')}>Join us!</JoinUsButton>
            </>
          )}
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: black;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 10px 20px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserInfo = styled.div`
  font-size: 12px;
  color: white;
`;

const AuthButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  cursor: pointer;
`;

const JoinUsButton = styled.button`
  background-color: #B9FF82;
  color: #000;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
`;

export default Header;