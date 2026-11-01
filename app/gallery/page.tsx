import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { Btn, Img, Reveal, SectionHead, StaggerItem } from "@/components/ui";
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
        eyebrow="Gallery"
        title={<>Rawayat <em>Gallery</em></>}
        sub="Halls, stage and interiors at a glance — imagine your day here."
      />

      <section className="wrap section-tight">
        <SectionHead
          center
          eyebrow="Photos"
          title="The venue in pictures"
          lead="Nine photos — halls, stage and interiors."
        />
        <div className="grid grid-3">
          {PHOTOS.map((g, i) => (
            <StaggerItem key={g.label} index={i}>
              <article className="card h-full">
                <div className="card-img">
                  <Img src={g.src} alt={g.label} width={800} height={500} />
                </div>
                <div className="card-body" style={{ padding: "12px 18px" }}>
                  <p className="small" style={{ margin: 0, fontWeight: 600, color: "var(--color-pine-700)" }}>
                    {g.label}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </div>

        <Reveal>
          <div className="promo-strip" style={{ marginTop: 44 }}>
            <div style={{ position: "relative", zIndex: 1, flex: 1 }}>
              <h3>Pasand aya?</h3>
              <p>Apni date ki availability abhi check karein — bilkul free.</p>
            </div>
            <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Btn href={WA_DATE} external variant="gold">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <WhatsAppIcon className="h-5 w-5" />
                  Check My Date
                </span>
              </Btn>
              <Btn to="/menu" variant="outline-light">
                Explore Menus
              </Btn>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
