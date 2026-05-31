import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Claud's Fences | Professional Fence Installation in Shrewsbury, MA",
  description:
    "Claud's Fences installs wood, vinyl, chain link, and aluminum fences across Shrewsbury, Worcester, Framingham, and 20+ Central MA towns. Free estimates available 24/7.",
  keywords: [
    "fence installation Shrewsbury MA",
    "vinyl fence Worcester County",
    "wood fence contractor MA",
    "free fence estimate Shrewsbury",
  ],
  openGraph: {
    title:
      "Claud's Fences | Professional Fence Installation in Shrewsbury, MA",
    description:
      "Claud's Fences installs wood, vinyl, chain link, and aluminum fences across Shrewsbury, Worcester, Framingham, and 20+ Central MA towns. Free estimates available 24/7.",
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
    "Milbury",
    "Hopkinton",
    "Clinton",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
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
