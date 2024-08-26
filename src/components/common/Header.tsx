import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  display: flex,
  justify-content: space-between,
  align-items: center,
  padding: 1rem 2rem,
  background-color: black,
  position: fixed,
  top: 0,
  left: 0,
  right: 0,
  z-index: 1000,
`

const Logo = styled.img`
  height: 50px,
`

const Nav = styled.nav`
  display: flex,
  gap: 1rem,
`

const NavItem = styled(Link)`
  color: white,
  text-decoration: none,
  font-family: 'Couture', sans-serif,
  &:hover {
    text-decoration: underline,
  }
`

const JoinButton = styled(Link)`
  background-color: #B9FF82,
  color: black,
  border: none,
  padding: 0.5rem 1rem,
  border-radius: 8px,
  cursor: pointer,
  font-weight: bold,
  font-family: 'Couture', sans-serif,
  text-decoration: none,
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="/mainlogo2024.png" alt="Dading Coding Logo" />
      <Nav>
        <NavItem to="/notice">Notice</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/tutor">Tutor</NavItem>
        <NavItem to="/mypage">My page</NavItem>
        <NavItem to="/login">Login</NavItem>
        <NavItem to="/register">Sign Up</NavItem>
      </Nav>
      <JoinButton to="/join">Join us!</JoinButton>
    </HeaderContainer>
  )
}

export default Header