import { Dog, Baby, EyeOff, LifeBuoy, AlertTriangle, Map } from 'lucide-react';

const scenarios = [
  {
    id: 'pets',
    headline: "Your dog isn't safe in the yard on its own.",
    copy: "The anxiety of an open yard means you're tied to a leash every time they go out. A properly installed fence gives both of you the freedom you deserve.",
    Icon: Dog,
  },
  {
    id: 'kids',
    headline: "Your kids should be able to play outside.",
    copy: "You shouldn't have to choose between watching them and getting things done. When the yard is enclosed, your kids can play safely without your constant vigilance.",
    Icon: Baby,
  },
  {
    id: 'privacy',
    headline: "Your backyard should feel like yours.",
    copy: "When your deck feels like a stage and neighbors can see everything, it's hard to relax. Privacy isn't a luxury — it's the difference between using your outdoor space and just having one.",
    Icon: EyeOff,
  },
  {
    id: 'pool',
    headline: "Your pool needs a fence before the inspector arrives.",
    copy: "Massachusetts requires a pool enclosure, and you might have an inspection deadline. We know the code. We've passed inspection in dozens of towns.",
    Icon: LifeBuoy,
  },
  {
    id: 'old-fence',
    headline: "Your fence is past its life — and it's starting to show.",
    copy: "You might be dreading the cost and disruption of a replacement. Most fence replacements are faster and less disruptive than homeowners expect. We protect what's already there.",
    Icon: AlertTriangle,
  },
  {
    id: 'property-line',
    headline: "A fence is the cleanest way to end the ambiguity.",
    copy: "Property line ambiguity can cause real tension with neighbors. A fence is the cleanest way to define your property and end the ambiguity permanently.",
    Icon: Map,
  },
];

export default function PainPointSection() {
  return (
    <section id="pain-points" className="bg-white py-20 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Urgent Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-navy text-[clamp(2rem,4vw,2.75rem)] font-bold mb-4 tracking-tight">
            The Hidden Costs of an <span className="text-danger">Unfenced</span> Yard
          </h2>
          <p className="text-muted text-[16px] md:text-[18px]">
            Every day you delay, you&apos;re living with unnecessary risks and stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {scenarios.map((scenario) => (
            <div 
              key={scenario.id} 
              className="bg-danger-light border-t-4 border-t-danger border-x border-b border-danger-border rounded-card p-8 flex flex-col gap-4 hover-card-lift"
            >
              <scenario.Icon size={32} className="text-danger" strokeWidth={2} />
              <h3 className="text-navy text-[clamp(1.25rem,2.5vw,1.5rem)] font-semibold leading-[1.3]">
                {scenario.headline}
              </h3>
              <p className="text-muted text-[16px] leading-[1.65]">
                {scenario.copy}
              </p>
            </div>
          ))}
        </div>
        
        {/* Soft connector sentence */}
        <p className="text-center text-[18px] text-navy font-medium max-w-2xl mx-auto">
          We understand exactly what you&apos;re dealing with — and we&apos;re the people who will build the solution.
        </p>
      </div>
    </section>
  );
}
