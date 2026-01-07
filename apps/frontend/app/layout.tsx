import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NexClinical - Virtual Medical Support For Small Practices",
  description: "Have insurance authorizations, patient scheduling, & clinical notes handled. Reduce the admin chaos to focus on patient care.",
  keywords: ["medical support", "virtual assistant", "patient scheduling", "insurance authorization", "clinical notes"],
  authors: [{ name: "NexClinical" }],
  creator: "NexClinical",
  publisher: "NexClinical",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nexclinical.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nexclinical.com",
    siteName: "NexClinical",
    title: "NexClinical - Virtual Medical Support For Small Practices",
    description: "Have insurance authorizations, patient scheduling, & clinical notes handled. Reduce the admin chaos to focus on patient care.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexClinical - Virtual Medical Support For Small Practices",
    description: "Have insurance authorizations, patient scheduling, & clinical notes handled. Reduce the admin chaos to focus on patient care.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <StructuredData />
        <meta name="theme-color" content="#0066A1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
