import { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  onInView?: (isInView: boolean) => void;
}

export default function ScrollSection({
  id,
  children,
  className = '',
  onInView,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        onInView?.(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [onInView]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-full py-20 md:py-32 transition-opacity duration-700 ${
        isInView ? 'opacity-100' : 'opacity-75'
      } ${className}`}
    >
      {children}
    </section>
  );
}
