import React from 'react';
import { Zap, Calendar, Users, Trophy } from 'lucide-react';
import urj1 from '../assets/urjotsav/Urjotsav1.JPG';
import urj2 from '../assets/urjotsav/Urjotsav2.JPG';
import urj3 from '../assets/urjotsav/Urjotsav3.JPG';
import urj4 from '../assets/urjotsav/Urjotsav4.JPG';
import urj5 from '../assets/urjotsav/Urjotsav5.JPG';

const stats = [
  { icon: <Users size={28} />, value: '2000+', label: 'Participants' },
  { icon: <Trophy size={28} />, value: '₹5L+', label: 'Prize Pool' },
  { icon: <Calendar size={28} />, value: '3', label: 'Days of Events' },
  { icon: <Zap size={28} />, value: '20+', label: 'Events & Workshops' },
];

const highlights = [
  { title: 'Hackathon', desc: '24-hour non-stop coding marathon with real-world problem statements.' },
  { title: 'Robo Wars', desc: 'Battle-ready robots clash in an epic arena combat championship.' },
  { title: 'Project Expo', desc: 'Showcase your innovations to industry experts and win exciting prizes.' },
  { title: 'Tech Talks', desc: 'Inspiring keynotes from industry leaders and successful entrepreneurs.' },
  { title: 'E-Summit', desc: 'Entrepreneurship summit featuring startup pitching and networking.' },
  { title: 'Circuit Design', desc: 'Design and simulate complex circuits competing for technical accuracy.' },
];

const urjotsavPhotos = [
  { url: urj1, title: 'Main Stage Event' },
  { url: urj2, title: 'Hackathon Workshop' },
  { url: urj3, title: 'Robo Wars Arena' },
  { url: urj4, title: 'Project Exhibition' },
  { url: urj5, title: 'Cultural Night' },
];

const UrjotsavSection = () => {
  return (
    <section id="urjotsav" style={{
      display: 'block',
      padding: '8rem 0',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-color)',
      transition: 'background-color var(--transition-speed)'
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)',
        opacity: 0.05,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ padding: '0 2rem' }}>

        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-block', padding: '0.4rem 1.2rem',
            border: '1px solid var(--brand-primary)', borderRadius: '50px',
            fontSize: '0.85rem', letterSpacing: '3px', color: 'var(--brand-primary)',
            marginBottom: '1.5rem', textTransform: 'uppercase',
            opacity: 0.8
          }}>Annual Technical Fest · RGIPT</div>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1, marginBottom: '1.5rem' }}>
            <span className="text-gradient">URJOTSAV</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
            Where energy meets innovation. RGIPT's flagship technical festival brings together the brightest minds for three days of competition, creation, and celebration.
          </p>
        </div>

        {/* Stats */}
        <div className="fade-in stagger-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: '2rem 1rem', borderRadius: '16px',
              border: '1px solid var(--border-color)', background: 'var(--bg-secondary)',
              textAlign: 'center', transition: 'all 0.3s ease'
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--brand-primary)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ color: 'var(--brand-primary)', marginBottom: '0.8rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Event Highlights */}
        <div className="fade-in stagger-2" style={{ marginBottom: '5rem' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
            Event Highlights
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {highlights.map((event, i) => (
              <div key={i} className="glass" style={{
                padding: '2rem', borderRadius: '16px',
                transition: 'transform 0.3s, border-color 0.3s'
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--brand-primary)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.7rem', letterSpacing: '1px' }}>{event.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{event.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urjotsav Gallery - Moving Marquee */}
        <div className="fade-in stagger-3" style={{ marginTop: '4rem', overflow: 'hidden', padding: '2rem 0' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
            Moments from Urjotsav
          </h3>
          
          <div className="marquee-container" style={{ 
            position: 'relative', 
            width: '100vw', 
            left: '50%', 
            right: '50%', 
            marginLeft: '-50vw', 
            marginRight: '-50vw',
            overflow: 'hidden' 
          }}>
            <div className="marquee-track" style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              width: 'max-content',
              animation: 'marquee 40s linear infinite'
            }}>
              {[...urjotsavPhotos, ...urjotsavPhotos].map((photo, i) => (
                <div key={i} className="marquee-item" style={{
                  width: '350px',
                  height: '240px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--border-color)',
                  flexShrink: 0
                }}>
                  <div style={{
                    width: '100%', height: '100%',
                    backgroundImage: `url(${photo.url})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    transition: 'transform 0.5s ease'
                  }} className="urj-gallery-bg" />
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-item:hover .urj-gallery-bg { transform: scale(1.1); }


        @media (max-width: 1024px) {
          .marquee-item { width: 280px !important; height: 200px !important; }
        }
        @media (max-width: 768px) {
          .marquee-item { width: 220px !important; height: 160px !important; }
          #urjotsav { padding: 4rem 1rem !important; }
          .marquee-track { gap: 1rem !important; }
          #urjotsav .container > div:nth-child(2) { 
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          #urjotsav .container > div:nth-child(2) { 
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>



    </section>
  );
};

export default UrjotsavSection;
