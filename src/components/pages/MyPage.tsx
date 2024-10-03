import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

const MyPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <MyPageContainer>
      <h2>마이 페이지</h2>
      {user ? (
        <UserInfo>
          <p>사용자명: {user.name}</p>
          <p>역할: {user.role}</p>
          {/* 추가적인 사용자 정보 표시 */}
        </UserInfo>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  // 스타일 추가
`;

const UserInfo = styled.div`
  // 스타일 추가
`;

export default MyPage;