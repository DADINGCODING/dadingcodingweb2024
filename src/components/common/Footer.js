import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-us">
          <h2>contact us</h2>
          <div className="contact-links">
            <Link to="/instagram">INSTAGRAM</Link>
            <Link to="/seoul-partner">서울동행</Link>
            <Link to="/president-contact">회장 연락처</Link>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="copyright">
          <p>&copy; 2024 DADING CODING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;