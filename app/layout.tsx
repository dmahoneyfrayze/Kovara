import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadCaptureModal } from "@/components/marketing/LeadCaptureModal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Kovara | Live Edge Tables & Custom Furniture",
    template: "%s | Kovara"
  },
  description: "Handcrafted live edge dining tables, conference tables, and custom furniture using premium Parota and Black Walnut slabs.",
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <LeadCaptureModal />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Kovara",
          "image": "https://kovara.com/og-image.jpg",
          "description": "Handcrafted live edge dining tables and custom furniture in Dallas-Fort Worth.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "400 North Bowen Rd, Unit 112",
            "addressLocality": "Arlington",
            "addressRegion": "TX",
            "postalCode": "76012",
            "addressCountry": "US"
          },
          "url": "https://kovara.com",
          "telephone": "+15555555555",
          "priceRange": "$$$"
        }} />

      </body>
    </html>
  );
}
