import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Vikram R.",
    role: "Powerlifter",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=300",
    quote: "The atmosphere here is pure grit. Found my gym home in Chennai. The equipment selection is unmatched."
  },
  {
    name: "Ananya S.",
    role: "Crossfit Athlete",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=300",
    quote: "I've trained all over India, but Iron Addicts brings out a different beast in you. Zero drama, 100% work."
  },
  {
    name: "Rahul M.",
    role: "Bodybuilder",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=300",
    quote: "Finally a gym that understands serious training. The atmosphere pushes you to break your plateaus."
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-brand-black relative z-10 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-3 block">
            The Wall of Honor
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wider">
            EARNED IN SWEAT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-panel p-8 relative"
            >
              <div className="flex text-brand-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 font-body mb-8 italic text-lg leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-accent"
                />
                <div>
                  <h4 className="font-display text-xl text-white tracking-widest">{t.name}</h4>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
