import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ADM Services | Nettoyage & Rénovation à Lyon",
  description:
    "Expert en nettoyage écologique et rénovation complète à Lyon. Solutions professionnelles pour particuliers et entreprises.",
  keywords: [
    "nettoyage",
    "rénovation",
    "Lyon",
    "écologique",
    "professionnel",
    "particulier",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
