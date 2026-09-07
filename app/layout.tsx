import type { Metadata } from "next";
import { Ballet, Bebas_Neue, Cardo } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const ballet = Ballet({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ballet",
  display: "swap",
});

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-cardo",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
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
    <html lang="en" className={`${ballet.variable} ${bebas.variable} ${cardo.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
