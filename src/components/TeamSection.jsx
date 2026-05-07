import React, { useState } from 'react';

// Convener in centre, Co-Conveners on each side
const facultyAdvisors = [
  { name: 'Dr. Gargi Shri Vastav', role: 'Co-Convener', centre: false },
  { name: 'Dr. Karan Malik', role: 'Convener', centre: true },
  { name: 'Dr. Akash Yadav', role: 'Co-Convener', centre: false },
];

const studentCouncil = [
  { name: 'Saagar Jitesh Surendra', role: 'Joint Secretary', centre: false },
  { name: 'Arin Kumar', role: 'General Secretary', centre: true },
  { name: 'Hrishiraj Chowdhury', role: 'Joint Secretary', centre: false },
];

const clubHeads = [
  { name: 'Moquaddas Tanweer Waris', role: 'Tinkering Club Head' },
  { name: 'Shashank Bindal', role: 'Kode Club Head' },
  { name: 'Aman Pal', role: 'Sponsorship, Collaboration & Media Head' },
  { name: 'Jayant Raj Verma', role: 'Entrepreneurship Cell Head' },
  { name: 'Kshitiz Singh', role: 'Makers Club Head' },
  { name: 'Amishi Baranwal', role: 'Design and Editorial Head' },
];

const clubSubTeams = [
  {
    club: 'Tinkering Club',
    head: 'Moquaddas Tanweer Waris',
    coHeads: [
      { name: 'Archit Dubey', role: 'Aerial Robotics' },
      { name: 'Nagorao Dinkar Kute', role: 'Competitive Bots' },
      { name: 'Kushagra Vishwakarma', role: 'Electronics' },
      { name: 'Saurabh Arjun Singh', role: 'Mechanics' }
    ],
  },
  {
    club: 'Kode Club',
    head: 'Shashank Bindal',
    coHeads: [
      { name: 'Atul Gadkoti', role: 'DSA + CP' },
      { name: 'Upanshu Smit', role: 'AI/ML' },
      { name: 'Ritik Prajapati', role: 'Android' },
      { name: 'Om Gaurav', role: 'Web Development' }
    ],
  },
  {
    club: 'Sponsorship & Media',
    head: 'Aman Pal',
    coHeads: [
      { name: 'Bhargab Kashyap Keot', role: 'Co-Head' }
    ],
  },
  {
    club: 'E-Cell',
    head: 'Jayant Raj Verma',
    coHeads: [
      { name: 'Vansh Jain', role: 'Co-Head' }
    ],
  },
  {
    club: 'Makers Club',
    head: 'Kshitiz Singh',
    coHeads: [
      { name: 'Aditya Tiwari', role: 'Co-Head' },
      { name: 'Vibhor Agarwal', role: 'Co-Head' }
    ],
  },
  {
    club: 'Design & Editorial',
    head: 'Amishi Baranwal',
    coHeads: [
      { name: 'Khushi Ambastha', role: 'Co-Head' },
      { name: 'Yashu Raj', role: 'Co-Head' }
    ],
  },
];

const Avatar = ({ name, size = 120 }) => {
  const initials = name.split(' ').filter(w => !w.startsWith('Dr')).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size > 100 ? '1.4rem' : '1.1rem',
      fontWeight: 700,
      color: 'var(--brand-primary)',
      letterSpacing: '2px',
      flexShrink: 0,
      transition: 'all var(--transition-speed)'
    }}>
      {initials}
    </div>
  );
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="team" style={{ display: 'block', padding: '8rem 2rem', backgroundColor: 'var(--bg-color)', transition: 'background-color var(--transition-speed)' }}>
      <div className="container">

        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-block', padding: '0.4rem 1.2rem',
            border: '1px solid var(--brand-primary)', borderRadius: '50px',
            fontSize: '0.85rem', letterSpacing: '3px', color: 'var(--brand-primary)',
            marginBottom: '1.5rem', textTransform: 'uppercase', opacity: 0.8
          }}>The People Behind S&T</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem' }}>
            Our <span className="text-gradient">Team</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Meet the dedicated faculty and students who lead the Science and Technology Council.
          </p>
        </div>

        {/* Faculty Advisors */}
        <div className="fade-in stagger-1" style={{ marginBottom: '6rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem'
          }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, var(--border-color))' }} />
            <h3 style={{ fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--brand-primary)', whiteSpace: 'nowrap' }}>
              Faculty Advisors
            </h3>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, var(--border-color))' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {facultyAdvisors.map((person, i) => (
              <div key={i} className={`fade-in stagger-${i + 1}`} style={{
                padding: person.centre ? '2.5rem 1.5rem' : '2rem 1.5rem',
                borderRadius: '20px',
                border: person.centre
                  ? '1px solid var(--brand-primary)'
                  : '1px solid var(--border-color)',
                background: person.centre
                  ? 'var(--bg-secondary)'
                  : 'var(--bg-color)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.2rem',
                transform: person.centre ? 'translateY(-16px)' : 'translateY(0)',
                boxShadow: person.centre ? '0 20px 50px rgba(0,0,0,0.1)' : 'none',
                transition: 'all var(--transition-speed)'
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--brand-primary)';
                if (!person.centre) e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = person.centre ? 'var(--brand-primary)' : 'var(--border-color)';
                if (!person.centre) e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Avatar name={person.name} size={person.centre ? 110 : 90} />
                <div>
                  <p style={{
                    fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'var(--brand-primary)', marginBottom: '0.4rem', fontWeight: 600
                  }}>
                    {person.role}
                  </p>
                  <h4 style={{ fontSize: person.centre ? '1.2rem' : '1.1rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                    {person.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Council */}
        <div className="fade-in stagger-2">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, var(--border-color))' }} />
            <h3 style={{ fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
              Student Council
            </h3>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, var(--border-color))' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {studentCouncil.map((person, i) => (
              <div key={i} className={`fade-in stagger-${i + 1}`} style={{
                padding: person.centre ? '2.5rem 1.5rem' : '2rem 1.5rem',
                borderRadius: '20px',
                border: person.centre
                  ? '1px solid var(--brand-primary)'
                  : '1px solid var(--border-color)',
                background: person.centre
                  ? 'var(--bg-secondary)'
                  : 'var(--bg-color)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.2rem',
                transform: person.centre ? 'translateY(-16px)' : 'translateY(0)',
                boxShadow: person.centre ? '0 20px 50px rgba(0,0,0,0.1)' : 'none',
                transition: 'all var(--transition-speed)'
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--brand-primary)';
                if (!person.centre) e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = person.centre ? 'var(--brand-primary)' : 'var(--border-color)';
                if (!person.centre) e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Avatar name={person.name} size={person.centre ? 110 : 90} />
                <div>
                  <p style={{
                    fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'var(--brand-primary)', marginBottom: '0.4rem', fontWeight: 600
                  }}>
                    {person.role}
                  </p>
                  <h4 style={{ fontSize: person.centre ? '1.2rem' : '1.1rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                    {person.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Club & Department Heads */}
        <div className="fade-in stagger-3" style={{ marginTop: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
            {clubHeads.map((person, i) => (
              <div key={i} className="glass" style={{
                padding: '1.5rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all var(--transition-speed)'
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--brand-primary)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <Avatar name={person.name} size={52} />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.3rem', fontWeight: 600, lineHeight: 1.4 }}>
                    {person.role}
                  </p>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                    {person.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Club Taskbar */}
        <div className="fade-in stagger-3" style={{ marginTop: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, var(--border-color))' }} />
            <h3 style={{ fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
              Team
            </h3>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, var(--border-color))' }} />
          </div>

          {/* Tab Bar */}
          <div style={{
            display: 'flex', gap: '0.5rem', padding: '0.5rem',
            background: 'var(--bg-secondary)', borderRadius: '14px',
            border: '1px solid var(--border-color)',
            marginBottom: '1.5rem', flexWrap: 'wrap'
          }}>
            {clubSubTeams.map((club, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{
                flex: 1, minWidth: '120px', padding: '0.7rem 1rem',
                borderRadius: '10px', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 600,
                letterSpacing: '0.5px', transition: 'all 0.2s ease',
                background: activeTab === i ? 'var(--brand-primary)' : 'transparent',
                color: activeTab === i ? 'white' : 'var(--text-secondary)',
              }}>
                {club.club}
              </button>
            ))}
          </div>

          {/* Expanded Panel */}
          {clubSubTeams.map((club, i) => (
            activeTab === i && (
              <div key={i} style={{
                padding: '2rem', borderRadius: '16px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                transition: 'all var(--transition-speed)'
              }}>
                {/* Club Head */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: '1rem', fontWeight: 600 }}>
                    Head
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div className="glass" style={{
                      display: 'flex', alignItems: 'center', gap: '0.8rem',
                      padding: '0.8rem 1.4rem', borderRadius: '12px',
                      border: '1px solid var(--brand-primary)',
                      minWidth: '200px'
                    }}>
                      <Avatar name={club.head} size={40} />
                      <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>{club.head}</span>
                    </div>
                  </div>
                </div>

                {/* Co-Heads */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: '1rem', fontWeight: 600 }}>
                    Co-Heads
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {club.coHeads.map((person, j) => (
                      <div key={j} className="glass" style={{
                        display: 'flex', alignItems: 'center', gap: '0.8rem',
                        padding: '0.75rem 1.2rem', borderRadius: '10px',
                        minWidth: '220px'
                      }}>
                        <Avatar name={person.name} size={36} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{person.name}</span>
                          <span style={{ color: 'var(--brand-primary)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.5px' }}>{person.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #team .container > div:nth-child(2) > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #team .container > div:last-child > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
