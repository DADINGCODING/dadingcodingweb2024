import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    birthdate: '',
    email: '',
    gender: '',
    role: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    navigate('/login');
  };

  return (
    <RegisterSection>
      <BackgroundText>DADING CODING</BackgroundText>
      <FormContainer>
        <Title>Sign In</Title>
        <Underline />
        <FormBox>
          <UpperSection>
            <InputGroup>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                placeholder="아이디"
              />
              <DuplicateCheck>중복확인</DuplicateCheck>
            </InputGroup>
            <InputGroup>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="비밀번호"
              />
            </InputGroup>
            <InputGroup>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                placeholder="비밀번호 확인"
              />
            </InputGroup>
          </UpperSection>
          <LowerSection>
            <InputGroup>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="이름"
              />
            </InputGroup>
            <InputGroup>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="전화번호"
              />
            </InputGroup>
            <InputGroup>
              <Input
                type="text"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleInputChange}
                required
                placeholder="생년월일 8자리"
              />
            </InputGroup>
            <InputGroup>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="이메일 주소"
              />
            </InputGroup>
            <RadioGroup>
              <span>성별</span>
              <RadioButton>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
                남성
              </RadioButton>
              <RadioButton>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
                여성
              </RadioButton>
            </RadioGroup>
            <RoleButtons>
              <RoleButton
                active={formData.role === 'admin'}
                onClick={() => setFormData(prev => ({ ...prev, role: 'admin' }))}
              >
                운영진
              </RoleButton>
              <RoleButton
                active={formData.role === 'mentee'}
                onClick={() => setFormData(prev => ({ ...prev, role: 'mentee' }))}
              >
                멘티
              </RoleButton>
              <RoleButton
                active={formData.role === 'mentor'}
                onClick={() => setFormData(prev => ({ ...prev, role: 'mentor' }))}
              >
                예비 멘토
              </RoleButton>
            </RoleButtons>
          </LowerSection>
        </FormBox>
        <SubmitButton onClick={handleSubmit}>가입하기</SubmitButton>
      </FormContainer>
    </RegisterSection>
  );
};

const RegisterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: black;
  position: relative;
  overflow: hidden;
  padding-top: 80px; // Add padding to account for header
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 200px;
  font-family: 'Couture', sans-serif;
  font-weight: 700;
  color: rgba(185, 255, 130, 0.30);
  white-space: nowrap;
  line-height: 1.2;
  transform: rotate(-21.64deg);
  pointer-events: none;
  user-select: none;
  
  &::after {
    content: 'DADING CODING';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-21.64deg);
  }
`;

const FormContainer = styled.div`
  width: 509px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  z-index: 1;
  padding: 40px;
`;

const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Underline = styled.div`
  width: 73px;
  height: 2px;
  background-color: #B9FF82;
  margin-bottom: 20px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const UpperSection = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const LowerSection = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: white;
  border: none;
  border-bottom: 1px solid #D9D9D9;
  padding: 0 10px;
  font-size: 16px;
  color: black;

  &::placeholder {
    color: #7E7E7E;
  }

  &:focus {
    outline: none;
    border-bottom-color: #B9FF82;
  }
`;

const DuplicateCheck = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #B9FF82;
  border: none;
  border-radius: 50px;
  padding: 5px 10px;
  font-size: 10px;
  color: #323232;
  cursor: pointer;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;

  span {
    color: #7E7E7E;
  }
`;

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #515151;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
`;

const RoleButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const RoleButton = styled.button<{ active: boolean }>`
  flex: 1;
  height: 106px;
  background-color: ${props => props.active ? '#C7FF96' : 'black'};
  color: ${props => props.active ? 'black' : 'white'};
  border: none;
  border-radius: 13px;
  font-size: 13px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #C7FF96;
    color: black;
    transform: translateY(-5px);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 59px;
  background-color: #B9FF82;
  border: none;
  border-radius: 11px;
  color: black;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
`;

export default Register;