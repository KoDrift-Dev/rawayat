import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import { OutlineButton } from "@/components/ui";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { HALLS } from "@/lib/halls";
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
      <Hero center kicker="Our Halls" title={<>Four spaces for<br />your celebration</>}>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#dfe8df]">
          Main Hall, Hall 2, Hall 3 and a Marquee — all at Rawayat Marquee &amp; Marriage Hall, Kharian.
        </p>
      </Hero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="max-w-2xl text-lg text-muted">
          Four spaces for weddings and family celebrations — Main Hall, Hall 2, Hall 3 and a Marquee. Starting prices
          are shown for each hall; confirm your date, guest count and final price on WhatsApp or by telephone. Hall 3
          and Marquee photos are representative images for now, clearly marked below, and will be replaced with the
          venue&apos;s own photos when available.
        </p>

        <div className="mt-8">
          {HALLS.map((hall, i) => (
            <div
              key={hall.id}
              id={hall.id}
              className="grid scroll-mt-28 items-center gap-8 border-b border-line py-9 last:border-b-0 md:grid-cols-2"
            >
              <Image
                src={hall.image}
                alt={hall.alt}
                width={900}
                height={675}
                className={`h-[360px] w-full rounded-2xl object-cover max-md:h-[260px] ${i % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div>
                <p className="mb-2 text-xs font-bold tracking-[0.18em] text-gold-dark uppercase">
                  Hall 0{i + 1}
                </p>
                <h2 className="font-serif text-4xl font-bold text-green">{hall.name}</h2>
                <hr className="mt-4 h-[3px] w-16 border-0 bg-gold" />
                <p className="mt-4 text-muted">{hall.blurb}</p>
                <p className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-green/30 px-3 py-1 text-sm font-bold text-green">
                    {hall.guests} guests
                  </span>
                  <span className="rounded-full bg-[#f9efdb] px-3 py-1 text-xs font-bold text-gold-dark">Indoor</span>
                  <span className="font-bold text-green">Hall from {hall.priceFrom}</span>
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {hall.amenities.map((a) => (
                    <li key={a} className="text-sm text-muted">
                      <span className="mr-1.5 font-bold text-gold-dark">✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
                {hall.representative ? (
                  <p className="mt-2 text-sm text-muted">
                    Representative photo for now — the venue&apos;s own {hall.name.toLowerCase()} photo will replace it
                    when supplied.
                  </p>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <OutlineButton href={PHONE_TEL}>Call {PHONE_DISPLAY}</OutlineButton>
                </div>
              </div>
            </div>
          ))}
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
            {INTERIORS.map((img) => (
              <Image key={img.src} src={img.src} alt={img.alt} width={800} height={600} className="h-60 w-full rounded-2xl object-cover" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
