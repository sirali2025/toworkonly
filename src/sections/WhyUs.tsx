import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Cpu, Zap, Activity } from 'lucide-react';

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Engineering",
      description: "Security and scalability built into every layer of our architecture."
    },
    {
      icon: Cpu,
      title: "Customized AI Models",
      description: "Fine-tuned algorithms designed specifically for your business domain."
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Lightning-fast inference and data processing for instant insights."
    },
    {
      icon: Activity,
      title: "Continuous Optimization",
      description: "Self-improving systems that get smarter with every interaction."
    }
  ];

  return (
    <section ref={containerRef} id="why-us" className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-80" />
      
      {/* Cyan Wiring Effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
            <stop offset="50%" stopColor="rgba(34, 211, 238, 0.5)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,100 Q400,300 800,100 T1600,100"
          fill="none"
          stroke="url(#cyan-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,600 Q600,400 1200,600 T2400,600"
          fill="none"
          stroke="url(#cyan-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          style={{ y, opacity }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-cyan-400">AKS</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We combine cutting-edge AI technology with robust engineering to deliver solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10 flex items-start gap-6">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner lines */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-cyan-500 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
