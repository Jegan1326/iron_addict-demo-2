import { motion } from 'framer-motion';

const trainers = [
  {
    name: "Marcus Ruhl",
    spec: "Head Strength Coach",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Sarah Chen",
    spec: "Performance Specialist",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "David Ogg",
    spec: "Hypertrophy Expert",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
  }
];

export default function TrainerSpotlight() {
  return (
    <section id="trainer" className="py-24 bg-brand-black relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-3 block">
            Meet the Masters
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wider">
            YOUR DRILL SERGEANTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              whileHover="hover"
              className="relative group overflow-hidden bg-brand-charcoal"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <motion.img 
                  variants={{
                    hover: { scale: 1.05 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-3xl text-white tracking-widest uppercase mb-1">
                  {trainer.name}
                </h3>
                <p className="text-brand-accent uppercase tracking-wider text-sm mb-4">
                  {trainer.spec}
                </p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="font-display tracking-widest text-white hover:text-brand-accent transition-colors">IG</a>
                  <a href="#" className="font-display tracking-widest text-white hover:text-brand-accent transition-colors">TW</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
