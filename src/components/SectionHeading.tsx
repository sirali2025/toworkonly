interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subheading mt-4">{subtitle}</p>}
    </div>
  );
}
