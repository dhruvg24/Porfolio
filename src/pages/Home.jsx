import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import Background from '../components/Background';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        
        {/* Theme toggle (dark/light themes) */}
        <ThemeToggle />


        {/* Background effects */}
        <Background />


        {/* Navbar */}



        {/* Main content */}


        {/* Footer */}

        

    </div>
  )
}

export default Home;