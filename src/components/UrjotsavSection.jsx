import React from 'react';
import { Zap, Calendar, Users, Trophy } from 'lucide-react';

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
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', title: 'Opening Ceremony', span: 2 },
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80', title: 'Hackathon Night', span: 1 },
  { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', title: 'Robo Wars', span: 1 },
  { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80', title: 'Tech Talks', span: 1 },
  { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', title: 'Project Expo', span: 2 },
];

const UrjotsavSection = () => {
  return (
    <section id="urjotsav" style={{
      display: 'block',
      padding: '8rem 2rem',
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

      <div className="container">

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

        {/* Urjotsav Gallery */}
        <div className="fade-in stagger-3">
          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
            Moments from Urjotsav
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridAutoRows: '220px', gap: '1rem' }}>
            {urjotsavPhotos.map((photo, i) => (
              <div key={i} className="urj-gallery-item" style={{
                borderRadius: '14px', overflow: 'hidden', position: 'relative',
                gridColumn: photo.span > 1 ? `span ${photo.span}` : 'span 1',
                border: '1px solid var(--border-color)'
              }}>
                <div className="urj-gallery-bg" style={{
                  width: '100%', height: '100%',
                  backgroundImage: `url(${photo.url})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  transition: 'transform 0.5s ease'
                }} />
                <div className="urj-gallery-overlay" style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '1.5rem 1rem 1rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                  opacity: 0, transform: 'translateY(10px)', transition: 'all 0.3s ease'
                }}>
                  <p style={{ color: 'white', fontWeight: 600, margin: 0 }}>{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .urj-gallery-item:hover .urj-gallery-bg { transform: scale(1.05); }
        .urj-gallery-item:hover .urj-gallery-overlay { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 768px) {
          .urj-gallery-item { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
};

export default UrjotsavSection;
