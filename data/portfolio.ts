export interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: 'Wood' | 'Vinyl' | 'Chain Link' | 'Aluminum' | 'Pool Enclosures' | 'Before + After';
  material: string;
  town: string;
  label: string;
  shortLabel: string;
  outcomeCaption?: string;
  featured?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    src: '/images/portfolio/p01.png',
    alt: 'Clean white vinyl privacy fence in a residential backyard',
    category: 'Vinyl',
    material: 'Vinyl',
    town: 'Shrewsbury, MA',
    label: 'Vinyl Privacy Fence · Shrewsbury, MA',
    shortLabel: 'Vinyl Privacy',
    outcomeCaption: 'Installed to give this family full backyard privacy from the neighboring lot.',
    featured: true,
  },
  {
    id: 2,
    src: '/images/portfolio/p02.png',
    alt: 'Pressure-treated wood privacy fence in a residential backyard',
    category: 'Wood',
    material: 'Pressure-Treated Wood',
    town: 'Millbury, MA',
    label: 'Wood Privacy Fence · Millbury, MA',
    shortLabel: 'Wood Privacy',
    outcomeCaption: 'A warm, natural barrier built along the property line.',
    featured: false,
  },
  {
    id: 3,
    src: '/images/portfolio/p03.png',
    alt: 'Black aluminum ornamental pool fence',
    category: 'Pool Enclosures',
    material: 'Aluminum',
    town: 'Framingham, MA',
    label: 'Aluminum Pool Enclosure · Framingham, MA',
    shortLabel: 'Aluminum Pool Fence',
    outcomeCaption: 'A clean, code-compliant barrier that keeps the pool area safe without blocking sightlines.',
    featured: true,
  }
];
