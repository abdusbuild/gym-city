import type { Metadata, Viewport } from "next";
import { Oswald, Questrial } from "next/font/google";
import Loader from "@/components/Loader";
import { SITE } from "@/lib/site";
import { siteUrl } from "@/lib/url";
import "./globals.css";

const questrial = Questrial({ weight: "400", subsets: ["latin"], variable: "--font-body", display: "swap" });
const oswald = Oswald({ weight: ["500", "700"], subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gym City Shaheen Bagh | Leave Your Mark | Gym in Okhla, Jamia Nagar, Delhi",
  description:
    "Gym City, Shaheen Bagh: an air-conditioned strength and fitness gym on Main Road, Thokar No. 6, Jamia Nagar, Okhla, Delhi. Free weights, machines, cardio, yoga and personal training. Rated 4.9★.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Gym City, Shaheen Bagh: Leave Your Mark",
    description: "Strength, cardio, yoga and personal training in Shaheen Bagh, Okhla, Delhi.",
    images: ["/og.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#070707" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: SITE.name,
  slogan: SITE.tagline,
  image: "/og.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A 50-51, Main Road, Thokar No. 6, Shaheen Bagh, Jamia Nagar, Okhla",
    addressLocality: "New Delhi",
    postalCode: "110025",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.lat, longitude: SITE.lng },
  telephone: SITE.phone,
  openingHours: "Mo-Sa 06:00-22:30",
  aggregateRating: { "@type": "AggregateRating", ratingValue: String(SITE.rating), ratingCount: String(SITE.ratingCount) },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${questrial.variable} ${oswald.variable}`} suppressHydrationWarning>
      <head>
        {/* Skip the loader if it was already shown this session */}
        <script dangerouslySetInnerHTML={{ __html: `try{if(sessionStorage.getItem("gc-seen"))document.documentElement.classList.add("seen")}catch(e){}` }} />
      </head>
      <body id="top">
        <Loader />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
