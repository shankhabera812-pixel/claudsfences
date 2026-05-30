import { ShieldCheck, Scale, EyeOff, TrendingUp } from 'lucide-react';

const blocks = [
  {
    id: 'safety',
    headline: 'Your yard should have edges.',
    copy: "Your kids run. Your dog bolts. Your neighbor's teenager cuts through on their way to school. A fence doesn't just mark a line — it holds your world in place. You shouldn't have to watch every second.",
    Icon: ShieldCheck,
    bgClass: 'bg-white',
    textLeft: true,
  },
  {
    id: 'liability',
    headline: 'The line nobody drew.',
    copy: "Most property line disputes never make it to court — they just simmer. A fence settles it, quietly and permanently. And if someone trips on your unfenced pool deck or walks into your unfenced work zone, the liability conversation changes fast.",
    Icon: Scale,
    bgClass: 'bg-accent-light',
    textLeft: false,
  },
  {
    id: 'privacy',
    headline: 'Not everyone needs to see how you live.',
    copy: "Your deck. Your garden. Your family's Saturday morning. A fence gives you back the space between your life and the street. That's not antisocial. That's earned.",
    Icon: EyeOff,
    bgClass: 'bg-white',
    textLeft: true,
  },
  {
    id: 'value',
    headline: "It's the first thing buyers notice.",
    copy: "A well-built fence doesn't just protect — it positions. It tells people this property is cared for, defined, and worth more than the one next to it. If you're staying, it's quality of life. If you're selling, it's ROI.",
    Icon: TrendingUp,
    bgClass: 'bg-accent-light',
    textLeft: false,
  },
];

export default function WhyFenceSection() {
  return (
    <section id="why-fence" className="bg-white pb-20 pt-10">
      <div className="max-w-screen-xl mx-auto px-6 mb-12">
        <h2 className="text-navy text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-center">
          A fence is never just a fence.
        </h2>
      </div>

      <div className="flex flex-col">
        {blocks.map((block) => (
          <div key={block.id} className={`${block.bgClass} py-12 md:py-16`}>
            <div className="max-w-screen-xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                
                {/* Text Column */}
                <div className={`flex-1 order-1 ${block.textLeft ? 'md:order-1 text-center md:text-left' : 'md:order-2 text-center md:text-right'}`}>
                  <h3 className="text-navy text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-[1.2] mb-4">
                    {block.headline}
                  </h3>
                  <p className="text-muted text-[16px] leading-[1.7] max-w-[540px] mx-auto md:mx-0">
                    {block.copy}
                  </p>
                </div>

                {/* Visual/Icon Column */}
                <div className={`flex-shrink-0 order-2 md:w-[120px] flex justify-center ${block.textLeft ? 'md:order-2' : 'md:order-1'}`}>
                  <block.Icon size={70} strokeWidth={1} className="text-navy/20" />
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
