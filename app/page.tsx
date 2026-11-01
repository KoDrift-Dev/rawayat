import Hero from "@/components/Hero";
import { Badge, Btn, Chip, Img, Reveal, SectionHead, StaggerItem } from "@/components/ui";
import { ExtrasCard, MenuPreviewCard } from "@/components/MenuCard";
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
  PHONE_DISPLAY,
  PHONE_TEL,
  WA_DATE,
  WA_GENERAL,
} from "@/lib/site";
import { MENUS } from "@/lib/menu-data";
import { HALLS, hallWaLink } from "@/lib/halls";

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
          <Btn to="/menu" variant="outline-light">
            Explore Menus
          </Btn>
        </div>
        <span className="hero-badge">
          <span style={{ letterSpacing: "0.12em", color: "var(--color-champagne-300)" }}>★★★★★</span>
          4.9 rating · 144 reviews
        </span>
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
            action={
              <Btn to="/menu" variant="outline" size="sm">
                View Complete Menu
              </Btn>
            }
          />
          <div className="grid grid-3" style={{ marginBottom: 28 }}>
            {MENUS.map((menu, i) => (
              <MenuPreviewCard key={menu.id} menu={menu} index={i} />
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
        <Reveal>
          <div className="chip-row" style={{ justifyContent: "center" }}>
            {FUNCTIONS.map((f) => (
              <Chip key={f.name}>{f.name}</Chip>
            ))}
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="section bg-wash-mint">
        <div className="wrap grid grid-2" style={{ alignItems: "center" }}>
          <Reveal>
            <article className="card">
              <div className="card-img" style={{ aspectRatio: "3/4" }}>
                <Img src={stagePhoto} alt="Decorated wedding stage at Rawayat Marquee & Marriage Hall" width={720} height={960} />
              </div>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="eyebrow">
                <span className="rule" />
                About Us
              </span>
              <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)" }}>
                Kharian&apos;s <em>trusted</em> name for celebrations
              </h2>
              <p className="lead">
                Rawayat Marquee &amp; Marriage Hall is where Kharian families celebrate their most special days.
                Spacious halls, beautiful decor, a trained team and food your guests will talk about long after the
                event.
              </p>
              <ul className="why-list" style={{ marginBottom: 20 }}>
                <li><strong>Clear Details</strong>&nbsp;— everything about your event is clear from day one.</li>
                <li><strong>In-house Catering</strong>&nbsp;— the venue&apos;s own kitchen, fresh food served on time.</li>
                <li><strong>Trained Staff</strong>&nbsp;— hospitality the team is known for, at every event.</li>
                <li><strong>Prime Location</strong>&nbsp;— easy to reach in Kharian, with spacious parking.</li>
              </ul>
              <Btn to="/about" variant="outline">
                More About Us
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="wrap section">
        <SectionHead
          center
          eyebrow="Gallery"
          title={<>A glimpse of <em>Rawayat</em></>}
          action={
            <Btn to="/gallery" variant="outline" size="sm">
              View Full Gallery
            </Btn>
          }
        />
        <Reveal>
          <div className="gallery">
            <Img src={stagePhoto} alt="Wedding Stage" width={800} height={600} className="main" />
            <Img src={mainHallPhoto} alt="Main Hall" width={600} height={450} />
            <Img src={hall2Photo} alt="Hall 2" width={600} height={450} />
            <Img src={interior1Photo} alt="Interiors" width={600} height={450} />
          </div>
        </Reveal>
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
        <div className="grid grid-2" style={{ marginBottom: 24 }}>
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
            style={{ width: "100%", height: 380, borderRadius: 22, border: "1px solid rgba(198,161,91,.25)" }}
          />
        </Reveal>
      </section>
    </>
  );
}
