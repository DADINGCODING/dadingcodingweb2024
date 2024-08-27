import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add other routes as needed */}
          </Routes>
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