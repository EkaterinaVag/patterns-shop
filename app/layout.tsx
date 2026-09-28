import type { Metadata } from "next";
import { Manrope, Playfair_Display } from 'next/font/google';
import { Header } from "@/widgets/header/ui/Header";
import { Footer } from "@/widgets/footer/ui/Footer";

import "./globals.css";

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Felt Patterns - выкройки из фетра',
  description: 'Более 100 готовых выкроек для вашего творчества',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <Header />
        <main className="flex-1 mx-auto max-w-7xl px-4 w-full">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
