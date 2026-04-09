export default function CTABanner() {
  return (
    <section className="py-24 bg-brand-accent relative z-10 w-full overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-red-900 blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-red-700 blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center relative z-10">
        <h2 className="font-display text-5xl md:text-8xl text-white tracking-widest leading-none mb-6">
          READY TO BUILD<br />YOUR LEGACY?
        </h2>
        <p className="text-white/80 font-body text-xl max-w-2xl mx-auto mb-10">
          Sign up today and get your first week of training absolutely free. No commitments, just pure results.
        </p>
        <button className="bg-black text-white font-bold px-10 py-5 uppercase text-sm tracking-widest hover:bg-brand-charcoal transition duration-300 cursor-pointer border border-white/10 hover:border-white/30 hover:scale-105 transform">
          Claim Your Free Week
        </button>
      </div>
    </section>
  );
}
