import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Notice from './components/pages/Notice';
import About from './components/pages/About';
import Tutor from './components/pages/Tutor';
import MyPage from './components/pages/MyPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <h1>Welcome to Dading Coding</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;