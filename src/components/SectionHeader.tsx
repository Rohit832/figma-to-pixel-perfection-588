import React from 'react';

interface SectionHeaderProps {
  icon?: string;
  iconAlt?: string;
  title: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  iconAlt = "",
  title,
  className = ""
}) => {
  return (
    <header className={`flex flex-col items-center text-center ${className}`}>
      {icon && (
        <img
          src={icon}
          alt={iconAlt}
          className="aspect-[1] object-contain w-16"
        />
      )}
      <div className="w-[655px] max-w-full text-[37px] font-bold mt-[33px]">
        <div className="max-md:max-w-full">
          {title}
        </div>
      </div>
    </header>
  );
};
