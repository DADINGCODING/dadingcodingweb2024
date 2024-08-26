import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: black,
  padding: 2rem,
  color: white,
`

const ContactSection = styled.div`
  margin-bottom: 1rem,
`

const ContactTitle = styled.h2`
  color: #B9FF82,
  font-size: 2rem,
  margin-bottom: 1rem,
`

const ContactLinks = styled.div`
  display: flex,
  justify-content: start,
  gap: 6rem,
`

const Link = styled.a`
  color: white,
  text-decoration: none,
  font-size: 1.25rem,
  &::after {
    content: '',
    display: block,
    width: 100%,
    height: 1px,
    background-color: white,
    margin-top: 0.5rem,
  }
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContactSection>
        <ContactTitle>contact us</ContactTitle>
        <ContactLinks>
          <Link href="#">INSTAGRAM</Link>
          <Link href="#">서울동행</Link>
          <Link href="#">회장 연락처</Link>
        </ContactLinks>
      </ContactSection>
    </FooterContainer>
  )
}

export default Footer