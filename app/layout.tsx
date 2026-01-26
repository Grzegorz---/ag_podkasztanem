import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Pod Kasztanem - Wypoczynek w Mrzeżynie",
  description: "Pokoje i domki kempingowe 200m od plaży. Spokojny wypoczynek nad Bałtykiem.",
  openGraph: {
    title: "Pod Kasztanem - Wypoczynek w Mrzeżynie",
    description: "Pokoje i domki kempingowe 200m od plaży.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
