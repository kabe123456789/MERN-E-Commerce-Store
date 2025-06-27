import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail(''); // Clear the input field
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section about">
          <h3 className="footer-logo">Minaye</h3>
          <p>
            Empowering you through intentional living, self-discovery, and
            deeper connections.
          </p>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.803V4.697l-5.803 3.546z"/>
              </svg>
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/coaching">Coaching</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/minayedesign/" // Replace 'minayedesign' with actual Instagram username
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              IG
            </a>
            <a
              href="https://www.facebook.com/minayedesign/" // Replace 'minayedesign' with actual Facebook page name/ID
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              FB
            </a>
            <a
              href="https://www.youtube.com/@minayedesign" // Replace '@minayedesign' with actual YouTube channel handle (or /c/channelname or /user/username)
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              YT
            </a>
            <a
              href="https://www.tiktok.com/@minayedesign" // Replace '@minayedesign' with actual TikTok username
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              TT
            </a>
            <a
              href="https://t.me/absir10" // Replace 'minayedesign' with actual Telegram channel/group name
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              TG
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Minaye. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;