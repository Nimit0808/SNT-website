import React from 'react';

const CouncilOverview = () => {
  return (
    <section id="about" className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '4rem 2rem'
    }}>
      <div className="fade-in">
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Us</h2>
        <div className="glass" style={{
          padding: '3rem',
          borderRadius: '24px',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '-50px',
            width: '150px',
            height: '150px',
            background: 'var(--brand-primary)',
            filter: 'blur(100px)',
            opacity: 0.5,
            zIndex: -1
          }}></div>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            The Science and Technology Council (S&T) is the epicenter of innovation and technological advancement at the Rajiv Gandhi Institute of Petroleum Technology. 
            Comprising four diverse clubs, we foster a culture of learning, building, and pushing the boundaries of what's possible. 
            Whether you are into robotics, coding, hardware, or building startups, there is a place for you to thrive and make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CouncilOverview;
