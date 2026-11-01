import type { Metadata } from "next";
import { Inter, Noto_Nastaliq_Urdu, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const sans = Inter({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const urdu = Noto_Nastaliq_Urdu({ variable: "--font-urdu", subsets: ["arabic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Rawayat Marquee & Marriage Hall — Kharian, Punjab, Pakistan",
  description:
    "Rawayat Marquee & Marriage Hall in Kharian, Punjab, Pakistan. Four halls including a marquee, three wedding menus and direct WhatsApp and telephone enquiries. Call +92 300 0441286.",
  openGraph: {
    title: "Rawayat Marquee & Marriage Hall — Kharian",
    description: "A beautiful venue for your special celebrations in Kharian, Punjab, Pakistan.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${urdu.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
