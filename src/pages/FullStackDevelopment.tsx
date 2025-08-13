import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ui/ProjectModal';

const FullStackDevelopment: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  // Filter projects to show only Frontend category
  const frontendProjects = projects.filter(project => 
    project.categories.includes('Frontend')
  );

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Toni-Osho-Portfolio/Videos/Website Background Video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900/85 backdrop-blur-sm z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 min-h-screen pt-32">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frontend Development Portfolio
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Showcasing modern frontend applications with cutting-edge technologies and user-focused design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                images={project.images}
                technologies={project.technologies}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <ProjectModal
              isOpen={!!selectedProject}
              onClose={() => setSelectedProject(null)}
              title={selectedProject.title}
              description={selectedProject.description}
              longDescription={selectedProject.longDescription}
              images={selectedProject.images}
              video={selectedProject.video}
              youtubeUrl={selectedProject.youtubeUrl}
              technologies={selectedProject.technologies}
              liveLink={selectedProject.liveLink}
              githubLink={selectedProject.githubLink}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FullStackDevelopment;