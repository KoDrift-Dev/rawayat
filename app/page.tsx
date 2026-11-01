import Hero from "@/components/Hero";
import { Badge, Btn, Img, Reveal, SectionHead, StaggerItem } from "@/components/ui";
import { ExtrasCard, MenuPreviewCard } from "@/components/MenuCard";
import InquiryForm from "@/components/InquiryForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { interior1Photo } from "@/lib/photos/interior1";
import { interior2Photo } from "@/lib/photos/interior2";
import { coverPhoto } from "@/lib/photos/cover";
import { stagePhoto } from "@/lib/photos/stage";
import { mainHallPhoto } from "@/lib/photos/mainHall";
import { hall2Photo } from "@/lib/photos/hall2";
import {
  FUNCTIONS,
  HOURS,
  LOCATION,
  MAPS_EMBED,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WA_DATE,
  WA_GENERAL,
} from "@/lib/site";
import { MENUS } from "@/lib/menu-data";
import { HALLS, hallWaLink } from "@/lib/halls";

const FUNC_PHOTOS = [stagePhoto, mainHallPhoto, interior1Photo, interior2Photo, hall2Photo, coverPhoto];
const GALLERY_THUMBS = [
  { src: coverPhoto, alt: "Rawayat Marquee building at dusk" },
  { src: stagePhoto, alt: "Decorated wedding stage" },
  { src: mainHallPhoto, alt: "Main Hall" },
  { src: hall2Photo, alt: "Hall 2" },
  { src: interior1Photo, alt: "Chandelier corridor" },
  { src: interior2Photo, alt: "Corridor lounge" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Rawayat Marquee · Kharian"
        title={
          <>
            Rawayat Marquee <em>Kharian</em>
          </>
        }
        sub="Where Kharian celebrates its biggest days — weddings, walimas and family gatherings with beautiful halls, delicious food and dedicated service."
      >
        <div className="hero-ctas">
          <Btn href={WA_DATE} external variant="gold">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <WhatsAppIcon className="h-5 w-5" />
              Check Date on WhatsApp
            </span>
          </Btn>
          <Btn to="/menu" variant="outline-light" className="ml-auto">
            Explore Menus
          </Btn>
        </div>
        <div style={{ textAlign: "center" }}>
          <span className="hero-badge">
            <span style={{ letterSpacing: "0.12em", color: "var(--color-champagne-300)" }}>★★★★★</span>
            4.9 rating · 144 reviews
          </span>
        </div>
      </Hero>

      {/* Halls */}
      <section id="halls" className="wrap section" style={{ scrollMarginTop: 90 }}>
        <SectionHead
          center
          eyebrow="Our Halls"
          title={<>One venue, <em>four spaces</em></>}
          lead="Four indoor spaces for every function — pick the hall that fits your guest list."
        />
        <div className="grid grid-2">
          {HALLS.map((hall, i) => (
            <StaggerItem key={hall.id} index={i}>
              <article className="card pkg-card h-full">
                {hall.badge && (
                  <span className="badge badge-gold pkg-flag">
                    <span
                      style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-champagne-600)", display: "inline-block" }}
                    />
                    {hall.badge}
                  </span>
                )}
                <div className="card-img compact">
                  <Img src={hall.image} alt={hall.alt} width={900} height={450} />
                </div>
                <div className="card-body">
                  <div className="chip-row" style={{ marginBottom: 10 }}>
                    <Badge tone="green">{hall.id === "marquee" ? "Marquee" : "Banquet Hall"}</Badge>
                    <Badge tone="gold">Indoor</Badge>
                  </div>
                  <h3 className="card-title">{hall.name}</h3>
                  <p className="card-meta">{hall.blurb}</p>
                  <p style={{ marginBottom: 10 }}>
                    <Badge>{hall.guests} guests</Badge>
                  </p>
                  <ul className="why-list small cols-2" style={{ marginBottom: 16 }}>
                    {hall.amenities.slice(0, 6).map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  {hall.representative && (
                    <p className="small muted">Representative photo for now — the venue&apos;s own photo will replace it when supplied.</p>
                  )}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    <Btn href={hallWaLink(hall)} external variant="primary" size="sm">
                      Check Availability
                    </Btn>
                    <Btn to="/gallery" variant="outline" size="sm">
                      See Photos
                    </Btn>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </div>
      </section>

      {/* Menus */}
      <section className="section bg-wash-warm">
        <div className="wrap">
          <SectionHead
            center
            eyebrow="Our Menu"
            title="Three wedding menus"
            lead="Three wedding menus, plus extra dishes, for your celebration."
          />
          <div className="grid grid-3" style={{ marginBottom: 28, marginTop: -12 }}>
            {MENUS.map((menu, i) => (
              <MenuPreviewCard key={menu.id} menu={menu} index={i} tint={`menu-tint-${(i % 3) + 1}`} />
            ))}
          </div>
          <ExtrasCard />
        </div>
      </section>

      {/* Functions */}
      <section className="wrap section">
        <SectionHead
          center
          eyebrow="Every Function"
          title={<>Barat se Walima tak, <em>sab yahin</em></>}
        />
        <div className="func-grid">
          {FUNCTIONS.map((f, i) => (
            <StaggerItem key={f.name} index={i}>
              <div className={`func-item func-tint-${(i % 3) + 1}`}>
                <Img src={FUNC_PHOTOS[i % FUNC_PHOTOS.length]} alt={f.name} width={104} height={104} />
                <span>{f.name}</span>
              </div>
            </StaggerItem>
          ))}
        </div>
      </section>

      {/* About + Gallery */}
      <section className="section bg-wash-mint">
        <div className="wrap">        <SectionHead
          center
          eyebrow="About Us"
          title={<>Kharian&apos;s <em>trusted</em> name for celebrations</>}
          lead="Spacious indoor halls, beautiful decor, in-house catering and a trained team — Rawayat Marquee & Marriage Hall is where Kharian families celebrate their biggest days."
        />
        <Reveal>
          <div className="g-row" style={{ marginBottom: 22 }}>
            {GALLERY_THUMBS.map((g) => (
              <div className="g-thumb" key={g.alt}>
                <Img src={g.src} alt={g.alt} width={320} height={240} />
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <Btn to="/gallery" variant="outline">
              View All
            </Btn>
          </div>
        </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="wrap section-tight">
        <Reveal>
          <div className="promo-strip">
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3>
                Guests <em>love</em> Rawayat
              </h3>
              <p>
                <span style={{ letterSpacing: "0.12em", color: "var(--color-champagne-300)" }}>★★★★★</span>
                &nbsp;4.9 rating · 144 reviews
              </p>
              <p style={{ fontStyle: "italic", marginTop: 8, marginBottom: 0 }}>
                “Staff are very friendly and nice. Great service. Food was amazing.”
              </p>
              <p className="small" style={{ marginBottom: 0, opacity: 0.8 }}>
                Guest review · directory listing
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="wrap section" style={{ scrollMarginTop: 90 }}>
        <SectionHead
          center
          eyebrow="Contact Us"
          title={<>Book your date <em>today</em></>}
          lead="Wedding-season dates fill fast — send an inquiry and the details go straight to the venue's WhatsApp."
        />
        <div className="grid contact-grid" style={{ marginBottom: 20 }}>
          <Reveal>
            <article className="card h-full">
              <div className="card-body">
                <h3 className="card-title">Venue Information</h3>
                <div className="divider" style={{ margin: "12px 0" }} />
                <p className="small"><strong>Address</strong><br /><span className="muted">{LOCATION}</span></p>
                <p className="small"><strong>Visiting Hours</strong><br /><span className="muted">{HOURS}</span></p>
                <p className="small"><strong>Call / WhatsApp</strong><br />
                  <a href={PHONE_TEL} style={{ fontWeight: 700, color: "var(--color-pine-700)" }}>{PHONE_DISPLAY}</a>
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                  <Btn href={PHONE_TEL} variant="gold" size="sm">
                    Call Now
                  </Btn>
                  <Btn href={WA_GENERAL} external variant="primary" size="sm">
                    WhatsApp
                  </Btn>
                </div>
                <p style={{ marginTop: 12, marginBottom: 0 }}>
                  <a href={MAPS_URL} target="_blank" rel="noreferrer" className="small" style={{ fontWeight: 700, color: "var(--color-champagne-600)" }}>
                    Open in Google Maps →
                  </a>
                </p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="card h-full">
              <div className="card-body">
                <h3 className="card-title">Booking Inquiry</h3>
                <div className="divider" style={{ margin: "12px 0" }} />
                <InquiryForm />
              </div>
            </article>
          </Reveal>
        </div>
        <Reveal>
          <iframe
            title="Map — Rawayat Marquee & Marriage Hall, Kharian"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={MAPS_EMBED}
            style={{ width: "100%", height: 300, borderRadius: 22, border: "1px solid rgba(198,161,91,.25)" }}
          />
        </Reveal>
      </section>
    </>
  );
}
