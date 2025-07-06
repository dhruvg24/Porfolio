import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        
        {/* Theme toggle (dark/light themes) */}
        <ThemeToggle />


        {/* Background effects */}
        <Background />


        {/* Navbar */}
        <Navbar />


        {/* Main content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection/>
          <ContactSection />
        </main>


        {/* Footer */}

        

    </div>
  )
}

export default Home;