'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="bg-offwhite py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo Column */}
          <div className="relative aspect-[4/3] rounded-card overflow-hidden order-2 md:order-1">
            {!imgError ? (
              <Image
                src="/images/about-founders.jpg"
                alt="Claudinei Silva and Raimundo Neto, co-founders of Claud's Fences, Shrewsbury MA"
                fill
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-accent-light" />
            )}
          </div>

          {/* Text Column */}
          <div className="order-1 md:order-2">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.2] text-navy mb-6">
              Built by hand. Founded on family.
            </h2>
            <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-muted">
              <p>
                Claud&apos;s Fences was built the way most good things are: with two
                people, a handshake, and a shared belief that your home deserves the
                same care they&apos;d give their own.
              </p>
              <p>
                Co-owners Claudinei Silva and Raimundo Neto bring over a decade of
                hands-on fencing experience to every project. They started Claud&apos;s
                Fences together as the foundation of something bigger — and the
                response from this community has been humbling. Every project since
                our first installation has come from word of mouth, repeat customers,
                or a neighbor who saw our work across the street.
              </p>
              <p>
                We know a fence isn&apos;t just a boundary. It&apos;s where your kids
                play. It&apos;s where your dog runs. It&apos;s the line between your
                family&apos;s space and the rest of the world. We take that seriously
                — and we bring the same care to your property that we bring to our
                own. If you&apos;re looking for a company that picks up the phone,
                shows up when they say, and stands behind every post they set —
                you&apos;ve found it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
