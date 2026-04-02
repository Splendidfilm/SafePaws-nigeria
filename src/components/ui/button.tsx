import React from 'react';

type ButtonProps = {
  type: string;           // This is actually the button text
  onClick?: () => void;   // Optional click handler
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

function Button({ 
  type, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = '' 
}: ButtonProps) {
  
  const baseStyles = "flex items-center justify-center rounded-xl font-bold tracking-[0.015em] transition-all duration-300 active:scale-95";

  const styles = {
    primary: "bg-[#17CFAD] hover:bg-[#12A88F] text-zinc-900 hover:text-white shadow-md hover:shadow-lg",
    secondary: "bg-white border border-[#17CFAD] text-[#17CFAD] hover:bg-[#17CFAD] hover:text-white",
    outline: "border-2 border-zinc-400 text-zinc-700 hover:bg-zinc-800 hover:text-white hover:border-zinc-800",
  };

  const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${styles[variant]} ${sizes[size]} ${className}`}
    >
      <span className="truncate">{type}</span>
    </button>
  );
}

export default Button;