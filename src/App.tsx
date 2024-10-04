import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Notice from './components/pages/Notice';
import Dashboard from './components/pages/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import GlobalStyle from './styles/GlobalStyle';
import Tutor from './components/pages/Tutor';
import MyPage from './components/pages/MyPage';
import JoinUs from './components/pages/JoinUs';

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const isDarkMode = location.pathname === '/' || location.pathname === '/about';

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header isDarkMode={isDarkMode} />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/joinus" element={<JoinUs />} />

          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; // Header의 높이만큼 여백 추가
`;

export default App;