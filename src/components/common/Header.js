import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/notice">Notice</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tutor">Tutor</Link></li>
          {isLoggedIn ? (
            <li><Link to="/mypage">MyPage</Link></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
      <Link to="/join">Join us!</Link>
    </header>
  );
};

export default Header;