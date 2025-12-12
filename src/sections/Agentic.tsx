import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Zap, Shield, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Pillar {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  metrics: Array<{ label: string; value: string }>;
}

const pillars: Pillar[] = [
  {
    id: 1,
    title: 'Autonomous Intelligence',
    description: 'Self-optimizing AI agents that learn from every interaction, adapt to your business logic, and make intelligent decisions at scale.',
    icon: <Brain className="w-12 h-12" />,
    accent: 'from-blue-500 to-cyan-400',
    metrics: [
      { label: 'Autonomy Level', value: '98%' },
      { label: 'Decision Latency', value: '<100ms' },
    ],
  },
  {
    id: 2,
    title: 'Reactive Processing',
    description: 'Lightning-fast inference and real-time responsiveness powered by optimized neural architectures that execute at edge speeds.',
    icon: <Zap className="w-12 h-12" />,
    accent: 'from-[#FF00FB] to-[#CC00C9]',
    metrics: [
      { label: 'Throughput', value: '10K req/s' },
      { label: 'Accuracy', value: '99.2%' },
    ],
  },
  {
    id: 3,
    title: 'Secure Integration',
    description: 'Enterprise-grade security with end-to-end encryption, compliance automation, and zero-trust architecture for sensitive workflows.',
    icon: <Shield className="w-12 h-12" />,
    accent: 'from-purple-500 to-pink-400',
    metrics: [
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Compliance', value: 'SOC2/HIPAA' },
    ],
  },
  {
    id: 4,
    title: 'Scalable Architecture',
    description: 'Infinitely scalable infrastructure that grows with your demands, handling millions of operations without degradation.',
    icon: <Rocket className="w-12 h-12" />,
    accent: 'from-green-500 to-emerald-400',
    metrics: [
      { label: 'Scalability', value: '1M+' },
      { label: 'Uptime SLA', value: '99.99%' },
    ],
  },
];

const PillarCard = ({ pillar, index }: { pillar: Pillar; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'top 50%',
        scrub: false,
        once: true,
      },
    });

    tl.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        rotateX: -20,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out',
      }
    );

    return () => {
      tl.kill();
    };
  }, [index]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;

      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (y - 0.5) * 20;
      const rotateY = (x - 0.5) * 20;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.3,
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 h-full shadow-2xl hover:shadow-2xl transition-all duration-500">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute -inset-1 bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 animate-pulse`}
          ></div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.accent} p-3 mb-6 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
          >
            {pillar.icon}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:bg-clip-text transition-all duration-300">
            {pillar.title}
          </h3>

          <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
            {pillar.description}
          </p>

          <div className="space-y-4 pt-8 border-t border-gray-800">
            {pillar.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex justify-between items-center"
              >
                <span className="text-sm text-gray-500">{metric.label}</span>
                <span className={`font-bold bg-gradient-to-r ${pillar.accent} bg-clip-text text-transparent text-lg`}>
                  {metric.value}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF00FB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

      <motion.div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-5 blur-xl pointer-events-none transition-opacity duration-500`}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
      ></motion.div>
    </motion.div>
  );
};

export default function Agentic() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      size: number;
      life: number;
    }> = [];

    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        alpha: Math.random() * 0.6 + 0.2,
        size: Math.random() * 2 + 0.5,
        life: 1,
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.003;
        particle.alpha = particle.life * 0.5;

        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          particle.vx += (dx / distance) * 0.3;
          particle.vy += (dy / distance) * 0.3;
        }

        if (particle.alpha > 0) {
          ctx.fillStyle = `rgba(255, 0, 251, ${particle.alpha * 0.4})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      if (Math.random() < 0.4) {
        createParticle();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 bg-gradient-to-b from-white via-gray-950/5 to-white"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-[#FF00FB]/10 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Agentic AI <span className="gradient-text">Flagship Pillars</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four monumental capabilities that define the next generation of intelligent automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            These four pillars form the foundation of our agentic AI platform. Together, they enable organizations to achieve unprecedented automation, speed, and intelligence at scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
