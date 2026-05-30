import { Clock, Star, MapPin } from 'lucide-react';
import OrangeButton from '@/components/ui/OrangeButton';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import SectionHeader from '@/components/ui/SectionHeader';

const stats = [
  {
    Icon: Clock,
    stat: '24/7',
    label: 'Free estimates, any time',
  },
  {
    Icon: Star,
    stat: '5.0★',
    label: 'Average customer rating',
  },
  {
    Icon: MapPin,
    stat: '20+',
    label: 'Towns served across MA',
  },
];

export default function CtaBridge() {
  return (
    <section id="cta-bridge" className="bg-white py-24">
      <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <EyebrowLabel variant="dark">Get Started</EyebrowLabel>

        {/* Section Header */}
        <SectionHeader
          variant="dark"
          align="center"
          subCopy="We offer free, no-obligation estimates 24 hours a day, 7 days a week. Most of our customers get a response the same day they reach out."
          maxWidth="520px"
        >
          Your Free Estimate Is One Form Away
        </SectionHeader>

        {/* Stats Row */}
        <div className="flex justify-center gap-12 mt-10 mb-10 flex-wrap">
          {stats.map((item) => (
            <div
              key={item.stat}
              className="flex flex-col items-center gap-1"
            >
              <item.Icon
                size={28}
                className="text-orange"
                strokeWidth={1.5}
              />
              <p className="text-[32px] font-bold text-navy">{item.stat}</p>
              <p className="text-[13px] text-muted">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <OrangeButton size="md" href="#contact">
          Get My Free Estimate — No Obligation
        </OrangeButton>

        {/* Micro-copy */}
        <p className="text-[12px] text-muted mt-3">
          We respond within 24 hours. Usually same day.
        </p>
      </div>
    </section>
  );
}
