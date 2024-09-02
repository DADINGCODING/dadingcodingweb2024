import React from 'react';
import styled from 'styled-components';

const Tutor: React.FC = () => {
  return (
    <TutorContainer>
      <h2>튜터 소개</h2>
      <TutorList>
        {/* 튜터 정보를 맵핑하여 표시 */}
        <TutorItem>
          <img src="/path-to-tutor-image.jpg" alt="Tutor Name" />
          <h3>튜터 이름</h3>
          <p>튜터 소개...</p>
        </TutorItem>
        {/* 추가 튜터 아이템 */}
      </TutorList>
    </TutorContainer>
  );
};

const TutorContainer = styled.div`
  // 스타일 추가
`;

const TutorList = styled.div`
  // 스타일 추가
`;

const TutorItem = styled.div`
  // 스타일 추가
`;

export default Tutor;