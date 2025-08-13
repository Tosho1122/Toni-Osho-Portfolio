import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechnologyBadge from './TechnologyBadge';

interface Technology {
  name: string;
  icon?: string;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'gray';
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
  video?: string;
  youtubeUrl?: string;
  technologies: Technology[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  longDescription,
  images,
  video,
  youtubeUrl,
  technologies,
  liveLink,
  githubLink
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  if (!isOpen) return null;

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : null;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal Content */}
          <motion.div 
            className="relative bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-6xl max-h-[90vh] overflow-hidden mx-4 border border-gray-700/50"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4 
            }}
          >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-blue-400/20 text-white hover:text-blue-400 rounded-full p-2 transition-all duration-300 border border-gray-600/50 hover:border-blue-400/50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
          {/* Header */}
          <motion.div 
            className="p-6 border-b border-gray-700/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - About and Details */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                {/* Long Description */}
                {longDescription && (
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">About This Project</h3>
                    <p className="text-gray-300 leading-relaxed">{longDescription}</p>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <TechnologyBadge
                        key={index}
                        name={tech.name}
                        icon={tech.icon}
                        color={tech.color}
                      />
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(liveLink || githubLink) && (
                  <div className="flex gap-4">
                    {liveLink && (
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600/80 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-blue-400/50 hover:border-blue-400"
                      >
                        View Live Project
                      </a>
                    )}
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/80 hover:bg-gray-700 text-white hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-gray-600/50 hover:border-blue-400/50"
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Right Column - Media */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                {/* Video */}
                {(video || youtubeUrl) && (
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">Demo Video</h3>
                    {youtubeUrl ? (
                      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={getYouTubeEmbedUrl(youtubeUrl) || ''}
                          title={`${title} Demo Video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : video && (
                      <video
                        controls
                        className="w-full rounded-lg shadow-lg"
                        poster={images[0]}
                      >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                )}

                {/* Image Gallery */}
                {images.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">Gallery</h3>
                    <div className="relative">
                      <img
                        src={images[currentImageIndex]}
                        alt={`${title} screenshot ${currentImageIndex + 1}`}
                        className="w-full aspect-video object-cover rounded-lg shadow-lg"
                      />
                      
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-blue-400/20 text-white hover:text-blue-400 rounded-full p-2 transition-all duration-300 border border-gray-600/50 hover:border-blue-400/50"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-blue-400/20 text-white hover:text-blue-400 rounded-full p-2 transition-all duration-300 border border-gray-600/50 hover:border-blue-400/50"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                    
                    {/* Thumbnail Navigation */}
                    {images.length > 1 && (
                      <div className="flex gap-2 mt-4 overflow-x-auto">
                        {images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                              index === currentImageIndex ? 'border-blue-400' : 'border-gray-600/50'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;