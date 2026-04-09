import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function LocationHours() {
  return (
    <section id="location" className="py-24 bg-brand-charcoal relative z-10 w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-3 block">
              Find The Iron
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white tracking-wider mb-8">
              HEADQUARTERS
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-brand-accent mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-display uppercase tracking-widest text-white text-xl mb-2">Location</h4>
                  <p className="text-gray-400 font-body">
                    Plot No 14, 2nd Main Road,<br />
                    Industrial Estate, Guindy,<br />
                    Chennai, Tamil Nadu 600032
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-brand-accent mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-display uppercase tracking-widest text-white text-xl mb-2">Hours of Operation</h4>
                  <p className="text-gray-400 font-body">
                    Monday - Friday: <span className="text-white">24 Hours</span><br />
                    Saturday: <span className="text-white">12:00 AM - 10:00 PM</span><br />
                    Sunday: <span className="text-white">5:00 AM - 8:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-brand-accent mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-display uppercase tracking-widest text-white text-xl mb-2">Contact</h4>
                  <p className="text-gray-400 font-body">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full bg-brand-black border border-white/10 relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" 
              alt="Gym Location" 
              className="w-full h-full object-cover filter grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel flex justify-between items-center">
              <span className="font-display text-white tracking-widest text-lg">GET DIRECTIONS</span>
              <button className="bg-brand-accent text-white p-3 rounded-full hover:bg-red-700 transition">
                <MapPin size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
