import React from 'react';

type ButtonProps = {
  children: React.ReactNode;   // ✅ FIXED
  onClick?: () => void;
  variant?: 
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'about'
    | 'aboutOutline'
    | 'insurance'
    | 'carriers'
    | 'latestNews';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = '' 
}: ButtonProps) {

  const baseStyles =
    "flex items-center justify-center font-bold tracking-[0.015em] transition-all duration-300 active:scale-95";

  // 🔥 YOUR ORIGINAL STYLES (cleaned, not removed)
  const variants = {
    primary: "bg-[#17CFAD] hover:bg-[#12A88F] dark:text-white/80 text-zinc-900 hover:text-white shadow-md hover:shadow-lg rounded-xl",
    
    secondary: "bg-white border border-[#17CFAD] text-[#17CFAD] hover:bg-[#17CFAD] hover:text-white rounded-xl dark:text-zinc-50 dark:bg-[#17CFAD] ",
    
    outline: "border-2 border-zinc-400 dark:text-zinc-300 text-zinc-700 hover:bg-zinc-800 hover:text-white hover:border-zinc-800 rounded-xl dark:hover:border-zinc-400 ",
    
    about: "bg-white rounded-full font-bold hover:scale-105 dark:text-zinc-600 ",
    
    aboutOutline: "bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 ",
    
    insurance: "bg-gray-900 text-white rounded-full text-sm font-bold hover:bg-black hover:scale-105",
    
    carriers: "border border-gray-300 rounded-full text-sm font-bold hover:bg-gray-100 hover:scale-105",
    
    latestNews: "bg-[#17CFAD] text-white rounded-2xl font-bold flex items-center gap-2 hover:shadow-lg"
  };

  // ✅ ALL spacing handled here (no conflict anymore)
  const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}  dark:shadow-[0_0_20px_rgba(21,204,171,0.1)] dark:hover:shadow-[0_0_30px_rgba(23,200,170,0.2)]  `}
    >
      <span className="truncate">{children}</span>
    </button>
  );
}

export default Button;