import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["600", "700"] });
const sans = Inter({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "600", "700"] });
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
    <html lang="en" className={`${serif.variable} ${sans.variable} ${urdu.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-ivory font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
