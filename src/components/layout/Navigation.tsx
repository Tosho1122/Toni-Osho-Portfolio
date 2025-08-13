import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { Home, Code, Mail, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1116);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  
  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={16} /> },
    { name: 'Game Dev', href: '/gamedev', icon: <Code size={16} /> },
    { name: 'Full Stack', href: '/fullstack', icon: <Code size={16} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={16} /> }
  ];

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <nav>
          <div className="ml-10 flex items-baseline space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                variant="nav"
                icon={item.icon}
                disabled={location.pathname === item.href}
                isActive={location.pathname === item.href}>
                {item.name}
              </Button>
            ))}
          </div>
        </nav>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-3 rounded-full text-white hover:text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:scale-105"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isOpen && isMobile && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-700 z-[9999] shadow-lg">
          <div className="px-6 pt-6 pb-8 max-w-sm mx-auto">
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  disabled={location.pathname === item.href}
                  className={`flex items-center justify-center w-full px-6 py-4 rounded-xl transition-all duration-300 text-lg font-semibold group ${
                    location.pathname === item.href 
                      ? 'text-white bg-white/20 border-2 border-white cursor-not-allowed shadow-lg' 
                      : 'text-white hover:text-gray-300 hover:bg-white/10 active:bg-white/15 border-2 border-transparent hover:border-white/30'
                  }`}
                >
                  <span className="mr-3 transition-transform duration-300 group-hover:scale-110 group-active:scale-90">{item.icon}</span>
                  <span className="transition-transform duration-300 group-hover:scale-105 group-active:scale-95">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;