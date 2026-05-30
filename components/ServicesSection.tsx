import { LayoutPanelTop, Columns2, Grid2X2, ShieldCheck } from 'lucide-react';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    Icon: LayoutPanelTop,
    title: 'Wood Fences',
    desc: "Cedar, pressure-treated pine, and spruce options. Privacy, picket, and custom styles built to your property's specs.",
  },
  {
    Icon: Columns2,
    title: 'Vinyl Fences',
    desc: 'Low-maintenance, weather-resistant PVC in privacy, picket, and lattice profiles. Never needs painting or staining.',
  },
  {
    Icon: Grid2X2,
    title: 'Chain Link Fences',
    desc: 'Galvanized and vinyl-coated options for yards, pets, and commercial enclosures. Durable, cost-effective, and fast to install.',
  },
  {
    Icon: ShieldCheck,
    title: 'Aluminum Fences',
    desc: 'Ornamental aluminum for pool enclosures, front yards, and anywhere you want the look of wrought iron without the maintenance.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-offwhite py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <EyebrowLabel variant="dark">What We Install</EyebrowLabel>
          <SectionHeader
            variant="dark"
            align="center"
            subCopy="From classic wood privacy fences to low-maintenance vinyl, we install, repair, and customize every fence type for residential and commercial properties across Central Massachusetts."
          >
            Fence Installation &amp; Repair for Every Property
          </SectionHeader>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-border-light rounded-card p-7 flex flex-col gap-3"
            >
              <service.Icon
                size={30}
                className="text-navy"
                strokeWidth={1.5}
              />
              <h3 className="text-[16px] font-semibold text-bodytext">
                {service.title}
              </h3>
              <p className="text-[14px] text-muted leading-[1.65]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Soft CTA */}
        <p className="text-center text-[15px] text-muted mt-10">
          Not sure which type is right for your project?{' '}
          <a
            href="#contact"
            className="text-navy font-medium underline hover:text-orange transition-colors duration-150"
          >
            Tell us about your fence →
          </a>
        </p>
      </div>
    </section>
  );
}
