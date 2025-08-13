import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'nav';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', icon, disabled, isActive }) => {
  const baseClasses = 'font-semibold transition-all duration-300 flex items-center justify-center whitespace-nowrap group';
  
  const variantClasses = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    nav: isActive 
      ? 'text-white px-6 py-3 border-b-2 border-white text-lg transform-gpu'
      : 'text-white hover:text-gray-300 hover:border-b-2 hover:border-white/70 px-6 py-3 border-b-2 border-transparent text-lg transform-gpu hover:scale-105 active:scale-95'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    >
      {variant === 'nav' && icon && (
        <span className="mr-3 transition-transform duration-300 group-hover:scale-110 group-active:scale-90">
          {icon}
        </span>
      )}
      <span className="transition-transform duration-300 group-active:scale-95">
        {children}
      </span>
    </button>
  );
};

export default Button;