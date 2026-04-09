

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <span className="font-display text-3xl text-white tracking-wider mb-6 block">
              IRON<span className="text-brand-accent">.</span>ADDICTS
            </span>
            <p className="text-gray-400 font-body mb-8 max-w-sm">
              Chennai's premier high-performance training facility. Built for those who demand more from themselves.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-accent transition-colors font-display tracking-widest text-white w-10 h-10 flex items-center justify-center">
                IG
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-accent transition-colors font-display tracking-widest text-white w-10 h-10 flex items-center justify-center">
                TW
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-accent transition-colors font-display tracking-widest text-white w-10 h-10 flex items-center justify-center">
                FB
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-accent transition-colors font-display tracking-widest text-white w-10 h-10 flex items-center justify-center">
                YT
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-white text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Membership', 'Trainers', 'Classes', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-accent transition-colors uppercase tracking-wider text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-white text-xl mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Gym Rules', 'Cancellation Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {currentYear} Iron Addicts Fitness Studio. All rights reserved.</p>
          <p className="mt-4 md:mt-0 uppercase tracking-widest text-xs">Forged in Chennai</p>
        </div>
      </div>
    </footer>
  );
}
