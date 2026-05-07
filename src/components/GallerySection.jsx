import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
    <section id="gallery" className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '6rem 2rem'
    }}>
      <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="text-gradient">Gallery</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
          Glimpses of the events, workshops, and late-night coding sessions that define our vibrant community.
        </p>
      </div>

      <div className="fade-in" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: '250px',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {galleryImages.map((image, index) => (
          <div 
            key={image.id}
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              gridColumn: `span ${image.colSpan}`,
              gridRow: `span ${image.rowSpan}`,
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-secondary)',
              cursor: 'pointer',
              transition: 'all var(--transition-speed)'
            }}
            className={`gallery-item stagger-${(index % 3) + 1}`}
          >
            {/* Image */}
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease',
            }} className="gallery-bg" />
            
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem 1.5rem 1.5rem 1.5rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
              transform: 'translateY(20px)',
              opacity: 0,
              transition: 'all 0.3s ease'
            }} className="gallery-overlay">
              <h3 style={{ color: 'white', fontSize: '1.2rem', margin: 0 }}>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gallery-item:hover .gallery-bg {
          transform: scale(1.05);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (max-width: 768px) {
          .fade-in > div {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 250px !important;
          }
          .gallery-item {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
