import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      life: number;
    }> = [];

    const createParticles = () => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.5 + 0.2,
          life: 1,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.002;
        particle.alpha = particle.life * (Math.random() * 0.3 + 0.1);

        if (particle.alpha > 0) {
          ctx.fillStyle = `rgba(255, 165, 0, ${particle.alpha * scrollProgress})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      if (Math.random() < 0.3) {
        createParticles();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 bg-gradient-to-b from-white via-blue-50/10 to-white"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
            We are a <span className="gradient-text">next-generation AI engineering studio</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
                <span className="block">
                  We partner with ambitious businesses to architect, build, and deploy intelligent AI systems that unlock competitive advantages. Every solution is engineered for measurable impact—multiplying productivity, accelerating revenue, and transforming customer experiences.
                </span>
                <span className="block">
                  Our approach combines deep technical mastery with strategic business thinking. We don't just implement AI; we architect it to align with your goals, scale with your growth, and evolve with your industry.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 shadow-2xl border border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-6 text-white">
                  <h3 className="text-2xl font-bold">Our Philosophy</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">→</span>
                      <span>Intelligence amplifies human creativity, not replaces it</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">→</span>
                      <span>Every system must deliver measurable business value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">→</span>
                      <span>Technical excellence is non-negotiable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">→</span>
                      <span>We scale with your ambition</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-blue-500/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
