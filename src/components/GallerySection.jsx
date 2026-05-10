import React from 'react';
import { motion } from 'framer-motion';


const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    title: 'Tech Symposium',
    colSpan: 2,
    rowSpan: 1
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    title: 'Hackathon 2025',
    colSpan: 1,
    rowSpan: 2
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
    title: 'Guest Lecture',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    title: 'Team Workshop',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    title: 'Project Expo',
    colSpan: 2,
    rowSpan: 1
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '8rem 0',
      backgroundColor: 'var(--bg-color)',
      overflow: 'hidden',
      width: '100%'
    }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '6rem', padding: '0 2rem' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem' }}>Our <span className="text-gradient">Gallery</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto' }}>
          Glimpses of the events, workshops, and late-night coding sessions that define our vibrant community.
        </p>
      </div>

      <div style={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}>
        {/* Row 1: Sliding Left */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            width: 'max-content',
            animation: 'slideLeft 60s linear infinite'
          }}>
            {[...galleryImages, ...galleryImages].map((image, i) => (
              <div key={i} className="gallery-slide" style={{
                width: '400px',
                height: '280px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border-color)',
                flexShrink: 0
              }}>
                <div style={{
                  width: '100%', height: '100%',
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
                }} className="gallery-bg" />
                <div className="gallery-overlay" style={{
                  position: 'absolute', inset: 0,
                  padding: '1.5rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  display: 'flex', alignItems: 'flex-end',
                  opacity: 0, transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ color: 'white', fontSize: '1.1rem', margin: 0, fontWeight: 600 }}>{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sliding Right */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            width: 'max-content',
            animation: 'slideRight 60s linear infinite'
          }}>
            {[...galleryImages, ...galleryImages].map((image, i) => (
              <div key={i} className="gallery-slide" style={{
                width: '400px',
                height: '280px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border-color)',
                flexShrink: 0
              }}>
                <div style={{
                  width: '100%', height: '100%',
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
                }} className="gallery-bg" />
                <div className="gallery-overlay" style={{
                  position: 'absolute', inset: 0,
                  padding: '1.5rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  display: 'flex', alignItems: 'flex-end',
                  opacity: 0, transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ color: 'white', fontSize: '1.1rem', margin: 0, fontWeight: 600 }}>{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>




      <style>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        @keyframes slideRight {
          0% { transform: translateX(calc(-50% - 0.75rem)); }
          100% { transform: translateX(0); }
        }
        .gallery-slide:hover .gallery-bg {
          transform: scale(1.1);
        }
        .gallery-slide:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-slide:hover {
          z-index: 10;
        }
        .gallery-slide {
          transition: all 0.3s ease;
        }
        .gallery-slide:hover {
          border-color: var(--brand-primary) !important;
        }
        div:has(> .gallery-slide):hover {
          animation-play-state: paused;
        }

        @media (max-width: 1024px) {
          .gallery-slide { width: 320px !important; height: 220px !important; }
        }
        @media (max-width: 768px) {
          .gallery-slide { width: 260px !important; height: 180px !important; }
          #gallery { padding: 4rem 0 !important; }
          .gallery-slide h3 { fontSize: 0.9rem !important; }
        }
      `}</style>



    </section>
  );
};

export default GallerySection;
