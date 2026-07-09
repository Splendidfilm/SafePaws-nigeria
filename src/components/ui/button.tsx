import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'about'
    | 'aboutOutline'
    | 'insurance'
    | 'carriers'
    | 'latestNews'
    | 'none';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
};

function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-[0.01em] transition-all duration-200 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary';

  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary-hover rounded-xl ' +
      'shadow-[0_2px_10px_rgba(23,207,173,0.30)] hover:shadow-[0_4px_18px_rgba(23,207,173,0.40)]',

    secondary:
      'bg-transparent border-[1.5px] border-primary text-primary rounded-xl ' +
      'hover:bg-primary hover:text-primary-foreground',

    outline:
      'bg-transparent border-[1.5px] border-zinc-300 text-zinc-700 rounded-xl ' +
      'hover:bg-zinc-900 hover:text-white hover:border-zinc-900 ' +
      'dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:border-zinc-500 dark:hover:text-white',

    about:
      'bg-white text-primary-foreground rounded-full ' +
      'shadow-[0_2px_8px_rgba(0,0,0,0.10)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.14)] hover:scale-[1.03]',

    aboutOutline:
      'bg-transparent border-2 border-white/85 text-white rounded-full ' +
      'hover:bg-white/20 hover:border-white',

    insurance:
      'bg-zinc-900 text-white rounded-full text-sm ' +
      'hover:bg-black hover:scale-[1.03]',

    carriers:
      'bg-transparent border-[1.5px] border-zinc-300 text-zinc-700 rounded-full text-sm ' +
      'hover:bg-zinc-100 hover:scale-[1.03] ' +
      'dark:border-zinc-600 dark:text-zinc-700 dark:hover:bg-zinc-800',

    latestNews:
      'bg-primary text-primary-foreground rounded-2xl ' +
      'shadow-[0_2px_10px_rgba(23,207,173,0.25)] hover:shadow-[0_6px_22px_rgba(23,207,173,0.38)]',

      none:'',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-[15px]',
    lg: 'h-13 px-8 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none`}
    >
      {children}
    </button>
  );
}

export default Button;