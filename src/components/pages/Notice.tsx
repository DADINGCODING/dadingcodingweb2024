import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { useRole } from '../../hooks/useRole';

const Notice: React.FC = () => {
  const { user } = useAuth();
  const { role } = useRole();
  const [posts, setPosts] = useState([
    { id: 1, title: '[공지] 게시글 제목', author: '홍길동', date: '2024-08-08' },
    { id: 2, title: '게시글 제목', author: '홍길동', date: '2024-08-08' },
    // ... more posts
  ]);
  const [showWriteForm, setShowWriteForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleWrite = () => {
    setShowWriteForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add new post logic here
    setShowWriteForm(false);
    setNewPost({ title: '', content: '' });
  };

  const canEdit = user && (role === 'admin' || role === 'tutor');

  return (
    <NoticeContainer>
      <ContentWrapper>
        <TitleBar>
          <Title>NOTICE</Title>
        </TitleBar>
        <TableWrapper>
          <Table>
            <thead>
              <Tr>
                <Th>게시일자</Th>
                <Th>제목</Th>
                <Th>작성자</Th>
                {canEdit && <Th>관리</Th>}
              </Tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <Tr key={post.id}>
                  <Td>{post.date}</Td>
                  <Td>{post.title}</Td>
                  <Td>{post.author}</Td>
                  {canEdit && (
                    <Td>
                      <Button onClick={() => {/* 수정 로직 */}}>수정</Button>
                      <Button onClick={() => {/* 삭제 로직 */}}>삭제</Button>
                    </Td>
                  )}
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
        {canEdit && (
          <WriteButtonWrapper>
            <WriteButton onClick={handleWrite}>
              <WriteIcon />
              <span>게시글 작성</span>
            </WriteButton>
          </WriteButtonWrapper>
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
  width: 100%;
  min-height: 100vh;
  background: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  width: 1049.55px;
  background: rgba(217, 217, 217, 0.10);
  border-radius: 61px;
  border: 3px solid white;
  backdrop-filter: blur(35px);
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const TitleBar = styled.div`
  width: 100%;
  height: 49.74px;
  background: linear-gradient(107deg, #B9FF82 0%, #00EF8A 100%);
  border-radius: 61px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: black;
  font-size: 24px;
  font-weight: 600;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  color: black;
  font-size: 24px;
  font-weight: 600;
`;

const Tr = styled.tr`
  border-bottom: 1.30px solid #E7E7E7;
`;

const Td = styled.td`
  padding: 10px;
  color: black;
  font-size: 22px;
  font-weight: 400;
`;

const WriteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const WriteButton = styled.button`
  background: linear-gradient(107deg, #B9FF82 0%, #00EF8A 100%);
  border: none;
  border-radius: 50%;
  width: 111.65px;
  height: 111.65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const WriteIcon = styled.div`
  width: 14.95px;
  height: 18.67px;
  border: 1px solid black;
  margin-bottom: 5px;
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

const Button = styled.button`
  background-color: #B9FF82;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  align-self: flex-end;
`;

export default Notice;