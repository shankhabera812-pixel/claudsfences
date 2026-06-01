import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Claud's Fences | Owner-Built Fence Installation in Central MA",
  description:
    "Claudinei and Raimundo install wood, vinyl, chain link, and aluminum fences across Shrewsbury, Worcester, Framingham, and 20+ Central MA towns. 0 subcontractors ever.",
  keywords: [
    "fence installation Shrewsbury MA",
    "vinyl fence Worcester County",
    "wood fence contractor MA",
    "free fence estimate Shrewsbury",
  ],
  openGraph: {
    title:
      "Claud's Fences | Owner-Built Fence Installation in Central MA",
    description:
      "Claudinei and Raimundo install wood, vinyl, chain link, and aluminum fences across Shrewsbury, Worcester, Framingham, and 20+ Central MA towns. 0 subcontractors ever.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "FencingContractor",
  name: "Claud's Fences",
  url: "https://claudsfences.com",
  telephone: "(774) 386-2977",
  email: "claudsfences@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shrewsbury",
    addressLocality: "Shrewsbury",
    addressRegion: "MA",
    postalCode: "01545",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.2957,
    longitude: -71.7151,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  areaServed: [
    "Shrewsbury",
    "Worcester",
    "Framingham",
    "Northborough",
    "Hudson",
    "Leominster",
    "Fitchburg",
    "Millbury",
    "Hopkinton",
    "Clinton",
  ],
  sameAs: ["https://google.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-ink bg-offwhite">
        {children}

        {/* TODO: Replace with real GA4 Measurement ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}');
          `}
        </Script>
      </body>
    </html>
  );
}
