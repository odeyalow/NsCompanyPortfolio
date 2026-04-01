import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { PreferencesProvider } from "@/components/preferences-provider";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "NS Company Portfolio",
  description:
    "Темное минималистичное портфолио с карточками проектов, детальными кейсами и современной интерфейсной системой на Next.js."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
