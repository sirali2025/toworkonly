import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

// Utility animations
export const createScrollAnimation = (
  element: HTMLElement | string,
  options: gsap.TweenVars
) => {
  return gsap.to(element, options);
};

export const createParallaxEffect = (
  element: HTMLElement | string,
  distance: number = 50
) => {
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
    y: distance,
    ease: 'none',
  });
};

export const createFadeInOnScroll = (
  element: HTMLElement | string,
  duration: number = 0.8
) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 100,
    duration,
  });
};

export const createStaggerAnimation = (
  elements: string | HTMLElement[],
  staggerDelay: number = 0.1,
  duration: number = 0.8
) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration,
    stagger: staggerDelay,
  });
};
