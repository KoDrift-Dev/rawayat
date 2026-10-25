import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { OutlineButton, WhatsAppButton } from "@/components/ui";
import { EXTRA_DISHES, MENUS, PHONE_DISPLAY, PHONE_TEL, WA_MENU, menuWaLink, type MenuLine } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding Menu — Rawayat Marquee & Marriage Hall, Kharian",
  description:
    "Menu 1, Menu 2 and Menu 3 plus extra dishes at Rawayat Marquee & Marriage Hall, Kharian. Enquire on WhatsApp +92 300 0441286.",
};

function DishLine({ line }: { line: MenuLine }) {
  return (
    <li className="flex items-baseline justify-between gap-3.5 border-b border-dashed border-line pb-2.5 last:border-b-0 last:pb-0">
      <span className="font-semibold">{line.en}</span>
      <span dir="rtl" lang="ur" className="text-right font-urdu leading-8 text-green">
        {line.ur}
      </span>
    </li>
  );
}

export default function MenuPage() {
  return (
    <>
      <Hero kicker="Wedding Menu" title={<>Our menu &amp; packages</>}>
        <p className="mt-4 max-w-xl text-lg text-[#dfe8df]">
          Three wedding menus, plus extra dishes — exactly as supplied by the venue.
        </p>
      </Hero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-xl border border-[#cfe0d3] border-l-4 border-l-gold bg-green-soft p-5">
          <p className="text-[#33463a]">
            <strong>How to read these menus:</strong> a slash (/) separates the options listed on that line. No prices
            are shown here, because none were supplied — please ask about prices on WhatsApp or by telephone.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {MENUS.map((menu) => (
            <article key={menu.id} id={menu.id} className="scroll-mt-28 rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="font-serif text-3xl font-bold text-green">{menu.name}</h3>
              <ul className="mt-4 grid gap-2.5">
                {menu.lines.map((line) => (
                  <DishLine key={line.en} line={line} />
                ))}
              </ul>
              <p className="mt-5">
                <WhatsAppButton href={menuWaLink(menu)} small>
                  Inquire About {menu.name}
                </WhatsAppButton>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-serif text-4xl font-bold text-green">Extra Dishes</h2>
          <hr className="mt-4 h-[3px] w-16 border-0 bg-gold" />
          <p className="mt-4 max-w-2xl text-lg text-muted">Additional items available alongside the menus above.</p>
          <ul className="mt-6 gap-x-7 sm:columns-2">
            {EXTRA_DISHES.map((dish) => (
              <li
                key={dish.en}
                className="mb-2 flex break-inside-avoid items-baseline justify-between gap-3.5 border-b border-dashed border-line py-2"
              >
                <span className="font-semibold">{dish.en}</span>
                <span dir="rtl" lang="ur" className="text-right font-urdu leading-8 text-green">
                  {dish.ur}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-7 flex flex-wrap gap-2.5">
            <WhatsAppButton href={WA_MENU}>Ask About the Menu on WhatsApp</WhatsAppButton>
            <OutlineButton href={PHONE_TEL}>Call {PHONE_DISPLAY}</OutlineButton>
          </p>
        </div>
      </section>
    </>
  );
}
