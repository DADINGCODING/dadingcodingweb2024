import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%,
  min-height: calc(100vh - 80px),
  background-color: black,
  display: flex,
  justify-content: center,
  align-items: center,
`

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1),
  backdrop-filter: blur(10px),
  border-radius: 10px,
  padding: 2rem,
  width: 500px,
`

const Title = styled.h2`
  color: white,
  font-size: 2rem,
  margin-bottom: 1rem,
`

const Form = styled.form`
  display: flex,
  flex-direction: column,
  gap: 1rem,
`

const Input = styled.input`
  padding: 0.5rem,
  border-radius: 5px,
  border: none,
`

const Button = styled.button`
  padding: 0.5rem,
  border-radius: 5px,
  border: none,
  background-color: #B9FF82,
  color: black,
  font-weight: bold,
  cursor: pointer,
`

const RadioGroup = styled.div`
  display: flex,
  gap: 1rem,
`

const Label = styled.label`
  color: white,
`

const Register: React.FC = () => {
  return (
    <PageContainer>
      <GlassCard>
        <Title>Sign In</Title>
        <Form>
          <Input type="text" placeholder="아이디" />
          <Input type="password" placeholder="비밀번호" />
          <Input type="password" placeholder="비밀번호 확인" />
          <Input type="text" placeholder="이름" />
          <Input type="tel" placeholder="전화번호" />
          <Input type="text" placeholder="생년월일 8자리" />
          <Input type="email" placeholder="이메일 주소" />
          <RadioGroup>
            <Label>
              <input type="radio" name="gender" value="male" /> 남성
            </Label>
            <Label>
              <input type="radio" name="gender" value="female" /> 여성
            </Label>
          </RadioGroup>
          <RadioGroup>
            <Label>
              <input type="radio" name="role" value="mentor" /> 멘토
            </Label>
            <Label>
              <input type="radio" name="role" value="mentee" /> 멘티
            </Label>
            <Label>
              <input type="radio" name="role" value="preMentor" /> 예비 멘토
            </Label>
          </RadioGroup>
          <Button type="submit">가입하기</Button>
        </Form>
      </GlassCard>
    </PageContainer>
  )
}

export default Register
export {}