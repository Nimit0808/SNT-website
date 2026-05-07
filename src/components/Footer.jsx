import React from 'react';
import sntLogo from '../assets/SNT.jpeg';
import rgiptLogo from '../assets/RGIPT_logo.png';

const Footer = () => {
  return (
    <footer id="contact" style={{
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 2rem',
      marginTop: '4rem',
      backgroundColor: 'var(--bg-color)',
      transition: 'background-color var(--transition-speed), border-color var(--transition-speed)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={rgiptLogo} alt="RGIPT Logo" style={{ height: '48px', width: 'auto', borderRadius: '4px' }} />
          <img src={sntLogo} alt="S&T Logo" style={{ height: '48px', width: 'auto', borderRadius: '8px' }} />
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: 'var(--text-primary)', lineHeight: 1 }}>S&T</h2>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Science and Technology Council</p>
            <p style={{ color: 'var(--text-secondary)', opacity: 0.8, margin: 0, fontSize: '0.8rem', marginTop: '0.2rem' }}>Rajiv Gandhi Institute of Petroleum Technology</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)' }}>
          <a href="https://www.instagram.com/snt_rgipt/" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', textDecoration: 'none', color: 'inherit' }} onMouseOver={e => e.target.style.color = 'var(--brand-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Instagram</a>
          <a href="https://www.linkedin.com/school/science-technical-committee-rgipt/" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', textDecoration: 'none', color: 'inherit' }} onMouseOver={e => e.target.style.color = 'var(--brand-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>LinkedIn</a>
          <a href="mailto:secyscitech@rgipt.ac.in" style={{ transition: 'color 0.2s', textDecoration: 'none', color: 'inherit' }} onMouseOver={e => e.target.style.color = 'var(--brand-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Email</a>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)', opacity: 0.6, fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} S&T | Rajiv Gandhi Institute of Petroleum Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
