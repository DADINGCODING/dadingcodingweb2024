import React, { useState } from 'react';
import styled from 'styled-components';

const JoinUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 지원서 제출 로직 구현
    console.log('Application submitted:', { name, email, message });
  };

  return (
    <JoinUsContainer>
      <h2>대딩코딩에 지원하기</h2>
      <JoinUsForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="지원 동기"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">지원하기</button>
      </JoinUsForm>
    </JoinUsContainer>
  );
};

const JoinUsContainer = styled.div`
  // 스타일 추가
`;

const JoinUsForm = styled.form`
  // 스타일 추가
`;

export default JoinUs;