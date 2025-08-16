import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { findProjectBySlug } from '../utils/projectUtils';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ui/ProjectModal';

const AllProjects: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug?: string }>();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Sync modal state with URL parameter
  useEffect(() => {
    if (projectSlug) {
      const project = findProjectBySlug(projectSlug);
      if (project) {
        setSelectedProject(project);
      } else {
        // Invalid slug, redirect to projects page
        navigate('/projects', { replace: true });
      }
    } else {
      setSelectedProject(null);
    }
  }, [projectSlug, navigate]);

  // Handle opening a project modal
  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    navigate(`/projects/${project.slug}`);
  };

  // Handle closing the modal
  const handleModalClose = () => {
    setSelectedProject(null);
    navigate('/projects');
  };
  
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
              All Projects
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A comprehensive showcase of all my development work across game development, full-stack applications, and software engineering projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                images={project.images}
                technologies={project.technologies}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <ProjectModal
              isOpen={!!selectedProject}
              onClose={handleModalClose}
              title={selectedProject.title}
              description={selectedProject.description}
              longDescription={selectedProject.longDescription}
              images={selectedProject.images}
              video={selectedProject.video}
              youtubeUrl={selectedProject.youtubeUrl}
              technologies={selectedProject.technologies}
              liveLink={selectedProject.liveLink}
              githubLink={selectedProject.githubLink}
              slug={selectedProject.slug}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;