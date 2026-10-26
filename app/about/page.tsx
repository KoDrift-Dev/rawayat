import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import { GreenButton, SectionHeading, WhatsAppButton } from "@/components/ui";
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
      <Hero center kicker="About Us" title={<>Rawayat Marquee &amp;<br />Marriage Hall</>}>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#dfe8df]">A wedding venue in Kharian, Punjab, Pakistan.</p>
      </Hero>

      <section className="mx-auto grid max-w-6xl items-center gap-9 px-5 py-16 md:grid-cols-2">
        <div>
          <SectionHeading
            kicker="About Us"
            title="A venue for your special celebrations"
            lead="Rawayat Marquee & Marriage Hall is a wedding venue in Kharian, Punjab, Pakistan. It offers four spaces — Main Hall, Hall 2, Hall 3 and a Marquee — and three wedding menus, with extra dishes available."
          />
          <p className="mt-4 text-muted">
            For dates, availability, hall details and menu prices, please contact the venue directly. This website is
            for information and enquiries only — it does not take online bookings.
          </p>
          <div className="mt-6 rounded-2xl border border-line bg-white p-6 shadow-card">
            <dl>
              <dt className="font-bold text-green">Location</dt>
              <dd className="mb-3 text-muted">{LOCATION}</dd>
              <dt className="font-bold text-green">Visiting Hours</dt>
              <dd className="mb-3 text-muted">{HOURS}</dd>
              <dt className="font-bold text-green">Telephone</dt>
              <dd>
                <a href={PHONE_TEL} className="font-semibold text-ink hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </dl>
            <p className="mt-5 flex flex-wrap gap-2.5">
              <WhatsAppButton href={WA_GENERAL} small>
                WhatsApp Us
              </WhatsAppButton>
              <GreenButton href={MAPS_URL}>Get Directions</GreenButton>
            </p>
          </div>
        </div>
        <div>
          <Image
            src={logoLightPhoto}
            alt="Rawayat logo"
            width={1038}
            height={1024}
            className="max-h-[420px] w-full rounded-2xl bg-cream object-contain p-5"
          />
        </div>
      </section>

      <section className="border-t border-line bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="mb-2 text-xs font-bold tracking-[0.18em] text-gold-dark uppercase">Inside the Venue</p>
            <h2 className="font-serif text-4xl font-bold text-green">Interiors</h2>
            <hr className="mx-auto mt-4 h-[3px] w-16 border-0 bg-gold" />
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            <Image src={interior2Photo} alt="Interior corridor with seating at Rawayat Marquee & Marriage Hall" width={800} height={600} className="h-60 w-full rounded-2xl object-cover" />
            <Image src={interior3Photo} alt="Interior entrance doors at Rawayat Marquee & Marriage Hall" width={800} height={600} className="h-60 w-full rounded-2xl object-cover" />
            <Image src={stagePhoto} alt="Decorated wedding stage at Rawayat Marquee & Marriage Hall" width={800} height={600} className="h-60 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
