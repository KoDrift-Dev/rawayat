import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { Badge, Btn, Img, PageHead, Reveal, StaggerItem } from "@/components/ui";
import { PHONE_DISPLAY, PHONE_TEL, WA_GENERAL } from "@/lib/site";
import { HALLS, hallWaLink } from "@/lib/halls";
import { interior1Photo } from "@/lib/photos/interior1";
import { interior2Photo } from "@/lib/photos/interior2";
import { interior3Photo } from "@/lib/photos/interior3";

export const metadata: Metadata = {
  title: "Our Halls — Rawayat Marquee & Marriage Hall, Kharian",
  description:
    "Main Hall, Hall 2, Hall 3 and Marquee at Rawayat Marquee & Marriage Hall, Kharian, Punjab, Pakistan. Enquire on WhatsApp +92 300 0441286.",
};

const INTERIORS = [
  { src: interior1Photo, alt: "Interior corridor at Rawayat Marquee & Marriage Hall" },
  { src: interior2Photo, alt: "Interior corridor with seating at Rawayat Marquee & Marriage Hall" },
  { src: interior3Photo, alt: "Interior entrance doors at Rawayat Marquee & Marriage Hall" },
];

export default function HallsPage() {
  return (
    <>
      <Hero
        eyebrow="Our Halls"
        title={<>Four spaces for <em>your celebration</em></>}
        sub="Main Hall, Hall 2, Hall 3 and a Marquee — all at Rawayat Marquee & Marriage Hall, Kharian."
      >
        <div className="hero-ctas">
          <Btn href={WA_GENERAL} external variant="gold">
            Check Availability on WhatsApp
          </Btn>
          <Btn to="/gallery" variant="outline-light">
            See Photos
          </Btn>
        </div>
      </Hero>

      <section className="wrap section-tight">
        <PageHead
          eyebrow="The Spaces"
          title="Halls & marquee"
          lead="Four spaces for weddings and family celebrations. Confirm your date and guest count on WhatsApp or by telephone."
        />
        <div className="grid" style={{ gap: 28 }}>
          {HALLS.map((hall, i) => (
            <StaggerItem key={hall.id} index={i}>
              <article className="card pkg-card" id={hall.id} style={{ scrollMarginTop: 90 }}>
                {hall.badge && (
                  <span className="badge badge-gold pkg-flag">
                    <span
                      style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-champagne-600)", display: "inline-block" }}
                    />
                    {hall.badge}
                  </span>
                )}
                <div className="grid grid-2" style={{ gap: 0, alignItems: "stretch" }}>
                  <div className="card-img" style={{ aspectRatio: "auto", minHeight: 200, borderRadius: 0 }}>
                    <Img src={hall.image} alt={hall.alt} width={900} height={620} />
                  </div>
                  <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p className="eyebrow" style={{ marginBottom: 4 }}>
                      <span className="rule" />
                      Hall 0{i + 1}
                    </p>
                    <h3 className="card-title" style={{ fontSize: 26 }}>{hall.name}</h3>
                    <p className="card-meta">{hall.blurb}</p>
                    <div className="chip-row" style={{ marginBottom: 12 }}>
                      <Badge tone="green">{hall.guests} guests</Badge>
                      <Badge tone="gold">Indoor</Badge>
                      <Badge>{hall.id === "marquee" ? "Marquee" : "Banquet Hall"}</Badge>
                    </div>
                    <ul className="why-list small cols-2" style={{ marginBottom: 14 }}>
                      {hall.amenities.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                    {hall.representative && (
                      <p className="small muted">
                        Representative photo for now — the venue&apos;s own {hall.name.toLowerCase()} photo will replace
                        it when supplied.
                      </p>
                    )}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      <Btn href={hallWaLink(hall)} external variant="primary" size="sm">
                        Check Availability
                      </Btn>
                      <Btn href={PHONE_TEL} variant="outline" size="sm">
                        Call {PHONE_DISPLAY}
                      </Btn>
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </div>
      </section>

      <section className="section bg-wash-mint" style={{ paddingTop: 46 }}>
        <div className="wrap">
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <h3 style={{ margin: 0 }}>Interiors</h3>
              <span className="brandline" style={{ marginBottom: 0, flex: 1 }} />
            </div>
          </Reveal>
          <div className="grid grid-3">
            {INTERIORS.map((img, i) => (
              <StaggerItem key={img.alt} index={i}>
                <article className="card">
                  <div className="card-img">
                    <Img src={img.src} alt={img.alt} width={800} height={600} />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
