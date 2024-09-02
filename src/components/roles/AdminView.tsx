import React, { useState } from 'react';
import styled from 'styled-components';

const AdminView: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section: string) => {
    setActiveSection(section === activeSection ? '' : section);
  };

  return (
    <AdminViewContainer>
      <h2>관리자 대시보드</h2>
      
      <Section>
        <SectionTitle onClick={() => handleSectionClick('joinUs')}>
          Join Us 페이지 관리
        </SectionTitle>
        {activeSection === 'joinUs' && (
          <SectionContent>
            <button>페이지 내용 수정</button>
            <button>지원서 양식 수정</button>
            <button>지원자 목록 보기</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('tutor')}>
          Tutor 페이지 관리
        </SectionTitle>
        {activeSection === 'tutor' && (
          <SectionContent>
            <button>튜터 정보 수정</button>
            <button>새 튜터 추가</button>
            <button>튜터 목록 관리</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('about')}>
          About 페이지 관리
        </SectionTitle>
        {activeSection === 'about' && (
          <SectionContent>
            <button>페이지 내용 수정</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('notice')}>
          Notice 관리
        </SectionTitle>
        {activeSection === 'notice' && (
          <SectionContent>
            <button>새 공지 작성</button>
            <button>공지 목록 관리</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('myPage')}>
          My Page / 지원서 관리
        </SectionTitle>
        {activeSection === 'myPage' && (
          <SectionContent>
            <button>사용자 지원서 조회</button>
            <button>지원서 상태 변경</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('studyLog')}>
          학습일지 관리
        </SectionTitle>
        {activeSection === 'studyLog' && (
          <SectionContent>
            <button>학습일지 조회</button>
            <button>학습일지 수정/삭제</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('userManagement')}>
          사용자 관리
        </SectionTitle>
        {activeSection === 'userManagement' && (
          <SectionContent>
            <button>사용자 목록 보기</button>
            <button>사용자 역할 변경</button>
            <button>사용자 삭제</button>
          </SectionContent>
        )}
      </Section>
    </AdminViewContainer>
  );
};

const AdminViewContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const SectionTitle = styled.h3`
  background-color: #f0f0f0;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const SectionContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 8px 12px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export default AdminView;