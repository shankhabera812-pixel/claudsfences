import { ShieldCheck, Star, Clock, MapPin, Wrench } from 'lucide-react';

const trustItems = [
  {
    Icon: ShieldCheck,
    primary: 'Licensed & Insured',
    sub: 'Your project is protected',
  },
  {
    Icon: Star,
    primary: '5-Star Rated',
    sub: 'Google & Yelp verified',
  },
  {
    Icon: Clock,
    primary: 'Free 24/7 Estimates',
    sub: 'Respond same day',
  },
  {
    Icon: MapPin,
    primary: 'Serving 20+ MA Towns',
    sub: 'Shrewsbury & surrounding areas',
  },
  {
    Icon: Wrench,
    primary: '10+ Years Experience',
    sub: 'Co-owners Claudinei & Raimundo',
  },
];

export default function TrustBar() {
  return (
    <section id="trust" className="bg-navy py-10 lg:py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={item.primary}
              className={`
                flex flex-col items-center text-center gap-2
                ${index === 4 ? 'col-span-2 md:col-span-3 lg:col-span-1 max-w-[50%] md:max-w-none mx-auto lg:mx-0' : ''}
              `}
            >
              <item.Icon size={26} className="text-white" strokeWidth={1.5} />
              <p className="text-white text-[14px] font-medium">
                {item.primary}
              </p>
              <p className="text-white/65 text-[12px] font-normal">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
