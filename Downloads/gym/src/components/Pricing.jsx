import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Day Pass",
    price: "₹500",
    period: "/ day",
    desc: "Perfect for drop-ins and testing the waters.",
    features: ["Full gym access", "Locker rooms", "Towel service"],
    featured: false
  },
  {
    name: "Monthly Addict",
    price: "₹3,500",
    period: "/ mo",
    desc: "Our most popular short-term commitment.",
    features: ["Full gym access 24/7", "Group classes", "1 PT Session", "Nutrition guide"],
    featured: true
  },
  {
    name: "Iron Legacy",
    price: "₹35,000",
    period: "/ yr",
    desc: "For those serious about their transformation.",
    features: ["Unlimited 24/7 access", "All group classes", "Monthly bodily assessments", "Guest pass (once/mo)"],
    featured: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-charcoal relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-3 block">
            No Contracts. Only Commitment.
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wider">
            MEMBERSHIP TIERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-8 bg-brand-black ${
                plan.featured ? 'border-2 border-brand-accent' : 'border border-white/10'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white uppercase tracking-widest text-xs font-bold px-4 py-1">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-display text-3xl text-white tracking-widest uppercase mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl text-white font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check size={18} className="text-brand-accent mr-3 flex-shrink-0" />
                      <span className="text-sm font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-4 uppercase tracking-widest text-sm font-bold transition-colors ${
                  plan.featured 
                    ? 'bg-brand-accent hover:bg-red-700 text-white' 
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
