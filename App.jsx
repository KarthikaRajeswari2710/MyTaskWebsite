import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Offers from './components/Offers';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeModalCategory, setActiveModalCategory] = useState(null);

  // Sync dark mode class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handler to coordinate clicking suggestions/deals to open sub-service modals
  const handleSelectCategory = (categoryId) => {
    setActiveModalCategory(categoryId);
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* Premium background gradient layout */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main>
        <Hero onSelectCategory={handleSelectCategory} />
        
        <Services
          activeModalCategory={activeModalCategory}
          setActiveModalCategory={setActiveModalCategory}
        />
        
        <Offers onSelectCategory={handleSelectCategory} />
        
        <WhyChooseUs />
        
        <Stats />
        
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}

export default App;
