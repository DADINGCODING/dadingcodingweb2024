import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { useRole } from '../../hooks/useRole';
import { Navigate } from 'react-router-dom';

const Notice: React.FC = () => {
  const { user } = useAuth();
  const { isAdmin } = useRole();
  const [posts, setPosts] = useState([
    { id: 1, title: '[공지] 게시글 제목', author: '홍길동', date: '2024-08-08' },
    { id: 2, title: '게시글 제목', author: '홍길동', date: '2024-08-08' },
    // ... more posts
  ]);
  const [showWriteForm, setShowWriteForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  // 로그인하지 않은 사용자 리디렉션
  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleWrite = () => {
    setShowWriteForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add new post logic here
    setShowWriteForm(false);
    setNewPost({ title: '', content: '' });
  };

  return (
    <NoticeContainer>
      <BlurBackground />
      <ContentWrapper>
        <Title>NOTICE</Title>
        <Table>
          <thead>
            <tr>
              <Th>게시일자</Th>
              <Th>제목</Th>
              <Th>작성자</Th>
              {isAdmin && <Th>관리</Th>}
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <Tr key={post.id}>
                <Td>{post.date}</Td>
                <Td>{post.title}</Td>
                <Td>{post.author}</Td>
                {isAdmin && (
                  <Td>
                    <Button onClick={() => {/* 수정 로직 */}}>수정</Button>
                    <Button onClick={() => {/* 삭제 로직 */}}>삭제</Button>
                  </Td>
                )}
              </Tr>
            ))}
          </tbody>
        </Table>
        {isAdmin && (
          <ButtonWrapper>
            <Button onClick={handleWrite}>글쓰기</Button>
          </ButtonWrapper>
        )}
        {showWriteForm && (
          <WriteForm onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="제목"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <TextArea
              placeholder="내용"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            />
            <Button type="submit">등록</Button>
          </WriteForm>
        )}
      </ContentWrapper>
    </NoticeContainer>
  );
};

const NoticeContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(107deg, rgba(185, 255, 130, 0.3) 0%, rgba(0, 239, 138, 0.3) 100%);
  filter: blur(100px);
  z-index: -1;
`;

const ContentWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  background-color: rgba(185, 255, 130, 0.5);
  color: #333;
  font-weight: 600;
`;

const Tr = styled.tr`
  background-color: rgba(255, 255, 255, 0.6);
`;

const Td = styled.td`
  padding: 15px 10px;
`;

const Button = styled.button`
  background-color: #B9FF82;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin-right: 10px;
  
  &:hover {
    background-color: #9AE065;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const WriteForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  min-height: 100px;
`;

export default Notice;