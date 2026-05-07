import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
      padding: '0 2rem'
    }}>
      <div className="fade-in">
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          marginBottom: '1rem',
          lineHeight: 1.1
        }}>
          Science and <br />
          <span className="text-gradient">Technology Council</span>
        </h1>
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Dream it, Create it, Live it
        </p>
        
        <a href="#about" style={{
          padding: '1rem 2.5rem',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
          color: 'white',
          fontWeight: 600,
          fontSize: '1.1rem',
          display: 'inline-block',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'pointer'
        }}
        onMouseOver={e => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={e => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        }}>
          Explore Now
        </a>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '3rem',
        animation: 'bounce 2s infinite'
      }}>
        <ChevronDown size={32} color="var(--brand-primary)" />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
