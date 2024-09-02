// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';

// const Login: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await login(username, password);
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <LoginSection>
//       <FormBox>
//         <LoginForm onSubmit={handleSubmit}>
//           <h2>Login</h2>
//           <InputBox>
//             <input
//               type="text"
//               required
//               value={username}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
//             />
//             <Label>Username</Label>
//           </InputBox>
//           <InputBox>
//             <input
//               type="password"
//               required
//               value={password}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
//             />
//             <Label>Password</Label>
//           </InputBox>
//           <ForgetRow>
//             <RememberMe>
//               <input type="checkbox" id="remember" />
//               <label htmlFor="remember">Remember me</label>
//             </RememberMe>
//             <ForgetLink href="#">Forget Password</ForgetLink>
//           </ForgetRow>
//           <LoginButton type="submit">Log in</LoginButton>
//           <RegisterRow>
//             <p>Don't have an account? <RegisterLink href="#">Register</RegisterLink></p>
//           </RegisterRow>
//         </LoginForm>
//       </FormBox>
//     </LoginSection>
//   );
// };
// const LoginSection = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   width: 100%;
//   background: url("http://codingstella.com/wp-content/uploads/2024/01/download-8-scaled.jpeg") no-repeat center center;
//   background-size: cover;
// `;

// const FormBox = styled.div`
//   position: relative;
//   width: 400px;
//   height: 450px;
//   background: transparent;
//   border: 2px solid rgba(255, 255, 255, 0.5);
//   border-radius: 20px;
//   backdrop-filter: blur(15px);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const LoginForm = styled.form`
//   width: 100%;
//   padding: 40px;

//   h2 {
//     font-size: 2em;
//     color: #fff;
//     text-align: center;
//     margin-bottom: 30px;
//   }
// `;

// const InputBox = styled.div`
//   position: relative;
//   margin: 30px 0;
//   width: 100%;
//   border-bottom: 2px solid #fff;

//   input {
//     width: 100%;
//     height: 50px;
//     background: transparent;
//     border: none;
//     outline: none;
//     font-size: 1em;
//     padding: 0 35px 0 5px;
//     color: #fff;

//     &:focus ~ label,
//     &:valid ~ label {
//       top: -5px;
//     }
//   }
// `;

// const Label = styled.label`
//   position: absolute;
//   top: 50%;
//   left: 5px;
//   transform: translateY(-50%);
//   color: #fff;
//   font-size: 1em;
//   pointer-events: none;
//   transition: 0.5s;
// `;

// const ForgetRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 10px 0 15px;
//   font-size: 0.9em;
//   color: #fff;
// `;

// const RememberMe = styled.div`
//   display: flex;
//   align-items: center;

//   input[type="checkbox"] {
//     margin-right: 6px;
//   }
// `;

// const ForgetLink = styled.a`
//   color: #fff;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const LoginButton = styled.button`
//   width: 100%;
//   height: 40px;
//   border-radius: 40px;
//   background: #fff;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   font-size: 1em;
//   font-weight: 600;
// `;

// const RegisterRow = styled.div`
//   font-size: 0.9em;
//   color: #fff;
//   text-align: center;
//   margin: 25px 0 10px;
// `;

// const RegisterLink = styled.a`
//   text-decoration: none;
//   color: #fff;
//   font-weight: 600;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// export default Login;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <LoginSection>
      <BackgroundText>DADING CODING</BackgroundText>
      <FormBox>
        <LoginForm onSubmit={handleSubmit}>
          <h2>Login</h2>
          <InputBox>
            <input
              type="text"
              required
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />
            <Label>Username</Label>
          </InputBox>
          <InputBox>
            <input
              type="password"
              required
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <Label>Password</Label>
          </InputBox>
          <ForgetRow>
            <RememberMe>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </RememberMe>
            <ForgetLink href="#">Forget Password</ForgetLink>
          </ForgetRow>
          <LoginButton type="submit">Log in</LoginButton>
          <RegisterRow>
            <p>Don't have an account? <RegisterLink to="/register">Register</RegisterLink></p>
          </RegisterRow>
        </LoginForm>
      </FormBox>
    </LoginSection>
  );
};

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: black;
  position: relative;
  overflow: hidden;
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 200px;
  font-family: 'Couture', sans-serif;
  font-weight: 700;
  color: rgba(185, 255, 130, 0.30);
  white-space: nowrap;
  line-height: 1.2;
  transform: rotate(-21.64deg);
  pointer-events: none;
  user-select: none;
  
  &::after {
    content: 'DADING CODING';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-21.64deg);
  }
`;

const FormBox = styled.div`
  position: relative;
  width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const LoginForm = styled.form`
  width: 100%;

  h2 {
    font-size: 2em;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const InputBox = styled.div`
  position: relative;
  margin: 30px 0;
  width: 100%;
  border-bottom: 2px solid #fff;

  input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: #fff;

    &:focus ~ label,
    &:valid ~ label {
      top: -5px;
    }
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1em;
  pointer-events: none;
  transition: 0.5s;
`;

const ForgetRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 15px;
  font-size: 0.9em;
  color: #fff;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 6px;
  }
`;

const ForgetLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background: #B9FF82;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  color: #000;
`;

const RegisterRow = styled.div`
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
`;

const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #B9FF82;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;