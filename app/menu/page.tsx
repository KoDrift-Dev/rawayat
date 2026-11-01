import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { ExtrasCatalog, MenuCatalogSection, MenuPackageCard } from "@/components/MenuCard";
import { Badge, Btn, PageHead, Reveal } from "@/components/ui";
import { PHONE_DISPLAY, PHONE_TEL, WA_MENU } from "@/lib/site";
import { MENUS } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Wedding Menu — Rawayat Marquee & Marriage Hall, Kharian",
  description:
    "Menu 1, Menu 2 and Menu 3 plus extra dishes at Rawayat Marquee & Marriage Hall, Kharian. Enquire on WhatsApp +92 300 0441286.",
};

export default function MenuPage() {
  return (
    <>
      <Hero
        eyebrow="Food & Menus"
        title={<>Wedding <em>menu packages</em></>}
        sub="Three curated wedding menus, plus a full extra-dishes catalog — every dish with its photo."
      >
        <div className="hero-ctas">
          <Btn href={WA_MENU} external variant="gold">
            Ask About Menus on WhatsApp
          </Btn>
          <Btn href={PHONE_TEL} variant="outline-light">
            Call {PHONE_DISPLAY}
          </Btn>
        </div>
      </Hero>

      <section className="wrap section-tight">
        <PageHead
          eyebrow="Our Menus"
          title="Three wedding menus"
          lead="Pick a menu, then ask about it on WhatsApp — the venue confirms the final details with you directly."
        />
        <div className="grid grid-3" style={{ marginBottom: 8 }}>
          {MENUS.map((menu, i) => (
            <MenuPackageCard key={menu.id} menu={menu} index={i} />
          ))}
        </div>
      </section>

      <section className="section bg-wash-warm" style={{ paddingTop: 46 }}>
        <div className="wrap">
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 30, flexWrap: "wrap" }}>
              <span className="eyebrow" style={{ marginBottom: 0 }}>
                <span className="rule" />
                Full catalog
              </span>
              <Badge tone="gold">No prices — ask on WhatsApp</Badge>
            </div>
          </Reveal>
          {MENUS.map((menu) => (
            <MenuCatalogSection key={menu.id} menu={menu} />
          ))}
          <ExtrasCatalog />
          <Reveal>
            <p style={{ marginTop: 36, textAlign: "center" }}>
              <Btn href={PHONE_TEL} variant="primary" size="lg">
                Call {PHONE_DISPLAY}
              </Btn>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
