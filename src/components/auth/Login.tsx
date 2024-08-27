// import React, { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Login: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     login(username, password);
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Log In</button>
//     </form>
//   );
// };

// export default Login;
import React from 'react';


const Login: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      {/* 로그인 폼은 나중에 구현할 예정 */}
    </div>
  );
};

export default Login;