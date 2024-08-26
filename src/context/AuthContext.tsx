import React, { createContext, ReactNode, useContext, useState } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
  username: string | null
}

const initialAuthContext: AuthContextType = {
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
  username: null
}

const AuthContext = createContext<AuthContextType>(initialAuthContext)

export const useAuth = () => {
  return useContext(AuthContext)
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState<string | null>(null)

  const login = (inputUsername: string, password: string) => {
    // 임시로 username이 'admin'이고 password가 'password'일 때 로그인 성공으로 처리
    if (inputUsername === 'admin' && password === 'password') {
      setIsAuthenticated(true)
      setUsername(inputUsername)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUsername(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  )
}