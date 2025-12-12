import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HolographicCore = lazy(() => import('../3d/HolographicCore'));

gsap.registerPlugin(ScrollTrigger);

const taglines = [
  'Intelligence that acts',
  'Autonomous innovation',
  'Future-ready AI',
  'Decisions at light speed',
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from(headlineRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
      })
      .from(sublineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
      }, '-=0.6')
      .from(ctaRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, '-=0.4');

      if (heroRef.current && headlineRef.current) {
        gsap.to(headlineRef.current, {
          y: -100,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      if (heroRef.current && sublineRef.current) {
        gsap.to(sublineRef.current, {
          y: -60,
          opacity: 0.3,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      if (heroRef.current && canvasRef.current) {
        gsap.to(canvasRef.current, {
          scale: 1.3,
          opacity: 0.4,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const taglineTl = gsap.timeline({ repeat: -1 });
    
    taglines.forEach((_, index) => {
      taglineTl
        .to({}, {
          duration: 3,
          onStart: () => setCurrentTagline(index),
        })
        .to(taglineRef.current, {
          y: -10,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
        .to(taglineRef.current, {
          y: 10,
          duration: 0,
        })
        .to(taglineRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
    });

    return () => {
      taglineTl.kill();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue via-[#0A1F44] to-black">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF00FB]/5 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>

      <div
        ref={canvasRef}
        className="absolute inset-0 opacity-70"
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
            frameloop="always"
            onCreated={({ gl }) => {
              gl.setClearColor('#0A1F44', 0);
            }}
          >
            <HolographicCore />
          </Canvas>
        </Suspense>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF00FB]/15 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <div
            ref={taglineRef}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse-glow" />
            <span className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wider">
              {taglines[currentTagline]}
            </span>
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse-glow" />
          </div>

          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight"
          >
            <span className="block mb-4">
              The New Era of
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-[#FF00FB] bg-clip-text text-transparent animate-gradient-shift">
              Autonomous Intelligence
            </span>
          </h1>

          <p
            ref={sublineRef}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Harness the power of AI that thinks, adapts, and acts—transforming your business with intelligent automation that never sleeps.
          </p>

          <div className="flex items-center justify-center gap-2 text-cyan-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-glow"></div>
            <span className="text-sm md:text-base font-semibold tracking-wide">
              Real-time autonomous decision making
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-glow"></div>
          </div>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-5 rounded-full text-white font-bold text-lg flex items-center gap-3 overflow-hidden transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-cyan-400 to-[#FF00FB] animate-gradient-shift"></div>
              <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              <span className="relative z-10">Experience the Future</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-100 animate-ping-slow"></div>
            </button>

            <button
              onClick={scrollToContact}
              className="group px-10 py-5 rounded-full border-2 border-cyan-400 text-cyan-400 font-bold text-lg flex items-center gap-3 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-royal-blue/50 to-royal-blue pointer-events-none"></div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider">SCROLL</span>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-[#FF00FB] rounded-full animate-scroll-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
