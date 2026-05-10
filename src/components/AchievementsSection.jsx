import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Medal, Globe } from 'lucide-react';
import ach1 from '../assets/achievements/Achivement1.png';
import ach2 from '../assets/achievements/Achivement2.png';
import ach3 from '../assets/achievements/Achivement3.jpg';
import ach4 from '../assets/achievements/Achivement4.jpg';
import ach5 from '../assets/achievements/Achivement5.png';
import ach6 from '../assets/achievements/Achivement6.png';


const achievements = [
  {
    icon: <Award size={32} />,
    year: '2024',
    title: 'Smart India Hackathon (SIH) 2024 Winners',
    subtitle: 'Software Edition',
    desc: "Two teams, Team Error404 and Team Mini Juris 2.0, secured the winner's position in the SIH 2024 Software Edition, each winning a prize of Rs. 1,00,000.",
  },
  {
    icon: <Star size={32} />,
    year: '2025',
    title: 'National Entrepreneurship Challenge Finalists',
    subtitle: 'Top 10 Finalists',
    desc: 'Our E-Cell team secured a place among the top 10 finalists at E-Summit 2025, IIT Bombay, after achieving the 35th rank among over 1000 teams nationwide.',
  },
  {
    icon: <Globe size={32} />,
    year: '2024',
    title: 'GirlScript Summer of Code 2024',
    subtitle: 'Top 50 Globally',
    desc: 'Aditya Narayan (Rank 16th) and Maana Ajmera (Rank 39th) achieved positions in the Top 50 contributors globally out of over 17,000 participants.',
  },
  {
    icon: <Medal size={32} />,
    year: '2024',
    title: 'AlgoUniversity Technology Fellowship 2024',
    subtitle: 'Top 70 Nationwide',
    desc: 'Aditya Narayan was selected among the top 70 students nationwide for this prestigious, fully funded mentorship program.',
  },
  {
    icon: <Award size={32} />,
    year: '2024',
    title: 'KodeKurrent Hackathon Runner-Up',
    subtitle: '1st Runner-Up',
    desc: "Team Mavericks secured the 1st Runner-Up position in the Trading Bot Competition by building a fully automated crypto trading bot.",
  },
  {
    icon: <Star size={32} />,
    year: '2024',
    title: 'Techkriti-IIT Kanpur CTF Competition',
    subtitle: '14th Rank',
    desc: 'A 1st-year team secured an impressive 14th rank out of 100+ teams in the Cybersecurity (CTF) Competition.',
  },
];

const achievementPhotos = [
  { url: ach1, title: 'SIH 2024 Winners' },
  { url: ach2, title: 'Team S&T at IIT Bombay' },
  { url: ach3, title: 'Hackathon Night' },
  { url: ach4, title: 'Code Gladiators' },
  { url: ach5, title: 'Award Ceremony' },
  { url: ach6, title: 'Robotics Workshop' },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" style={{
      display: 'block',
      padding: '8rem 0',
      backgroundColor: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background-color var(--transition-speed)'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)', width: '1px', height: '100%',
        background: 'linear-gradient(to bottom, transparent, var(--border-color), transparent)',
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
          }}>Hall of Fame</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem' }}>
            Our <span className="text-gradient">Achievements</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Milestones that define our legacy of excellence across competitions, research, and innovation.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="fade-in stagger-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {achievements.map((item, i) => (
            <div key={i} style={{
              position: 'relative', padding: '2rem', borderRadius: '20px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-color)', overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'var(--brand-primary)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '1px' }}>{item.year}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--brand-primary)', marginBottom: '1.5rem' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>{item.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--brand-primary)', marginBottom: '1rem', fontWeight: 600, opacity: 0.8 }}>{item.subtitle}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--brand-primary), transparent)', opacity: 0.3, borderRadius: '0 0 20px 20px' }} />
            </div>
          ))}
        </div>

        {/* Achievements Gallery - Continuous Marquee */}
        <div className="fade-in stagger-2" style={{ marginTop: '4rem', overflow: 'hidden' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
            Moments of Glory
          </h3>
          
          <div className="ach-marquee-container" style={{ 
            position: 'relative', 
            width: '100vw', 
            left: '50%', 
            right: '50%', 
            marginLeft: '-50vw', 
            marginRight: '-50vw',
            overflow: 'hidden' 
          }}>
            <div className="ach-marquee-track" style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              width: 'max-content',
              animation: 'achMarquee 50s linear infinite'
            }}>
              {[...achievementPhotos, ...achievementPhotos].map((photo, i) => (
                <div key={i} className="ach-gallery-item" style={{
                  width: '400px',
                  height: '280px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--border-color)',
                  flexShrink: 0,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                }}>
                  <div className="ach-gallery-bg" style={{
                    width: '100%', height: '100%',
                    backgroundImage: `url(${photo.url})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    transition: 'transform 0.5s ease'
                  }} />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>



      <style>{`
        @keyframes achMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        .ach-marquee-track:hover { animation-play-state: paused; }
        .ach-gallery-item:hover .ach-gallery-bg { transform: scale(1.1); }

        @media (max-width: 1024px) {

          .ach-gallery-item { width: 320px !important; height: 240px !important; }
        }
        @media (max-width: 768px) {
          .ach-gallery-item { width: 260px !important; height: 180px !important; }
          #achievements { padding: 4rem 0 !important; }
        }
      `}</style>



    </section>
  );
};

export default AchievementsSection;
