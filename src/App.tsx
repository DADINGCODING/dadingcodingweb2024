import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import MyPage from './components/pages/MyPage'
import Notice from './components/pages/Notice'
import Tutor from './components/pages/Tutor'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const AppContainer = styled.div`
  min-height: 100vh,
  display: flex,
  flex-direction: column,
`

const MainContent = styled.main`
  flex: 1,
`

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App