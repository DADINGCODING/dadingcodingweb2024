import React, { useState } from 'react';
import styled from 'styled-components';

const PreTutorView: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section: string) => {
    setActiveSection(section === activeSection ? '' : section);
  };

  return (
    <ViewContainer>
      <h2>예비 튜터 대시보드</h2>
      <Section>
        <SectionTitle onClick={() => handleSectionClick('joinUs')}>
          Join Us 페이지
        </SectionTitle>
        {activeSection === 'joinUs' && (
          <SectionContent>
            <button>지원서 작성/수정</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('tutor')}>
          Tutor 페이지
        </SectionTitle>
        {activeSection === 'tutor' && (
          <SectionContent>
            <button>튜터 정보 보기</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('about')}>
          About 페이지
        </SectionTitle>
        {activeSection === 'about' && (
          <SectionContent>
            <button>About 페이지 보기</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('notice')}>
          Notice
        </SectionTitle>
        {activeSection === 'notice' && (
          <SectionContent>
            <button>공지사항 보기</button>
          </SectionContent>
        )}
      </Section>

      <Section>
        <SectionTitle onClick={() => handleSectionClick('myPage')}>
          My Page
        </SectionTitle>
        {activeSection === 'myPage' && (
          <SectionContent>
            <button>내 정보 보기</button>
            <button>지원서 상태 확인</button>
          </SectionContent>
        )}
      </Section>
    </ViewContainer>
  );
};

const ViewContainer = styled.div`
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

export default PreTutorView;