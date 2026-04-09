import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dumbbell, Users, Zap, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Dumbbell size={32} className="text-brand-accent" />,
    title: "Arsenal Strength",
    desc: "Olympiad-tier equipment designed for maximum biomechanical efficiency. We don't do basic."
  },
  {
    icon: <Users size={32} className="text-brand-accent" />,
    title: "Elite Coaching",
    desc: "Trainers backed by science and actual experience. No generic cookie-cutter routines."
  },
  {
    icon: <Zap size={32} className="text-brand-accent" />,
    title: "Unmatched Vibe",
    desc: "A raw, high-energy environment built to push you past your perceived limits."
  },
  {
    icon: <Clock size={32} className="text-brand-accent" />,
    title: "Open 24/7",
    desc: "Your goals don't sleep, and neither do we. Secure access anytime, day or night."
  }
];

export default function WhyIronAddicts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.section-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-brand-charcoal border-t border-white/5 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="section-header text-center mb-16">
          <span className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-3 block">
            The Iron Difference
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wider">
            NOT YOUR AVERAGE<br/>COMMERCIAL GYM
          </h2>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="feature-card glass-panel p-8 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-black/50 p-4 rounded-full mb-6 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="font-display text-2xl text-white tracking-widest uppercase mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-body leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
