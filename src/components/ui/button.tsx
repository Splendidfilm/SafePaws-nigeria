import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
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
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-[0.01em] transition-all duration-200 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#17CFAD]';

  const variants = {
    // Solid teal — main CTA
    primary:
      'bg-[#17CFAD] dark:hover:text-white text-[#0a3d30] hover:bg-[#11b898] rounded-xl ' +
      'shadow-[0_2px_10px_rgba(23,207,173,0.30)] hover:shadow-[0_4px_18px_rgba(23,207,173,0.40)] ' +
      'dark:shadow-[0_2px_12px_rgba(23,207,173,0.20)] dark:hover:shadow-[0_4px_22px_rgba(23,207,173,0.32)]',

    // Teal outline — secondary action
    secondary:
      'bg-transparent border-[1.5px] border-[#17CFAD] text-[#17CFAD] rounded-xl ' +
      'hover:bg-[#17CFAD] hover:text-[#0a3d30] ' +
      'dark:text-[#17CFAD] dark:hover:text-[#0a3d30]',

    // Neutral outline — tertiary / ghost
    outline:
      'bg-transparent border-[1.5px] border-zinc-300 text-zinc-700 rounded-xl ' +
      'hover:bg-zinc-900 hover:text-white hover:border-zinc-900 ' +
      'dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:border-zinc-500 dark:hover:text-white',

    // White pill — used on teal/colored hero backgrounds
    about:
      'bg-white text-[#0a2e28] rounded-full ' +
      'shadow-[0_2px_8px_rgba(0,0,0,0.10)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.14)] hover:scale-[1.03]',

    // Transparent outline pill — paired with `about` on colored backgrounds
    aboutOutline:
      'bg-transparent border-2 border-white/85 text-white rounded-full ' +
      'hover:bg-white/20 hover:border-white',

    // Dark pill — insurance / high-contrast CTA
    insurance:
      'bg-zinc-900 text-white rounded-full text-sm ' +
      'hover:bg-black hover:scale-[1.03] ' ,
      // 'dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white',

    // Light outline pill — carriers / low-emphasis
    carriers:
      'bg-transparent border-[1.5px] border-zinc-300 text-zinc-700 rounded-full text-sm ' +
      'hover:bg-zinc-100 hover:scale-[1.03] ' +
      'dark:border-zinc-600 dark:text-zinc-700 dark:hover:bg-zinc-800',

    // Teal rounded — news / article CTAs with icon slot
    latestNews:
      'bg-[#17CFAD] text-[#0a3d30] rounded-2xl ' +
      'shadow-[0_2px_10px_rgba(23,207,173,0.25)] hover:shadow-[0_6px_22px_rgba(23,207,173,0.38)] ' +
      'dark:shadow-[0_2px_10px_rgba(23,207,173,0.18)]',

      inquiry:'h-5 w-5 rounded border-border-color dark:border-[#2a3e3b] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-border-color dark:focus:border-[#2a3e3b] focus:outline-none transition-all text-[#2a3e3b]',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-[15px]',
    lg: 'h-13 px-8 text-base',
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;