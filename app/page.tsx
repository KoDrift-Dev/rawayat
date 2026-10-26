import Image from "next/image";
import Hero from "@/components/Hero";
import { GoldButton, GreenButton, OutlineButton, SectionHeading, WhatsAppButton } from "@/components/ui";
import { ExtrasCard, MenuCardPreview } from "@/components/MenuCard";
import InquiryForm from "@/components/InquiryForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { interior1Photo } from "@/lib/photos/interior1";
import { stagePhoto } from "@/lib/photos/stage";
import { mainHallPhoto } from "@/lib/photos/mainHall";
import { hall2Photo } from "@/lib/photos/hall2";
import {
  FUNCTIONS,
  HOURS,
  LOCATION,
  MAPS_EMBED,
  MAPS_URL,
  MENUS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WA_DATE,
  WA_GENERAL,
} from "@/lib/site";
import { HALLS, hallWaLink } from "@/lib/halls";

function Eyebrow({ children, center = false }: { children: string; center?: boolean }) {
  return (
    <p className={`mb-2 text-xs font-bold tracking-[0.28em] text-gold-dark uppercase ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

function SectionTitle({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2 className={`font-serif text-4xl leading-tight font-bold text-green sm:text-5xl ${center ? "text-center" : ""}`}>
      {children}
    </h2>
  );
}

const EM = "text-gold italic";

export default function HomePage() {
  return (
    <>
      <Hero
        tall
        center
        kicker="Rawayat Marquee · Kharian"
        title={
          <>
            Rawayat Marquee
            <br />
            <span className="text-gold italic">Kharian</span>
          </>
        }
      >
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#e6dfc9]">
          Where Kharian celebrates its biggest days — weddings, walimas and family gatherings with beautiful halls,
          delicious food and dedicated service.
        </p>
        <p className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
            <span className="tracking-[0.12em] text-gold">★★★★☆</span> 4.2 rating · 14 reviews
          </span>
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <GoldButton href={WA_DATE}>
            <span className="inline-flex items-center gap-2">
              <WhatsAppIcon className="h-5 w-5" />
              Check Date on WhatsApp
            </span>
          </GoldButton>
          <a
            href="/menu"
            className="inline-block w-full max-w-xs rounded-full border-2 border-white bg-transparent px-5 py-3 text-center font-bold text-white hover:bg-white hover:text-green-dark sm:w-auto sm:max-w-none"
          >
            Explore Menus
          </a>
        </div>
      </Hero>

      <section id="halls" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <Eyebrow center>Our Halls</Eyebrow>
        <SectionTitle center>
          One venue, <em className={EM}>four spaces</em>
        </SectionTitle>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Four indoor spaces for every function — pick the hall that fits your guest list.
        </p>
        <div className="mt-8 flex flex-col gap-5">
          {HALLS.map((hall) => (
            <article key={hall.id} className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-card md:grid-cols-5">
              <div className="relative md:col-span-2">
                <Image src={hall.image} alt={hall.alt} width={900} height={675} className="h-60 w-full object-cover md:h-full" />
                {hall.badge ? (
                  <span className="absolute top-3 right-3 rounded-full bg-gold px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                    {hall.badge}
                  </span>
                ) : null}
              </div>
              <div className="p-5 md:col-span-3 lg:p-7">
                <p className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-soft px-3 py-1 text-xs font-bold text-green">
                    {hall.id === "marquee" ? "Marquee" : "Banquet Hall"}
                  </span>
                  <span className="rounded-full bg-[#f9efdb] px-3 py-1 text-xs font-bold text-gold-dark">Indoor</span>
                </p>
                <h3 className="mt-3 font-serif text-3xl font-bold text-green">{hall.name}</h3>
                <p className="mt-2 text-muted">{hall.blurb}</p>
                <p className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-green/30 px-3 py-1 text-sm font-bold text-green">
                    {hall.guests} guests
                  </span>
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
                  <p className="mt-3 text-sm text-muted">
                    Representative photo for now — the venue&apos;s own {hall.name.toLowerCase()} photo will replace it
                    when supplied.
                  </p>
                ) : null}
                <p className="mt-4 flex flex-wrap gap-2.5">
                  <WhatsAppButton href={hallWaLink(hall)}>Check Availability</WhatsAppButton>
                  <OutlineButton href="/gallery">See Photos</OutlineButton>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            center
            kicker="Our Menu"
            title="Three wedding menus"
            lead="Three wedding menus, plus extra dishes, for your celebration."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {MENUS.map((menu) => (
              <MenuCardPreview key={menu.id} menu={menu} />
            ))}
          </div>
          <div className="mt-5">
            <ExtrasCard />
          </div>
          <p className="mt-7 text-center">
            <GreenButton href="/menu">View Complete Menu</GreenButton>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Eyebrow center>Every Function</Eyebrow>
        <SectionTitle center>
          Barat se Walima tak, <em className={EM}>sab yahin</em>
        </SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FUNCTIONS.map((f) => (
            <div key={f.name} className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h3 className="font-serif text-xl font-bold text-green">{f.name}</h3>
              <p className="mt-1 text-sm text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-line bg-cream py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 md:grid-cols-2">
          <Image
            src={stagePhoto}
            alt="Decorated wedding stage at Rawayat Marquee & Marriage Hall"
            width={960}
            height={1280}
            className="h-[420px] w-full rounded-3xl object-cover"
          />
          <div>
            <Eyebrow>About Us</Eyebrow>
            <SectionTitle>
              Kharian&apos;s <em className={EM}>trusted</em> name for celebrations
            </SectionTitle>
            <p className="mt-4 text-muted">
              Rawayat Marquee &amp; Marriage Hall is where Kharian families celebrate their most special days.
              Spacious halls, beautiful decor, a trained team and food your guests will talk about long after the
              event — that is what the venue stands for.
            </p>
            <p className="mt-3 text-muted">
              Whether it is a small family gathering or a grand function, every event is looked after from planning
              to the final farewell.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["01", "Transparent Rates", "No hidden charges — everything is clear from day one."],
                ["02", "In-house Catering", "The venue's own kitchen — fresh, hot food, served on time."],
                ["03", "Trained Staff", "Hospitality the team is known for, at every event."],
                ["04", "Prime Location", "Easy to reach in Kharian, with spacious parking."],
              ].map(([n, t, d]) => (
                <div key={n} className="rounded-2xl bg-green-soft p-5">
                  <div className="font-serif text-2xl font-bold text-gold-dark">{n}</div>
                  <h3 className="mt-1 font-bold text-green">{t}</h3>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Eyebrow center>Gallery</Eyebrow>
        <SectionTitle center>
          A glimpse of <em className={EM}>Rawayat</em>
        </SectionTitle>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: stagePhoto, label: "Wedding Stage" },
            { src: mainHallPhoto, label: "Main Hall" },
            { src: hall2Photo, label: "Hall 2" },
            { src: interior1Photo, label: "Interiors" },
          ].map((g) => (
            <div key={g.label} className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <Image src={g.src} alt={g.label} width={800} height={600} className="h-48 w-full object-cover" />
              <p className="px-4 py-2.5 text-sm font-semibold text-green">{g.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 text-center">
          <GreenButton href="/gallery">View Full Gallery</GreenButton>
        </p>
      </section>

      <section className="border-y border-line bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow center>Reviews</Eyebrow>
          <SectionTitle center>
            Guests <em className={EM}>love</em> Rawayat
          </SectionTitle>
          <p className="mt-3 text-center text-muted">
            <span className="tracking-[0.12em] text-gold">★★★★☆</span> 4.2 rating · 14 reviews
          </p>
          <div className="mx-auto mt-7 max-w-2xl rounded-2xl border border-line bg-white p-6 shadow-card">
            <p className="text-lg text-muted italic">
              “Staff are very friendly and nice. Great service. Food was amazing.”
            </p>
            <p className="mt-3 font-bold text-green">Guest review · directory listing</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <Eyebrow center>Contact Us</Eyebrow>
        <SectionTitle center>
          Book your date <em className={EM}>today</em>
        </SectionTitle>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Wedding-season dates fill fast — send an inquiry and the details go straight to the venue&apos;s WhatsApp.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-5">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-card lg:col-span-2">
            <h3 className="text-xl font-bold text-green">Venue Information</h3>
            <dl className="mt-4">
              <dt className="font-bold text-green">Address</dt>
              <dd className="mb-3 text-sm text-muted">{LOCATION}</dd>
              <dt className="font-bold text-green">Visiting Hours</dt>
              <dd className="mb-3 text-sm text-muted">{HOURS}</dd>
              <dt className="font-bold text-green">Call / WhatsApp</dt>
              <dd>
                <a href={PHONE_TEL} className="text-sm font-semibold text-ink hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </dl>
            <p className="mt-5 flex flex-wrap gap-2.5">
              <a href={PHONE_TEL} className="inline-block rounded-full bg-gold px-5 py-3 text-center font-bold text-[#1d1a12] hover:bg-gold-dark hover:text-white">
                Call Now
              </a>
              <WhatsAppButton href={WA_GENERAL}>WhatsApp</WhatsAppButton>
            </p>
            <p className="mt-4">
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-sm font-bold text-gold-dark hover:underline">
                Open in Google Maps →
              </a>
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6 shadow-card lg:col-span-3">
            <h3 className="text-xl font-bold text-green">Booking Inquiry</h3>
            <div className="mt-4">
              <InquiryForm />
            </div>
          </div>
        </div>
        <iframe
          className="mt-5 h-[380px] w-full rounded-3xl border border-line max-md:h-[300px]"
          title="Map — Rawayat Marquee & Marriage Hall, Kharian"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={MAPS_EMBED}
        />
      </section>
    </>
  );
}
