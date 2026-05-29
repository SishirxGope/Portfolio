interface ButtonProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export function Button({ children, variant = 'light', className = '' }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-all cursor-pointer";
  const variantStyles = variant === 'light'
    ? "bg-gray-200 text-black hover:bg-gray-300"
    : "bg-black text-white hover:bg-gray-800";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
}
