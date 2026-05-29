interface PillTagProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid';
  className?: string;
}

export function PillTag({ children, variant = 'outline', className = '' }: PillTagProps) {
  const baseStyles = "px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap inline-flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out backdrop-blur-md";
  const defaultVariantStyles = variant === 'outline'
    ? "border border-black/5 bg-white/50 text-black/70 hover:bg-white/80 hover:text-black/90 hover:border-black/10"
    : "bg-black/80 text-white/90 hover:bg-black hover:text-white";

  const finalClassName = className || `${baseStyles} ${defaultVariantStyles}`;
  if (className) {
    return <span className={`${baseStyles} ${className}`}>{children}</span>;
  }

  return (
    <span className={finalClassName}>
      {children}
    </span>
  );
}
