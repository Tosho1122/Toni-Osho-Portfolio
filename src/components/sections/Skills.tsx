import React from 'react';
import TechnologyBadge from '../ui/TechnologyBadge';

// Import icons
import ReactIcon from '../../assets/icons/React.png';
import TypeScriptIcon from '../../assets/icons/TypeScript.png';
import JavaScriptIcon from '../../assets/icons/JavaScript.png';
import HTMLIcon from '../../assets/icons/HTML.png';
import CSS3Icon from '../../assets/icons/CSS3.png';
import TailwindIcon from '../../assets/icons/Tailwind.png';
import ViteIcon from '../../assets/icons/Vite.png';
import NodeJSIcon from '../../assets/icons/NodeJS.png';

const Skills: React.FC = () => {
  const frontendTechnologies = [
    { name: 'React', icon: ReactIcon, color: 'blue' as const },
    { name: 'TypeScript', icon: TypeScriptIcon, color: 'blue' as const },
    { name: 'JavaScript', icon: JavaScriptIcon, color: 'yellow' as const },
    { name: 'Vite', icon: ViteIcon, color: 'purple' as const },
    { name: 'HTML5', icon: HTMLIcon, color: 'red' as const },
    { name: 'CSS3', icon: CSS3Icon, color: 'blue' as const },
    { name: 'Tailwind CSS', icon: TailwindIcon, color: 'blue' as const },
    { name: 'Node.js', icon: NodeJSIcon, color: 'green' as const },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Skills & Technologies
        </h2>
        
        {/* Frontend Development */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Frontend Development</h3>
          <div className="flex flex-wrap gap-3">
            {frontendTechnologies.map((tech, index) => (
              <TechnologyBadge
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;