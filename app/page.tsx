import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { GoldButton, GreenButton, OutlineButton, SectionHeading, WhatsAppButton } from "@/components/ui";
import { interior1Photo } from "@/lib/photos/interior1";
import { stagePhoto } from "@/lib/photos/stage";
import {
  LOCATION,
  MAPS_EMBED,
  MAPS_URL,
  MENUS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WA_GENERAL,
  WA_MENU,
} from "@/lib/site";
import { HALLS } from "@/lib/halls";

function ContactBox() {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
      <dl>
        <dt className="font-bold text-green">Venue</dt>
        <dd className="mb-3 text-muted">Rawayat Marquee &amp; Marriage Hall</dd>
        <dt className="font-bold text-green">Location</dt>
        <dd className="mb-3 text-muted">{LOCATION}</dd>
        <dt className="font-bold text-green">Telephone</dt>
        <dd className="mb-3">
          <a href={PHONE_TEL} className="font-semibold text-ink hover:underline">
            {PHONE_DISPLAY}
          </a>
        </dd>
        <dt className="font-bold text-green">WhatsApp</dt>
        <dd>
          <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="font-semibold text-ink hover:underline">
            Chat on WhatsApp
          </a>
        </dd>
      </dl>
      <p className="mt-5 flex flex-wrap gap-2.5">
        <GreenButton href={MAPS_URL}>Get Directions</GreenButton>
        <WhatsAppButton href={WA_GENERAL}>WhatsApp Us</WhatsAppButton>
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero kicker={LOCATION} tall title={<>Rawayat Marquee &amp;<br />Marriage Hall</>}>
        <p className="mt-4 max-w-xl text-lg text-[#dfe8df]">A beautiful venue for your special celebrations.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <GoldButton href="/halls">Explore Our Halls</GoldButton>
          <WhatsAppButton href={WA_GENERAL}>Contact on WhatsApp</WhatsAppButton>
        </div>
      </Hero>

      <section className="mx-auto grid max-w-6xl items-center gap-9 px-5 py-16 md:grid-cols-2">
        <div>
          <SectionHeading
            kicker="Welcome"
            title="A venue made for your special day"
            lead="Rawayat Marquee & Marriage Hall is a wedding venue in Kharian, Punjab, Pakistan, with four spaces to choose from — Main Hall, Hall 2, Hall 3 and a Marquee — along with three wedding menus for your celebrations."
          />
          <p className="mt-4 text-muted">
            For dates, availability and menu details, please contact the venue directly on WhatsApp or by telephone. This
            website does not take online bookings.
          </p>
          <p className="mt-6">
            <OutlineButton href="/about">More About Us</OutlineButton>
          </p>
        </div>
        <Image
          src={stagePhoto}
          alt="Decorated wedding stage at Rawayat Marquee & Marriage Hall"
          width={960}
          height={1280}
          className="h-[420px] w-full rounded-2xl object-cover"
        />
      </section>

      <section className="border-y border-line bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            center
            kicker="Our Halls"
            title="Four spaces, one celebration"
            lead="Choose the space that suits your event. Hall 3 and Marquee photos are representative images for now and will be replaced with the venue's own photos when available."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HALLS.map((hall) => (
              <article key={hall.id} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                <Image src={hall.image} alt={hall.alt} width={800} height={600} className="h-56 w-full object-cover" />
                <div className="flex flex-1 flex-col gap-1.5 p-5">
                  <h3 className="font-serif text-2xl font-bold text-green">{hall.name}</h3>
                  <p className="text-muted">{hall.blurb}</p>
                  {hall.representative ? <p className="text-sm text-muted">Representative photo for now.</p> : null}
                  <p className="mt-auto pt-2">
                    <Link href={`/halls#${hall.id}`} className="inline-block rounded-full border border-green px-4 py-2 text-sm font-bold text-green hover:bg-green hover:text-white">
                      View Details
                    </Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center">
            <GreenButton href="/halls">View All Halls</GreenButton>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          center
          kicker="Our Menu"
          title="Three wedding menus"
          lead="Each menu below is shown exactly as supplied by the venue. A slash (/) separates the options listed on that line. Prices are not listed — please ask on WhatsApp."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {MENUS.map((menu) => (
            <article key={menu.id} className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="font-serif text-2xl font-bold text-green">{menu.name}</h3>
              <p className="mt-2 text-muted">
                {menu.lines[0].en}, Chicken Biryani / Chicken Fried Rice, dessert, fresh salad, raita, bottle and
                tandoori roti / roghni naan / manday.
              </p>
              <p className="mt-auto pt-4">
                <Link href={`/menu#${menu.id}`} className="inline-block rounded-full border border-green px-4 py-2 text-sm font-bold text-green hover:bg-green hover:text-white">
                  View {menu.name}
                </Link>
              </p>
            </article>
          ))}
        </div>
        <p className="mt-7 flex flex-wrap justify-center gap-3">
          <GreenButton href="/menu">View Complete Menu</GreenButton>
          <WhatsAppButton href={WA_MENU}>Ask About the Menu</WhatsAppButton>
        </p>
      </section>

      <section className="border-t border-line bg-cream py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 md:grid-cols-2">
          <Image
            src={interior1Photo}
            alt="Interior corridor at Rawayat Marquee & Marriage Hall"
            width={960}
            height={1280}
            className="h-[420px] w-full rounded-2xl object-cover"
          />
          <div>
            <SectionHeading
              kicker="About Us"
              title="A wedding venue in Kharian"
              lead="Rawayat Marquee & Marriage Hall welcomes weddings and family celebrations in Kharian, Punjab, Pakistan. For everything about your event — halls, menu and availability — the team can be reached directly on WhatsApp or by telephone."
            />
            <p className="mt-6">
              <OutlineButton href="/about">About Us</OutlineButton>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading center kicker="Location & Contact" title="Visit or contact us" />
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <ContactBox />
          <iframe
            className="h-[380px] w-full rounded-2xl border border-line max-md:h-[300px]"
            title="Map — Rawayat Marquee & Marriage Hall, Kharian"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={MAPS_EMBED}
          />
        </div>
      </section>
    </>
  );
}
