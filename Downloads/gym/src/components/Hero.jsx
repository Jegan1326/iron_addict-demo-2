import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up stagger for hero elements
      gsap.from('.hero-element', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
      });
      // Background slight zoom out
      gsap.from('.hero-bg', {
        scale: 1.1,
        duration: 2,
        ease: 'power2.out'
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070" 
          alt="Iron Addicts Gym" 
          className="hero-bg object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20">
        <span className="hero-element text-brand-accent text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-4 block">
          Welcome to the Iron Asylum
        </span>
        <h1 className="hero-element font-display text-6xl md:text-8xl lg:text-9xl text-white tracking-widest leading-none mb-6">
          NO EXCUSES.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-red-800">ONLY RESULTS.</span>
        </h1>
        <p className="hero-element max-w-2xl text-gray-300 text-lg md:text-xl font-body mb-10 leading-relaxed">
          Chennai’s premier high-performance training facility. Built for those who demand more from themselves. Stop wishing, start working.
        </p>
        <div className="hero-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-brand-accent text-white font-bold px-8 py-4 uppercase text-sm tracking-widest hover:bg-red-700 transition duration-300 cursor-pointer">
            Start Your Journey
          </button>
          <button className="glass-panel text-white font-bold px-8 py-4 uppercase text-sm tracking-widest hover:bg-white/10 transition duration-300 cursor-pointer">
            View Memberships
          </button>
        </div>
      </div>
    </section>
  );
}
