import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { ExtrasCard, MenuCardFull } from "@/components/MenuCard";
import { OutlineButton } from "@/components/ui";
import { MENUS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding Menu — Rawayat Marquee & Marriage Hall, Kharian",
  description:
    "Menu 1, Menu 2 and Menu 3 plus extra dishes at Rawayat Marquee & Marriage Hall, Kharian. Enquire on WhatsApp +92 300 0441286.",
};

export default function MenuPage() {
  return (
    <>
      <Hero center kicker="Wedding Menu" title={<>Our menu &amp; packages</>}>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#dfe8df]">
          Three wedding menus, plus extra dishes, for your celebration.
        </p>
      </Hero>

      {/* One main heading that explains the menus, in Urdu first, then English. */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-2 text-center">
        <p className="mb-2 text-xs font-bold tracking-[0.18em] text-gold-dark uppercase">Our Menu</p>
        <h2 dir="rtl" lang="ur" className="font-urdu text-4xl leading-[1.8] font-bold text-green sm:text-5xl">
          ہمارے ویڈنگ مینیو
        </h2>
        <h3 className="mt-1 font-serif text-3xl font-bold text-green">Our Wedding Menus</h3>
        <hr className="mx-auto mt-5 h-[3px] w-16 border-0 bg-gold" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {MENUS.map((menu) => (
            <MenuCardFull key={menu.id} menu={menu} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <ExtrasCard />
          <p className="mt-6 text-center">
            <OutlineButton href={PHONE_TEL}>Call {PHONE_DISPLAY}</OutlineButton>
          </p>
        </div>
      </section>
    </>
  );
}
