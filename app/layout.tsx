import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import RevealOnScroll from "@/components/RevealOnScroll";

const sans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const serif = DM_Serif_Display({ variable: "--font-dm-serif", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mia-tran-coach.vercel.app"),
  alternates: { canonical: "/" },
  title: "Free guide: Land your first freelance client in 30 days – Mia Tran",
  description: "A free 7-step guide for designers going freelance, from a fictional coach. A demo lead-magnet landing page.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script below adds the "js" class before React hydrates
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <RevealOnScroll />
        {children}
      </body>
    </html>
  );
}
