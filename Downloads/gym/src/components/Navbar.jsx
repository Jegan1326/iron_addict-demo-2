import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Shrinks slightly on scroll
  const headerPadding = useTransform(scrollY, [0, 100], ['1.5rem', '0.75rem']);

  const navLinks = ['About', 'Pricing', 'Trainer', 'Location'];

  return (
    <>
      <motion.nav
        style={{ paddingTop: headerPadding, paddingBottom: headerPadding }}
        className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="font-display text-2xl md:text-3xl text-white tracking-wider">
              IRON<span className="text-brand-accent">.</span>ADDICTS
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors"
              >
                {link}
              </a>
            ))}
            <button className="bg-brand-accent text-white font-bold rounded-full px-5 py-2 uppercase text-sm tracking-wider hover:bg-red-700 transition duration-300 flex items-center justify-center cursor-pointer">
              Join Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[70px] left-0 w-full z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-display text-white hover:text-brand-accent tracking-wider uppercase"
                >
                  {link}
                </a>
              ))}
              <button className="bg-brand-accent text-white font-bold rounded-full px-5 py-3 uppercase tracking-wider hover:bg-red-700 w-full mt-4 text-center">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
