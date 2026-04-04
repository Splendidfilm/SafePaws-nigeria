import React from 'react';

type ButtonProps = {
  type: string;           // This is actually the button text
  onClick?: () => void;   // Optional click handler
  variant?: 'primary' | 'secondary' | 'outline'|'about'|'aboutOutline'| 'insurance'| 'carriers';
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
  
  const baseStyles = "flex items-center justify-center  font-bold tracking-[0.015em] transition-all duration-300 active:scale-95";

  const styles = {
    primary: "bg-[#17CFAD] hover:bg-[#12A88F] text-zinc-900 hover:text-white shadow-md hover:shadow-lg rounded-xl ",
    secondary: "bg-white border border-[#17CFAD] text-[#17CFAD] hover:bg-[#17CFAD] hover:text-white rounded-xl ",
    outline: "border-2 border-zinc-400 text-zinc-700 hover:bg-zinc-800 hover:text-white hover:border-zinc-800 rounded-xl ",
    aboutOutline:"bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors",
    about:"bg-white text-[#17CFAD] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95",
    insurance:'bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-black hover:scale-105 active:scale-100',
    carriers:'border border-gray-300 px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-100 hover:scale-105 active:scale-100',
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