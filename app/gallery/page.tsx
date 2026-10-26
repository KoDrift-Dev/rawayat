import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import { GoldButton, OutlineButton } from "@/components/ui";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WA_DATE } from "@/lib/site";
import { coverPhoto } from "@/lib/photos/cover";
import { stagePhoto } from "@/lib/photos/stage";
import { mainHallPhoto } from "@/lib/photos/mainHall";
import { hall2Photo } from "@/lib/photos/hall2";
import { hall3Photo } from "@/lib/photos/hall3";
import { marqueePhoto } from "@/lib/photos/marquee";
import { interior1Photo } from "@/lib/photos/interior1";
import { interior2Photo } from "@/lib/photos/interior2";
import { interior3Photo } from "@/lib/photos/interior3";

export const metadata: Metadata = {
  title: "Gallery — Rawayat Marquee & Marriage Hall, Kharian",
  description:
    "Photos of Rawayat Marquee & Marriage Hall, Kharian: halls, stage and interiors. Enquire on WhatsApp +92 300 0441286.",
};

const PHOTOS = [
  { src: coverPhoto, label: "Venue Exterior" },
  { src: stagePhoto, label: "Wedding Stage" },
  { src: mainHallPhoto, label: "Main Hall" },
  { src: hall2Photo, label: "Hall 2" },
  { src: hall3Photo, label: "Hall 3 — representative photo for now" },
  { src: marqueePhoto, label: "Marquee — representative photo for now" },
  { src: interior1Photo, label: "Interior Corridor" },
  { src: interior2Photo, label: "Interior Seating" },
  { src: interior3Photo, label: "Entrance Doors" },
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        center
        kicker="Gallery"
        title={
          <>
            Rawayat <span className="text-gold italic">Gallery</span>
          </>
        }
      >
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#dfe8df]">
          Halls, stage and interiors at a glance — imagine your day here.
        </p>
      </Hero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((g) => (
            <div key={g.label} className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <Image src={g.src} alt={g.label} width={800} height={600} className="h-60 w-full object-cover" />
              <p className="px-4 py-2.5 text-sm font-semibold text-green">{g.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-green">Pasand aya?</h2>
          <p className="mx-auto mt-2 max-w-md text-muted">
            Apni date ki availability abhi check karein — bilkul free.
          </p>
          <p className="mt-5 flex flex-wrap justify-center gap-3">
            <GoldButton href={WA_DATE}>
              <span className="inline-flex items-center gap-2">
                <WhatsAppIcon className="h-5 w-5" />
                Check My Date
              </span>
            </GoldButton>
            <OutlineButton href="/menu">Explore Menus</OutlineButton>
          </p>
        </div>
      </section>
    </>
  );
}
