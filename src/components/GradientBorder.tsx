interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export default function GradientBorder({
  children,
  className = '',
  animated = false,
}: GradientBorderProps) {
  return (
    <div
      className={`holographic-card ${animated ? 'animate-gradient' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
