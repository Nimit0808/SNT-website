import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CouncilOverview from './components/CouncilOverview';
import ClubsSection from './components/ClubsSection';
import GallerySection from './components/GallerySection';
import UrjotsavSection from './components/UrjotsavSection';
import AchievementsSection from './components/AchievementsSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Update data-theme attribute on body when theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <CouncilOverview />
        <ClubsSection />
        <TeamSection />
        <UrjotsavSection />
        <AchievementsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
