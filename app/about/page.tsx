import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { Btn, Img, Reveal, SectionHead, StaggerItem } from "@/components/ui";
import { HOURS, LOCATION, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, WA_GENERAL } from "@/lib/site";
import { interior2Photo } from "@/lib/photos/interior2";
import { interior3Photo } from "@/lib/photos/interior3";
import { logoLightPhoto } from "@/lib/photos/logoLight";
import { stagePhoto } from "@/lib/photos/stage";

export const metadata: Metadata = {
  title: "About Us — Rawayat Marquee & Marriage Hall, Kharian",
  description:
    "About Rawayat Marquee & Marriage Hall, Kharian, Punjab, Pakistan. Contact on WhatsApp or call +92 300 0441286.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title={<>Rawayat Marquee &amp; <em>Marriage Hall</em></>}
        sub="A wedding venue in Kharian, Punjab, Pakistan."
      />

      <section className="wrap section">
        <div className="grid grid-2" style={{ alignItems: "center" }}>
          <Reveal>
            <div>
              <SectionHead
                eyebrow="About Us"
                title="A venue for your special celebrations"
                lead="Rawayat Marquee & Marriage Hall is a wedding venue in Kharian, Punjab, Pakistan. It offers four spaces — Main Hall, Hall 2, Hall 3 and a Marquee — and three wedding menus, with extra dishes available."
              />
              <p className="muted">
                For dates, availability and hall details, please contact the venue directly. This website is
                for information and enquiries only — it does not take online bookings.
              </p>
              <article className="card" style={{ marginTop: 20 }}>
                <div className="card-body">
                  <p className="small"><strong>Location</strong><br /><span className="muted">{LOCATION}</span></p>
                  <p className="small"><strong>Visiting Hours</strong><br /><span className="muted">{HOURS}</span></p>
                  <p className="small" style={{ marginBottom: 14 }}>
                    <strong>Telephone</strong><br />
                    <a href={PHONE_TEL} style={{ fontWeight: 700, color: "var(--color-pine-700)" }}>
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    <Btn href={WA_GENERAL} external variant="primary" size="sm">
                      WhatsApp Us
                    </Btn>
                    <Btn href={MAPS_URL} external variant="gold" size="sm">
                      Get Directions
                    </Btn>
                  </div>
                </div>
              </article>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <article className="card">
              <div className="card-img" style={{ aspectRatio: "1/1", background: "var(--color-cream-200)" }}>
                <Img src={logoLightPhoto} alt="Rawayat logo" width={800} height={800} />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section bg-wash-warm" style={{ paddingTop: 46 }}>
        <div className="wrap">
          <SectionHead center eyebrow="Inside the Venue" title="Interiors" />
          <div className="grid grid-3">
            {[
              { src: interior2Photo, alt: "Interior corridor with seating at Rawayat Marquee & Marriage Hall" },
              { src: interior3Photo, alt: "Interior entrance doors at Rawayat Marquee & Marriage Hall" },
              { src: stagePhoto, alt: "Decorated wedding stage at Rawayat Marquee & Marriage Hall" },
            ].map((img, i) => (
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
