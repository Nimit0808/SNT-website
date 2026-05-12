import React, { useState } from 'react';

import arinImg from '../assets/team/Arin_Kumar.JPG';
import atulImg from '../assets/team/Atul_Gadkoti.JPG';
import hrishirajImg from '../assets/team/Hrishiraj_Chowdhary.JPG';
import jiteshImg from '../assets/team/Jitesh_Sagar.JPG';
import moquaddasImg from '../assets/team/Moquaddas_Tanweer_Waris.JPG';
import upanshuImg from '../assets/team/Upanshu_Smit.JPG';
import vanshImg from '../assets/team/vansh_jain.jpg';
import amanImg from '../assets/team/Aman_Pal.png';
import architImg from '../assets/team/Archit_Dubey.png';
import bhargabImg from '../assets/team/Bhargab_Kashyap_Keot.png';
import jayantImg from '../assets/team/Jayant_Raj_Verma.png';
import khushiImg from '../assets/team/Khushi_Ambastha.jpeg';
import kshitizImg from '../assets/team/Kshitiz_Singh.JPG';
import kushagraImg from '../assets/team/Kushagra_Vishwakrma.png';
import nagoraoImg from '../assets/team/Nagorao_Dinker_Kute.png';
import omImg from '../assets/team/Om_Gaurav.png';
import ritikImg from '../assets/team/Ritik_Prajapati.png';
import shashankImg from '../assets/team/Shashank_Bindal.png';
import vibhorImg from '../assets/team/Vibhor_Agarwal.png';
import yashuImg from '../assets/team/Yashu_Raj.png';
import karanImg from '../assets/team/Dr_Karan_Malik.png';
import akashImg from '../assets/team/Dr_Akash_Yadav.png';
import amishiImg from '../assets/team/Amishi.jpg';
import gargiImg from '../assets/team/dr_Gargi_srivastava.jpg';


// Convener in centre, Co-Conveners on each side
const facultyAdvisors = [
  { name: 'Dr. Gargi Srivastava', role: 'Co-Convener', centre: false, image: gargiImg },
  { name: 'Dr. Karan Malik', role: 'Convener', centre: true, image: karanImg },
  { name: 'Dr. Akash Yadav', role: 'Co-Convener', centre: false, image: akashImg },
];

const studentCouncil = [
  { name: 'Saagar Jitesh Surendra', role: 'Joint Secretary', centre: false, image: jiteshImg },
  { name: 'Arin Kumar', role: 'General Secretary', centre: true, image: arinImg },
  { name: 'Hrishiraj Chowdhury', role: 'Joint Secretary', centre: false, image: hrishirajImg },
];

const clubHeads = [
  { name: 'Moquaddas Tanweer Waris', role: 'Tinkering Club Head', image: moquaddasImg },
  { name: 'Shashank Bindal', role: 'Kode Club Head', image: shashankImg },
  { name: 'Aman Pal', role: 'Sponsorship, Collaboration & Media Head', image: amanImg },
  { name: 'Jayant Raj Verma', role: 'Entrepreneurship Cell Head', image: jayantImg },
  { name: 'Kshitiz Singh', role: 'Makers Club Head', image: kshitizImg },
  { name: 'Amishi Baranwal', role: 'Design and Editorial Head', image: amishiImg },
];

const clubSubTeams = [
  {
    club: 'Tinkering Club',
    head: 'Moquaddas Tanweer Waris',
    coHeads: [
      { name: 'Archit Dubey', role: 'Aerial Robotics', image: architImg },
      { name: 'Nagorao Dinkar Kute', role: 'Competitive Bots', image: nagoraoImg },
      { name: 'Kushagra Vishwakarma', role: 'Electronics', image: kushagraImg },
      { name: 'Saurabh Arjun Singh', role: 'Mechanics' }
    ],
  },
  {
    club: 'Kode Club',
    head: 'Shashank Bindal',
    coHeads: [
      { name: 'Atul Gadkoti', role: 'DSA + CP', image: atulImg },
      { name: 'Upanshu Smit', role: 'AI/ML', image: upanshuImg },
      { name: 'Ritik Prajapati', role: 'Android', image: ritikImg },
      { name: 'Om Gaurav', role: 'Web Development', image: omImg }
    ],
  },
  {
    club: 'Sponsorship & Media',
    head: 'Aman Pal',
    coHeads: [
      { name: 'Bhargab Kashyap Keot', role: 'Co-Head', image: bhargabImg }
    ],
  },
  {
    club: 'E-Cell',
    head: 'Jayant Raj Verma',
    coHeads: [
      { name: 'Vansh Jain', role: 'Co-Head', image: vanshImg }
    ],
  },
  {
    club: 'Makers Club',
    head: 'Kshitiz Singh',
    coHeads: [
      { name: 'Aditya Tiwari', role: 'Co-Head' },
      { name: 'Vibhor Agarwal', role: 'Co-Head', image: vibhorImg }
    ],
  },
  {
    club: 'Design & Editorial',
    head: 'Amishi Baranwal',
    coHeads: [
      { name: 'Khushi Ambastha', role: 'Co-Head', image: khushiImg },
      { name: 'Yashu Raj', role: 'Co-Head', image: yashuImg }
    ],
  },
];

const Avatar = ({ name, image, size = 120 }) => {
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
      transition: 'all var(--transition-speed)',
      overflow: 'hidden'
    }}>
      {image ? (
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        initials
      )}
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
                <Avatar name={person.name} image={person.image} size={person.centre ? 110 : 90} />
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
                <Avatar name={person.name} image={person.image} size={person.centre ? 110 : 90} />
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
                <Avatar name={person.name} image={person.image} size={52} />
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
                      <Avatar name={club.head} image={clubHeads.find(h => h.name === club.head)?.image} size={40} />
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
                        <Avatar name={person.name} image={person.image} size={36} />
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
        @media (max-width: 1024px) {
          #team .container > div:last-child > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #team .container > div:nth-child(2) > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #team .container > div:last-child > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #team .container { padding: 0 1rem !important; width: 100% !important; box-sizing: border-box !important; }
          .team-glass-card { min-width: auto !important; width: 100% !important; }
          
          /* Panel styling */
          #team [style*="padding: 2rem"] { 
            padding: 1.5rem !important; 
            width: 100% !important; 
            box-sizing: border-box !important;
            margin: 0 !important;
          }
          
          /* Head/Co-head layout in panel */
          #team [style*="display: grid; grid-template-columns: repeat(auto-fit"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>


    </section>
  );
};

export default TeamSection;
