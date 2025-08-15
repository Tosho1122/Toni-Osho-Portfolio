import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { Home, Mail, Menu, X, Gamepad2, Globe, Laptop, FolderOpen } from 'lucide-react';
import logoImage from '/public/icons/ToniLogo.png';

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
          <motion.img 
            src={logoImage} 
            alt="Toni Logo" 
            className="h-8 w-auto ml-2 cursor-pointer"
            onClick={() => handleNavClick('/')}
            whileHover={{ opacity: 0.8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-3 rounded-full text-white hover:text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 mr-2"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div 
            className="fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-700 z-[9999] shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-6 pt-6 pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    disabled={location.pathname === item.href}
                    className={`flex flex-col items-center justify-center w-full px-6 py-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold group relative border border-gray-700 rounded-lg ${
                      location.pathname === item.href 
                        ? 'text-black cursor-not-allowed bg-white border-white shadow-lg' 
                        : 'text-white hover:text-gray-300 hover:border-gray-500 hover:shadow-md'
                    }`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                    whileHover={{ 
                      scale: location.pathname === item.href ? 1 : 1.05,
                      borderColor: location.pathname === item.href ? "white" : "rgb(107, 114, 128)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span 
                      className="mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.mobileIcon}
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;