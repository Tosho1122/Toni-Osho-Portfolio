import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { Home, Mail, Menu, X, Gamepad2, Globe, Laptop, FolderOpen } from 'lucide-react';

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
    { name: 'Home', href: '/', icon: <Home size={16} />, mobileIcon: <Home size={24} /> },
    { name: 'Game Dev', href: '/gamedev', icon: <Gamepad2 size={16} />, mobileIcon: <Gamepad2 size={24} /> },
    { name: 'Full Stack', href: '/fullstack', icon: <Globe size={16} />, mobileIcon: <Globe size={24} /> },
    { name: 'Software Dev', href: '/software', icon: <Laptop size={16} />, mobileIcon: <Laptop size={24} /> },
    { name: 'All Projects', href: '/projects', icon: <FolderOpen size={16} />, mobileIcon: <FolderOpen size={24} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={16} />, mobileIcon: <Mail size={24} /> }
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
        <div className="flex justify-between items-center w-full px-4">
          <img 
            src="public/icons/ToniLogo.png" 
            alt="Toni Logo" 
            className="h-8 w-auto ml-2 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => handleNavClick('/')}
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-3 rounded-full text-white hover:text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:scale-105 mr-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isOpen && isMobile && (
        <div className="fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-700 z-[9999] shadow-lg">
          <div className="px-6 pt-6 pb-8">
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  disabled={location.pathname === item.href}
                  className={`flex flex-col items-center justify-center w-full px-6 py-4 transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold group relative border border-gray-700 rounded-lg ${
                    location.pathname === item.href 
                      ? 'text-black cursor-not-allowed bg-white border-white shadow-lg transform scale-105' 
                      : 'text-white hover:text-gray-300 hover:border-gray-500 hover:shadow-md'
                  }`}
                >
                  <span className="mb-2 transition-transform duration-300 group-hover:scale-110 group-active:scale-90">{item.mobileIcon}</span>
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