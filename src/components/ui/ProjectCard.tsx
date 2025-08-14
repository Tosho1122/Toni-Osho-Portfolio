import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnologyBadge from './TechnologyBadge';

interface Technology {
  name: string;
  icon?: string;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'gray';
}

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  images?: string[];
  technologies: Technology[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  thumbnail,
  images = [],
  technologies,
  onClick
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = thumbnail || images.length > 0;
  const displayImages = images.length > 0 ? images : (thumbnail ? [thumbnail] : []);

  useEffect(() => {
    if (displayImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [displayImages.length]);
  return (
    <motion.div
      onClick={onClick}
      className="group cursor-pointer bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700/50"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        borderColor: "rgba(96, 165, 250, 0.5)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.3 
      }}
    >
      {/* Thumbnail or Placeholder */}
      <motion.div className={`relative overflow-hidden ${hasImages ? 'h-48' : 'h-24'}`}>
        {hasImages ? (
          <>
            <motion.img
              src={displayImages[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Image indicator dots */}
            {displayImages.length > 1 && (
              <motion.div 
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {displayImages.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    animate={{ 
                      scale: index === currentImageIndex ? 1.2 : 1,
                      opacity: index === currentImageIndex ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </motion.div>
            )}
          </>
        ) : (
          <motion.div 
            className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <svg className="w-8 h-8 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-blue-400 text-sm font-medium">{title}</span>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Content */}
      <motion.div 
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <motion.h3 
          className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-300 mb-4 line-clamp-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {description}
        </motion.p>
        
        {/* Technologies */}
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          {technologies.slice(0, 3).map((tech, index) => (
            <TechnologyBadge
              key={index}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
          {technologies.length > 3 && (
            <motion.span 
              className="px-3 py-1 bg-gray-800/70 text-gray-300 rounded-full text-sm border border-gray-600/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              +{technologies.length - 3} more
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Bottom Border Animation */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};

export default ProjectCard;