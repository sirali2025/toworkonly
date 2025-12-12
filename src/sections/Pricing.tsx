import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { pricingModulesConfig } from '../config/pricing';
import { gsap, registerGsapPlugins } from '../lib/gsap';

export default function Pricing() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const moduleRefs = useRef<Array<HTMLDivElement | null>>([]);
  const raysRefs = useRef<Array<HTMLDivElement | null>>([]);

  const modules = pricingModulesConfig;

  useLayoutEffect(() => {
    registerGsapPlugins();

    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = moduleRefs.current.filter(Boolean) as HTMLDivElement[];
        const rays = raysRefs.current.filter(Boolean) as HTMLDivElement[];

        gsap.set(items, { transformPerspective: 1200, transformStyle: 'preserve-3d' });

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 90, rotateX: 16 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 1.15,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%'
            }
          }
        );

        items.forEach((item, index) => {
          gsap.to(item, {
            y: index % 2 === 0 ? -60 : 40,
            rotateY: (index % 4 - 1.5) * 3,
            rotateZ: index % 2 === 0 ? -1.5 : 1.5,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          });
        });

        rays.forEach((ray, index) => {
          gsap.to(ray, {
            yPercent: (index % 2 === 0 ? -1 : 1) * (18 + index * 2),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
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
      id="pricing"
      className="relative overflow-hidden py-32 bg-gradient-to-b from-[#05060a] via-[#060b22] to-[#05060a]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-90 [background:radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_42%),radial-gradient(circle_at_70%_35%,rgba(244,114,182,0.10),transparent_46%),radial-gradient(circle_at_45%_90%,rgba(167,139,250,0.16),transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Premium <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Eight digital modules with layered glass, light rays, and kinetic motion on scroll.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((panel, index) => {
            const Icon = panel.Icon;

            return (
              <div
                key={panel.id}
                ref={(el) => {
                  moduleRefs.current[index] = el;
                }}
                className="will-change-transform"
              >
                <div
                  className="digital-module group relative overflow-hidden rounded-[28px] p-6 border border-white/10 bg-white/[0.06] backdrop-blur-xl"
                  style={
                    {
                      ['--accent-from' as string]: panel.accent.from,
                      ['--accent-to' as string]: panel.accent.to
                    } as CSSProperties
                  }
                >
                  <div
                    ref={(el) => {
                      raysRefs.current[index] = el;
                    }}
                    className="module-rays"
                    aria-hidden="true"
                  />
                  <div className="module-sheen" aria-hidden="true" />
                  <div className="module-particles" aria-hidden="true">
                    <span className="particle-pulse left-[14%] top-[28%]" />
                    <span className="particle-pulse left-[68%] top-[18%] [animation-delay:0.6s]" />
                    <span className="particle-pulse left-[78%] top-[64%] [animation-delay:1.1s]" />
                    <span className="particle-pulse left-[26%] top-[74%] [animation-delay:1.5s]" />
                  </div>

                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0 rounded-2xl p-3 border border-white/10 bg-white/5">
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.18),transparent_60%)]" />
                        <Icon className="relative w-7 h-7 text-white" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {panel.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">
                          {panel.shortDescription}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2">
                      {panel.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm text-white/75 flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                      Learn details
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
