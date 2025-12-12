import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { servicesConfig } from '../config/services';
import { gsap, registerGsapPlugins } from '../lib/gsap';

const POSITIONS: string[] = [
  'md:top-[2%] md:left-[6%]',
  'md:top-[6%] md:left-[56%]',
  'md:top-[28%] md:left-[0%]',
  'md:top-[32%] md:left-[62%]',
  'md:top-[56%] md:left-[8%]',
  'md:top-[60%] md:left-[56%]',
  'md:top-[82%] md:left-[18%]',
  'md:top-[18%] md:left-[28%]'
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const outerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const floatRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = servicesConfig;

  useLayoutEffect(() => {
    registerGsapPlugins();

    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const outers = outerRefs.current.filter(Boolean) as HTMLDivElement[];
        const floats = floatRefs.current.filter(Boolean) as HTMLDivElement[];

        gsap.set(outers, { transformPerspective: 1000, transformStyle: 'preserve-3d' });

        gsap.fromTo(
          outers,
          { autoAlpha: 0, y: 80, rotateX: 14 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%'
            }
          }
        );

        outers.forEach((outer, index) => {
          const driftY = (index % 2 === 0 ? -1 : 1) * (60 + index * 6);
          const driftX = (index % 3 === 0 ? -1 : 1) * (18 + index * 4);

          gsap.to(outer, {
            y: driftY,
            x: driftX,
            rotateZ: (index % 2 === 0 ? -1 : 1) * (4 + index * 0.6),
            rotateX: (index % 2 === 0 ? 1 : -1) * (8 + index * 0.7),
            rotateY: (index % 3 - 1) * 8,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          });
        });

        floats.forEach((el, index) => {
          gsap.to(el, {
            y: `+=${18 + index * 2}`,
            x: `+=${index % 2 === 0 ? 10 : -10}`,
            rotationZ: index % 2 === 0 ? 1.5 : -1.5,
            duration: 3.2 + index * 0.25,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
          });
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden py-32 bg-gradient-to-b from-[#05060a] via-[#050a18] to-[#05060a]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-80 [background:radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.18),transparent_44%),radial-gradient(circle_at_78%_35%,rgba(167,139,250,0.14),transparent_50%),radial-gradient(circle_at_55%_85%,rgba(16,185,129,0.10),transparent_46%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] [background-size:80px_80px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Eight holographic modules—designed to feel alive while you scroll.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 md:block md:min-h-[920px]">
          {cards.map((service, index) => {
            const Icon = service.Icon;

            return (
              <div
                key={service.id}
                ref={(el) => {
                  outerRefs.current[index] = el;
                }}
                className={`relative md:absolute w-full max-w-none sm:max-w-[520px] md:max-w-[360px] ${POSITIONS[index] ?? ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  zIndex: hoveredIndex === index ? 30 : 10
                }}
              >
                <div
                  ref={(el) => {
                    floatRefs.current[index] = el;
                  }}
                >
                  <article
                    className={`holo-surface group rounded-[28px] p-6 md:p-7 transition-[filter] duration-300 will-change-transform ${
                      hoveredIndex !== null && hoveredIndex !== index ? 'md:blur-[1.4px] md:opacity-70' : ''
                    }`}
                    onPointerMove={(e) => {
                      const target = e.currentTarget;
                      const rect = target.getBoundingClientRect();
                      const px = ((e.clientX - rect.left) / rect.width) * 100;
                      const py = ((e.clientY - rect.top) / rect.height) * 100;

                      const dx = px - 50;
                      const dy = py - 50;

                      target.style.setProperty('--mx', `${px}%`);
                      target.style.setProperty('--my', `${py}%`);
                      target.style.setProperty('--rx', `${(-dy / 12).toFixed(2)}deg`);
                      target.style.setProperty('--ry', `${(dx / 10).toFixed(2)}deg`);
                    }}
                    onPointerLeave={(e) => {
                      const target = e.currentTarget;
                      target.style.setProperty('--mx', '50%');
                      target.style.setProperty('--my', '50%');
                      target.style.setProperty('--rx', '0deg');
                      target.style.setProperty('--ry', '0deg');
                    }}
                  >
                    <div className="holo-frame" aria-hidden="true" />
                    <div className="holo-particles" aria-hidden="true" />

                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="relative shrink-0 rounded-2xl p-3 bg-white/5 border border-white/10">
                          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.22),transparent_60%)]" />
                          <Icon className="relative w-7 h-7 text-cyan-200" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-xl font-bold text-white leading-tight">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-white/70">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <ul className="mt-5 space-y-2">
                        {service.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-sm text-white/75 flex items-start gap-2"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_16px_rgba(34,211,238,0.5)]" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex items-center gap-2 text-cyan-200/90 font-semibold text-sm tracking-wide">
                        Explore
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
