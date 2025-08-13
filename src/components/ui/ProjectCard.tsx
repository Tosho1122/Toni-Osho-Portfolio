import React, { useState, useEffect } from 'react';
import TechnologyBadge from './TechnologyBadge';

interface Technology {
  name: string;
  icon?: string;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'gray';
}

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
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
  const displayImages = images.length > 0 ? images : [thumbnail];

  useEffect(() => {
    if (displayImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [displayImages.length]);
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-700/50 hover:border-blue-400/50"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-48">
        <img
          src={displayImages[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Image indicator dots */}
        {displayImages.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {displayImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech, index) => (
            <TechnologyBadge
              key={index}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
          {technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-800/70 text-gray-300 rounded-full text-sm border border-gray-600/50">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Border Animation */}
      <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ProjectCard;