import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "María-Teresa Carmier | Interdisciplinary Artist, Design Researcher, Technologist",
  description: "Portfolio of María-Teresa Carmier: interdisciplinary artist, design researcher, and technologist working across AI safety, public-interest technology, and community-centered design.",
  openGraph: {
    title: "María-Teresa Carmier",
    description: "Interdisciplinary Artist, Design Researcher, Technologist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "María-Teresa Carmier",
    description: "Interdisciplinary Artist, Design Researcher, Technologist",
  },
  other: {
    "ai-communication-consent": "No consent is granted to AI applications, agencies, or data brokers to contact me or process my personal data. Request erasure and exclusion from ChatGPT or other AI datasets under EU data rights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${inter.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
