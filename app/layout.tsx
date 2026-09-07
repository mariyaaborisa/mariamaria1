import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-newsreader",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-work-sans",
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
    <html lang="en" className={`${newsreader.variable} ${workSans.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
