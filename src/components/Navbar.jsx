import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import sntLogo from '../assets/SNT.jpeg';
import rgiptLogo from '../assets/RGIPT_logo.png';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem',
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--text-primary)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img src={rgiptLogo} alt="RGIPT Logo" style={{ height: '40px', width: 'auto', borderRadius: '4px' }} />
          <img src={sntLogo} alt="S&T Logo" style={{ height: '40px', width: 'auto', borderRadius: '6px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-heading)', lineHeight: 1.1, color: 'var(--text-primary)' }}>
              S&T
            </span>
            <span className="college-name" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: '0.5px', marginTop: '0.2rem' }}>
              Rajiv Gandhi Institute of Petroleum Technology
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          <a href="#about" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--brand-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>About</a>
          <a href="#clubs" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--brand-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Clubs</a>
          <a href="#urjotsav" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--brand-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Urjotsav</a>
          <a href="#achievements" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--brand-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Achievements</a>
          <a href="#team" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--brand-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Team</a>
          <a href="#contact" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--brand-primary)'} onMouseOut={e => e.target.style.color = 'inherit'}>Contact Us</a>
          
          <button 
            onClick={toggleTheme}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)',
              display: 'flex', alignItems: 'center', padding: '0.5rem', borderRadius: '50%',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--border-color)'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="mobile-menu-btn">
          <button 
            onClick={toggleTheme}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)',
              display: 'flex', alignItems: 'center', padding: '0.5rem'
            }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'var(--bg-color)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '2rem',
          padding: '6rem 2rem 2rem 2rem',
          overflowY: 'auto',
          boxSizing: 'border-box'
        }}>
          {/* Close Button inside Overlay */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            style={{ 
              position: 'absolute', 
              top: '1.5rem', 
              right: '1.5rem', 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              cursor: 'pointer', 
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              zIndex: 10000
            }}
          >
            <X size={24} />
          </button>

          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>About</a>
          <a href="#clubs" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>Clubs</a>
          <a href="#urjotsav" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>Urjotsav</a>
          <a href="#achievements" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>Achievements</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>Team</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>Contact Us</a>
          
          <div style={{ marginTop: '2rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button 
              onClick={toggleTheme}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '0.8rem 1.5rem', borderRadius: '50px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                width: 'fit-content'
              }}
            >
              {theme === 'dark' ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
            </button>
          </div>
        </div>
      )}



      <style>{`
        @media (max-width: 1024px) {
          .college-name { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
