import AccentButton from '@/components/ui/AccentButton';

export default function AboutSection() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden bg-navy text-white">
      {/* Revelation background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-accent/20 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        
        <div className="max-w-[700px] mx-auto text-center">
          {/* Narrative heading */}
          <h2 className="text-white text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.15] mb-8 md:mb-12 tracking-tight drop-shadow-md">
            We didn&apos;t start this company to scale it. We started it to build something right.
          </h2>

          {/* Narrative prose */}
          <div className="flex flex-col gap-6 text-white/80 text-[16px] md:text-[18px] leading-[1.75] font-light">
            <p>
              Claud&apos;s Fences was built the way most good things are: with two
              people, a handshake, and a shared belief that your home deserves the
              same care they&apos;d give their own. Co-owners Claudinei Silva and Raimundo Neto 
              bring over a decade of hands-on fencing experience to every project.
            </p>
            <p>
              When you hire us, you get us. We are on every job — we don&apos;t use subcontractors, 
              and we don&apos;t drop off a crew you&apos;ve never met. From the first post hole to the 
              final gate latch, the people who quoted your fence are the people building it, using 
              only contractor-grade materials we trust on our own properties.
            </p>
            <p>
              We are local to Shrewsbury. Every project since our first installation has come from 
              word of mouth, repeat customers, or a neighbor who saw our work. If you&apos;re looking 
              for a company that picks up the phone, shows up when they say, and stands behind every 
              post they set — you&apos;ve found it.
            </p>
            <p>
              We don&apos;t run a call center. We don&apos;t farm your job to a crew we&apos;ve never worked with. 
              When you hire Claud&apos;s Fences, Claudinei or Raimundo are on your property.
            </p>
          </div>

          {/* Stat callouts */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-accent text-[15px] sm:text-[16px] font-semibold text-center uppercase tracking-wider">
            <span>200+ Fences Installed</span>
            <span className="hidden sm:inline text-white/30 font-normal">|</span>
            <span className="inline sm:hidden text-white/30 font-normal">·</span>
            <span>0 Subcontractors, Ever</span>
            <span className="hidden sm:inline text-white/30 font-normal">|</span>
            <span className="inline sm:hidden text-white/30 font-normal">·</span>
            <span>100% Owner-Built</span>
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-12 flex justify-center">
            <AccentButton size="md" href="#contact">
              Talk to Claudinei or Raimundo about your fence →
            </AccentButton>
          </div>
        </div>
        
      </div>
    </section>
  );
}
