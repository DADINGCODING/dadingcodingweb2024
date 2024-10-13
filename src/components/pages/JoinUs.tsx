import React from 'react';
//import styled from 'styled-components';
//import { useRole } from '../../hooks/useRole';
import { UserRole } from '../../types/user';
import { Navigate } from 'react-router-dom';
import PreTutorForm from '../forms/PreTutorForm'; // 예비 튜터 지원서 컴포넌트
// 다른 역할별 컴포넌트도 추가 가능 (TutorForm, AdminForm 등)

const JoinUs: React.FC = () => {
  //const { role } = useRole(); // 현재 사용자 역할 가져오기
  const role: UserRole = 'preTutor';

  if (!role) {
    return <Navigate to="/" replace />; // 역할이 없는 경우 홈으로 리디렉션
  }

  return (
    <div>
      {role === 'preTutor' && <PreTutorForm />} {/* 예비 튜터 */}
      {/*role === 'tutor' && <p>튜터 지원 페이지 준비 중입니다.</p>*/} {/* 다른 역할 자리 */}
      {/*role === 'admin' && <p>관리자 페이지 준비 중입니다.</p>*/} {/* 관리자 자리 */}
    </div>
  );
};

export default JoinUs;
