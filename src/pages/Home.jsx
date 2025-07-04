import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

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
        </main>


        {/* Footer */}

        

    </div>
  )
}

export default Home;