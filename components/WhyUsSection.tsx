import AccentButton from '@/components/ui/AccentButton';

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-offwhite py-20 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        
        <div className="max-w-[620px] mx-auto">
          {/* Narrative heading */}
          <h2 className="text-navy text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-center leading-[1.2] mb-8 md:mb-10">
            We didn&apos;t start this company to scale it. We started it to build something right.
          </h2>

          {/* Narrative prose */}
          <div className="flex flex-col gap-5 text-muted text-[15px] md:text-[16px] leading-[1.75]">
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
          </div>

          {/* Stat callouts */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-accent text-[15px] sm:text-[16px] font-semibold text-center">
            <span>200+ fences installed</span>
            <span className="hidden sm:inline text-muted font-normal">|</span>
            <span className="inline sm:hidden text-muted font-normal">·</span>
            <span>0 subcontractors, ever</span>
            <span className="hidden sm:inline text-muted font-normal">|</span>
            <span className="inline sm:hidden text-muted font-normal">·</span>
            <span>100% owner-built</span>
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
