import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  color?: string;
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  color = 'text-white', 
  size = 'medium', 
  showText = false
}) => {
  const sizeClasses = {
    small: {
      container: 'gap-4',
      logo: 'h-32 w-32',
      text: 'text-lg font-bold'
    },
    medium: {
      container: 'gap-6',
      logo: 'h-40 w-40',
      text: 'text-xl font-bold'
    },
    large: {
      container: 'gap-8',
      logo: 'h-48 w-48',
      text: 'text-2xl font-bold'
    }
  };

  return (
    <Link to="/" className={`flex items-center ${sizeClasses[size].container}`}>
      <div className="flex-shrink-0">
        <img 
          src="https://pub-74ed8caa62824c37a7a5529a092e89b1.r2.dev/BS%20-%20White.png" 
          alt="Bloom Sports Logo" 
          className={`${sizeClasses[size].logo} object-contain`} 
        />
      </div>
      {showText && (
        <span className={`${color} ${sizeClasses[size].text}`}>
          BLOOM SPORTS
        </span>
      )}
    </Link>
  );
};

export default Logo;
