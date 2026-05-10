import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const clubs = [
  {
    id: 1,
    name: 'TINKERING',
    desc: 'Explore the world of electronics, IoT, and embedded systems.',
    position: { top: '20%', left: '8%' },
    tags: ['Aerial Robotics', 'Competitive Bots', 'Electronics', 'Mechanics']
  },
  {
    id: 2,
    name: 'KODE',
    desc: 'Master algorithms, competitive programming, and software development.',
    position: { top: '20%', right: '8%' },
    tags: ['DSA + CP', 'AI/ML', 'Android', 'Web Development']
  },
  {
    id: 3,
    name: 'MAKERS',
    desc: 'Bring your ideas to life with 3D printing, CNC, and core hardware.',
    position: { bottom: '20%', left: '8%' },
    tags: ['3D Printing', 'CNC', 'Hardware']
  },
  {
    id: 4,
    name: 'E-CELL',
    desc: 'Foster entrepreneurship, build scalable startups, and connect with industry leaders.',
    position: { bottom: '20%', right: '8%' },
    tags: ['Startups', 'Business', 'Innovation']
  }
];

const Reticle = () => (
  <svg width="400" height="400" viewBox="0 0 100 100" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.6 }}>
    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border-color)" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="var(--border-color)" strokeWidth="0.5" />
    <line x1="0" y1="50" x2="10" y2="50" stroke="var(--text-secondary)" strokeWidth="0.5" />
    <line x1="90" y1="50" x2="100" y2="50" stroke="var(--text-secondary)" strokeWidth="0.5" />
    <line x1="50" y1="0" x2="50" y2="10" stroke="var(--text-secondary)" strokeWidth="0.5" />
    <line x1="50" y1="90" x2="50" y2="100" stroke="var(--text-secondary)" strokeWidth="0.5" />
  </svg>
);

const AbsoluteLeaf = ({ x, y, rotation, progress, triggerPoint, d = "M 0 0 L 2 0 C 5 -5, 11 -5, 15 0 C 11 5, 5 5, 2 0" }) => {
  const pathLength = useTransform(progress, [triggerPoint, triggerPoint + 0.15], [0, 1]);
  const opacity = useTransform(progress, [triggerPoint, triggerPoint + 0.01], [0, 1]);
  return (
    <motion.g transform={`translate(${x}, ${y}) rotate(${rotation})`}>
      <motion.path
        d={d}
        fill="transparent"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ pathLength, opacity, filter: "drop-shadow(0px 0px 5px var(--brand-primary))" }}
      />
    </motion.g>
  );
};

const ClubsSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end end"]
  });

  const stemOpacity = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

  return (
    <section 
      id="clubs" 
      ref={containerRef} 
      style={{ display: 'block', height: '400vh', position: 'relative', backgroundColor: 'var(--bg-color)', padding: 0, transition: 'background-color var(--transition-speed)' }}
    >
      <div className="clubs-sticky-wrapper" style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        
        <div className="plant-container" style={{ position: 'relative', width: '400px', height: '400px', zIndex: 10 }}>
          <Reticle />
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <motion.path
              d="M 50 62 L 50 45 Q 50 41 42 38"
              fill="none"
              stroke="var(--text-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress, opacity: stemOpacity, filter: "drop-shadow(0px 0px 5px var(--brand-primary))" }}
            />
            
            <AbsoluteLeaf x={50} y={57} rotation={170} progress={scrollYProgress} triggerPoint={0.05} />
            <AbsoluteLeaf x={50} y={50} rotation={-15} progress={scrollYProgress} triggerPoint={0.30} />
            <AbsoluteLeaf x={49.5} y={43} rotation={-40} progress={scrollYProgress} triggerPoint={0.55} />
            <AbsoluteLeaf 
              x={45.5} y={39.6} rotation={-160} 
              progress={scrollYProgress} triggerPoint={0.80} 
              d="M 0 -0.3 C 4 -6, 11 -6, 15 0 C 11 6, 4 6, 0 0.3"
            />
          </svg>
        </div>

        {clubs.map((club, index) => {
          const start = index * 0.25;
          const end = start + 0.20;
          
          let opacityDomain, opacityRange;
          if (index === 0) {
            opacityDomain = [0, 0.05, end, end + 0.05, 0.9, 1];
            opacityRange = [0, 1, 1, 0.2, 0.2, 1];
          } else if (index === 3) {
            opacityDomain = [start - 0.05, start, 1];
            opacityRange = [0.2, 1, 1];
          } else {
            opacityDomain = [start - 0.05, start, end, end + 0.05, 0.9, 1];
            opacityRange = [0.2, 1, 1, 0.2, 0.2, 1];
          }

          const opacity = useTransform(scrollYProgress, opacityDomain, opacityRange);

          const borderColor = useTransform(scrollYProgress, 
            [start, start + 0.05], 
            ['transparent', 'var(--brand-primary)']
          );

          const numberColor = useTransform(scrollYProgress,
            [start, start + 0.05],
            ['var(--text-secondary)', 'var(--brand-primary)']
          );
          
          const titleColor = useTransform(scrollYProgress,
            [start, start + 0.05],
            ['var(--text-secondary)', 'var(--brand-primary)']
          );
          
          return (
            <motion.div 
              key={club.id}
              className={`club-card club-card-${index}`}
              style={{
                position: 'absolute',
                ...club.position,
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: borderColor,
                opacity: opacity,
                zIndex: 20,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'background-color var(--transition-speed)'
              }}
            >
              <motion.div className="club-number" style={{
                position: 'absolute',
                top: '-24px',
                left: '-24px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-color)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: borderColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: numberColor,
                transition: 'background-color var(--transition-speed)'
              }}>
                0{club.id}
              </motion.div>

              <motion.h3 style={{ 
                fontSize: '1.4rem', 
                letterSpacing: '4px', 
                color: titleColor, 
                margin: '0 0 1rem 0', 
                textTransform: 'uppercase',
                fontWeight: '800'
              }}>
                {club.name}
              </motion.h3>
              
              <p className="club-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
                {club.desc}
              </p>

              <div className="club-tags" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {club.tags.map(tag => (
                  <div key={tag} style={{
                    padding: '0.4rem 0.8rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    color: 'var(--brand-primary)',
                    fontSize: '0.75rem',
                    textTransform: 'capitalize'
                  }}>
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
        
      </div>

      <style>{`
        .club-card {
          width: 350px;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
        }
        @media (max-width: 1024px) {
          .club-card { width: 300px; padding: 1.5rem; }
          .plant-container { transform: scale(0.8); }
        }
        @media (max-width: 768px) {
          #clubs { 
            height: auto !important; 
            padding: 4rem 1rem !important; 
          }
          .clubs-sticky-wrapper {
            position: relative !important;
            height: auto !important;
            flex-direction: column;
            gap: 3rem;
            overflow: visible !important;
          }
          .plant-container { 
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            transform: none !important;
            margin: 0 auto 3rem auto !important;
            width: 250px !important; 
            height: 250px !important; 
            opacity: 1 !important;
          }
          .club-card { 
            width: 100% !important; 
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            transform: none !important;
            opacity: 1 !important;
            margin-bottom: 0;
            box-sizing: border-box;
            border-color: var(--brand-primary) !important;
          }
          .club-number {
            top: -15px !important;
            left: -15px !important;
            width: 36px !important;
            height: 36px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>


    </section>

  );
};

export default ClubsSection;
