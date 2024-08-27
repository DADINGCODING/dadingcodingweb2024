import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import GlobalStyle from './styles/GlobalStyle';

const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Tutor = lazy(() => import('./components/pages/Tutor'));
const Notice = lazy(() => import('./components/pages/Notice'));

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <MainContent>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tutor" element={<Tutor />} />
              <Route path="/notice" element={<Notice />} />
            </Routes>
          </Suspense>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000000;
  color: white;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; // Adjust based on your header height
`;

export default App;