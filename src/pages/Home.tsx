import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ui/ProjectModal';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

// Preload critical images
const preloadImages = () => {
  const criticalImages = [
    '/Toni-Osho-Portfolio/images/toni.png',
    '/Toni-Osho-Portfolio/icons/React.png',
    '/Toni-Osho-Portfolio/icons/JavaScript.png',
    '/Toni-Osho-Portfolio/icons/TypeScript.png',
    '/Toni-Osho-Portfolio/icons/Unity.png',
    '/Toni-Osho-Portfolio/icons/csharp.png',
    '/Toni-Osho-Portfolio/icons/NodeJS.png',
    '/Toni-Osho-Portfolio/icons/Python.png'
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Animated Section Component
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    // Preload images when component mounts
    preloadImages();
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start fading in when user scrolls past 20% of viewport height
      // Fully opaque by 80% of viewport height
      const startFade = windowHeight * 0.2;
      const endFade = windowHeight * 0.8;
      
      if (scrollY <= startFade) {
        setScrollOpacity(0);
      } else if (scrollY >= endFade) {
        setScrollOpacity(1);
      } else {
        const opacity = (scrollY - startFade) / (endFade - startFade);
        setScrollOpacity(opacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Toni-Osho-Portfolio/Videos/Website Background Video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900/85 backdrop-blur-sm z-10"></div>
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-20 min-h-screen flex items-center justify-center px-8 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.h1 
            className="text-6xl lg:text-8xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="block sm:inline">Hi I'm, </span>
            <motion.span 
              className="text-blue-400 block sm:inline"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Toni Osho
            </motion.span>
          </motion.h1>
          <motion.div 
            className="text-xl lg:text-2xl text-gray-200 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <motion.span
              className="hover:text-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer transform-gpu hover:drop-shadow-lg"
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.hash = '#/fullstack'}
            >
              Full Stack Developer
            </motion.span>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <motion.span
              className="hover:text-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer transform-gpu hover:drop-shadow-lg"
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.hash = '#/gamedev'}
            >
              Game Developer
            </motion.span>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <motion.span
              className="hover:text-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer transform-gpu hover:drop-shadow-lg"
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.hash = '#/software'}
            >
              Software Developer
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll-based Background Overlay */}
      <div 
        className="fixed inset-0 z-15 pointer-events-none transition-all duration-300"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(17, 24, 39, ${0.25 * scrollOpacity}), 
            rgba(0, 0, 0, ${0.85 * scrollOpacity}) 50%, 
            rgba(17, 24, 39, ${0.95 * scrollOpacity}))`
        }}
      />
      
      {/* Content Sections */}
      <div className="relative z-20">
        <div className="max-w-1xl mx-auto px-6 py-12">

        {/* About Section */}
        <AnimatedSection>
          <section className="mb-16 bg-black/50 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center lg:text-left">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start">
              <motion.img
                src="/Toni-Osho-Portfolio/images/toni.png"
                alt="Toni Osho"
                className="w-64 h-64 rounded-full object-cover shadow-2xl"
                loading="eager"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* About Text */}
            <div className="lg:col-span-2">
              <p className="text-gray-200 text-lg leading-relaxed">
                Hello, I'm Toni Osho, a software engineer who loves creating digital experiences that matter. From full-stack web app development to interactive Unity game development, I love transforming challenging issues into elegant solutions.
                <br /><br />
                I'm driven to build technology that brings people together and makes their lives easier. I believe great software should be intuitive and feel obvious, silently doing its thing in the background while people do what they love.
                <br /><br />
                For me, programming is the perfect blend of technical precision and artistic liberty, where every line of code is an opportunity to craft something meaningful.
              </p>
            </div>
          </div>
          </section>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection>
          <section className="mb-16 bg-black/50 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-3xl font-semibold text-white mb-6 text-center lg:text-left">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter(project => [
                  "Scale the Depths",
                  "Hotel Management System", 
                  "Kopi - Video Duplicate Detector",
                  "Equipment Maintenance Tracker"
                ].includes(project.title))
                .map((project, index) => (
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
            <div className="flex justify-center mt-8">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 bg-gray-800/70 hover:bg-gray-700/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border border-gray-600/50 hover:border-white/50 hover:text-white hover:scale-105"
              >
                See All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
          <section className="mb-16 bg-black/50 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center lg:text-left">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Frontend Development */}
            <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Frontend Development</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { name: "React", icon: "/Toni-Osho-Portfolio/icons/React.png" },
                  { name: "JavaScript", icon: "/Toni-Osho-Portfolio/icons/JavaScript.png" },
                  { name: "TypeScript", icon: "/Toni-Osho-Portfolio/icons/TypeScript.png" },
                  { name: "Vite", icon: "/Toni-Osho-Portfolio/icons/Vite.png" },
                  { name: "HTML5", icon: "/Toni-Osho-Portfolio/icons/HTML.png" },
                  { name: "CSS3", icon: "/Toni-Osho-Portfolio/icons/CSS3.png" },
                  { name: "SCSS", icon: "/Toni-Osho-Portfolio/icons/SCSS.png" },
                  { name: "Tailwind", icon: "/Toni-Osho-Portfolio/icons/Tailwind.png" },
                  { name: "Bootstrap", icon: "/Toni-Osho-Portfolio/icons/Bootstrap.png" },
                  { name: "Blazor Server", icon: "/Toni-Osho-Portfolio/icons/Blazor.png" }
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center rounded-lg transition-all duration-200 aspect-square justify-center hover:scale-110">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-14 h-14 mb-1 object-contain pointer-events-none select-none"
                    />
                    <span className="text-gray-300 text-xs text-center font-medium pointer-events-none select-none">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Link to="/fullstack" className="inline-flex items-center gap-2 bg-gray-800/70 hover:bg-gray-700/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border border-gray-600/50 hover:border-white/50 hover:text-white hover:scale-105">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Backend & Database */}
            <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Backend & Database</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { name: "Node.js", icon: "/Toni-Osho-Portfolio/icons/NodeJS.png" },
                  { name: "Python", icon: "/Toni-Osho-Portfolio/icons/Python.png" },
                  { name: "FastAPI", icon: "/Toni-Osho-Portfolio/icons/Fast Api.png" },
                  { name: "ASP.NET Core", icon: "/Toni-Osho-Portfolio/icons/DotNet.png" },
                  { name: "C++", icon: "/Toni-Osho-Portfolio/icons/C++.png" },
                  { name: "Java", icon: "/Toni-Osho-Portfolio/icons/Java.png" },
                  { name: "MySQL", icon: "/Toni-Osho-Portfolio/icons/MySQL.png" },
                  { name: "SQL Server", icon: "/Toni-Osho-Portfolio/icons/SqlServer.png" },
                  { name: "Entity Framework", icon: "/Toni-Osho-Portfolio/icons/EntityFramework.png" }
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center rounded-lg transition-all duration-200 aspect-square justify-center hover:scale-110">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-14 h-14 mb-1 object-contain pointer-events-none select-none"
                    />
                    <span className="text-gray-300 text-xs text-center font-medium pointer-events-none select-none">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Game Development */}
            <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Game Development</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { name: "Unity", icon: "/Toni-Osho-Portfolio/icons/Unity.png" },
                  { name: "C#", icon: "/Toni-Osho-Portfolio/icons/csharp.png" },
                  { name: "PlasticSCM", icon: "/Toni-Osho-Portfolio/icons/PlasticSCM.png" },
                  { name: "FMOD", icon: "/Toni-Osho-Portfolio/icons/Fmod.png" }
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center rounded-lg transition-all duration-200 aspect-square justify-center hover:scale-110">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-14 h-14 mb-1 object-contain pointer-events-none select-none"
                    />
                    <span className="text-gray-300 text-xs text-center font-medium pointer-events-none select-none">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Link to="/gamedev" className="inline-flex items-center gap-2 bg-gray-800/70 hover:bg-gray-700/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border border-gray-600/50 hover:border-white/50 hover:text-white hover:scale-105">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Development Tools</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { name: "Git", icon: "/Toni-Osho-Portfolio/icons/Git.png" },
                  { name: "Visual Studio", icon: "/Toni-Osho-Portfolio/icons/VisualStudio.png" },
                  { name: "Linux", icon: "/Toni-Osho-Portfolio/icons/Linux.png" },
                  { name: "PyQt5", icon: "/Toni-Osho-Portfolio/icons/Qt.png" },
                  { name: "OpenCV", icon: "/Toni-Osho-Portfolio/icons/OpenCV.png" },
                  { name: "NumPy", icon: "/Toni-Osho-Portfolio/icons/NumPy.png" }
                ].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center rounded-lg transition-all duration-200 aspect-square justify-center hover:scale-110">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-14 h-14 mb-1 object-contain pointer-events-none select-none"
                    />
                    <span className="text-gray-300 text-xs text-center font-medium pointer-events-none select-none">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
          </section>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection>
          <section className="mb-16 bg-black/50 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-white mb-4 text-center lg:text-left">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Software Developer Lead",
                company: "Glass Gecko Games",
                period: "July 2022 - Present",
                description: "Lead and manage a team of software engineers in Unity game development projects, providing technical guidance, code reviews, and mentorship. Architect software development workflows and manage business operations including client communications and project scoping."
              },
              {
                title: "Software Developer Intern",
                company: "Smart Data Warehouse",
                period: "February 2024 - May 2025",
                description: "Developed full-stack applications using React frontend with backend API integration. Implemented RESTful API endpoints for data visualization dashboards and collaborated with senior developers using Agile methodologies."
              },
              {
                title: "Information Technology Support Team Lead",
                company: "Rhema-Gold Physiotherapy",
                period: "December 2023 - Present",
                description: "Coordinated and maintained accurate office records, ensuring data integrity. Supported company operations by managing technical tasks and conducted website reviews and optimization."
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                <p className="text-blue-400 font-medium">{job.company}</p>
                <p className="text-gray-400 text-sm mb-3">{job.period}</p>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
          </section>
        </AnimatedSection>

    
        {/* Call to Action */}
        <AnimatedSection>
          <section className="text-center bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-800/70 hover:bg-gray-700/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border border-gray-600/50 hover:border-white/50 hover:text-white hover:scale-105">
              Contact Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          </section>
        </AnimatedSection>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
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
  );
};

export default Home;