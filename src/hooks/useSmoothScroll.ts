import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enable smooth scrolling behavior
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';

    return () => {
      html.style.scrollBehavior = 'auto';
    };
  }, []);
};

export const useScrollToSection = () => {
  return (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
};
