import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className={`bg-black/50 backdrop-blur-sm shadow-sm w-full fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;