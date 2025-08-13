import React from 'react';

interface TechnologyBadgeProps {
  name: string;
  icon?: string;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'gray';
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ 
  name, 
  icon, 
  color = 'blue' 
}) => {
  const colorClasses = {
    blue: 'bg-blue-900/70 text-blue-400 border-blue-400/50',
    green: 'bg-green-900/70 text-green-400 border-green-400/50',
    purple: 'bg-purple-900/70 text-purple-400 border-purple-400/50',
    red: 'bg-red-900/70 text-red-400 border-red-400/50',
    yellow: 'bg-yellow-900/70 text-yellow-400 border-yellow-400/50',
    gray: 'bg-gray-800/70 text-gray-300 border-gray-400/50'
  };

  return (
    <span className={`
      inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border
      ${colorClasses[color]}
      transition-all duration-200 hover:shadow-md hover:scale-105
    `}>
      {icon && <img src={icon} alt={name} className="w-4 h-4 object-contain" />}
      {name}
    </span>
  );
};

export default TechnologyBadge;