import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingBubbles from './components/common/FloatingBubbles';
import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const App: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <FloatingBubbles />
      <Footer />
    </MainContainer>
  );
};

export default App;
