import Image from "next/image";
import Link from "next/link";
import { EXTRA_DISHES, type Menu, type MenuLine } from "@/lib/site";

/**
 * Preview card heading (home showcase): main heading = "Menu 1",
 * sub heading = the first item (e.g. "Mutton Qorma / Mutton Karahi").
 */
function PreviewHeading({ menu, big = false }: { menu: Menu; big?: boolean }) {
  const first = menu.lines[0];
  return (
    <div>
      <h3 className={`font-serif font-bold text-green ${big ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>{menu.name}</h3>
      <p className={`mt-1 font-semibold text-green ${big ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>{first.en}</p>
      <p dir="rtl" lang="ur" className={`text-right font-urdu leading-8 text-gold-dark sm:leading-9 ${big ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
        {first.ur}
      </p>
    </div>
  );
}

/** Showcase preview card for the home page — headings + plain item list, no photos. */
export function MenuCardPreview({ menu }: { menu: Menu }) {
  return (
    <article className="glass-card flex flex-col p-4 sm:p-6">
      <PreviewHeading menu={menu} />
      <ul className="mt-3">
        {menu.lines.slice(1).map((line: MenuLine) => (
          <li
            key={line.en}
            className="flex items-baseline justify-between gap-3 border-b border-dashed border-line py-1.5 last:border-b-0 sm:py-2"
          >
            <span title={line.en} className="truncate text-sm text-ink">{line.en}</span>
            <span dir="rtl" lang="ur" className="shrink-0 text-right font-urdu text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {line.ur}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-3 sm:pt-4">
        <Link
          href={`/menu#${menu.id}`}
          className="inline-block rounded-full border border-green px-3.5 py-1.5 text-[13px] font-bold text-green hover:bg-green hover:text-white sm:px-4 sm:py-2 sm:text-sm"
        >
          View {menu.name}
        </Link>
      </p>
    </article>
  );
}

/** Dish card with photo — ShadiSphere menus-page style (no prices). */
function DishCard({ line }: { line: MenuLine }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <Image src={line.img} alt={line.en} width={640} height={360} className="aspect-video w-full object-cover" />
      <div className="p-2.5 sm:p-4">
        <h4 title={line.en} className="truncate text-sm font-semibold text-green sm:text-base">{line.en}</h4>
        <p dir="rtl" lang="ur" className="mt-0.5 text-right font-urdu text-base leading-7 text-muted sm:mt-1 sm:text-lg sm:leading-8">
          {line.ur}
        </p>
      </div>
    </article>
  );
}

/** Package-style card for the /menu page top — photo, title, tagline, dish list. */
export function MenuPackageCard({ menu }: { menu: Menu }) {
  const first = menu.lines[0];
  const rest = menu.lines.slice(1);
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card">
      <Image src={first.img} alt={first.en} width={800} height={450} className="aspect-video w-full object-cover" />
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <p className="mb-1 text-xs font-bold tracking-[0.22em] text-gold-dark uppercase">{menu.name}</p>
        <h3 className="font-serif text-xl font-bold text-green sm:text-2xl">{first.en}</h3>
        <p dir="rtl" lang="ur" className="text-right font-urdu text-lg leading-8 text-muted">
          {first.ur}
        </p>
        <ul className="mt-3 sm:mt-4">
          {rest.slice(0, 5).map((l) => (
            <li key={l.en} className="border-b border-dashed border-line py-1 text-[13px] text-ink last:border-b-0 sm:py-1.5 sm:text-sm">
              <span className="mr-1.5 font-bold text-gold-dark">✓</span>
              {l.en}
            </li>
          ))}
          {rest.length > 5 && (
            <li className="py-1 text-[13px] font-semibold text-gold-dark sm:py-1.5 sm:text-sm">+{rest.length - 5} more dishes</li>
          )}
        </ul>
        <p className="mt-auto pt-4 sm:pt-5">
          <Link
            href={`/menu#${menu.id}`}
            className="block w-full rounded-full border border-green px-4 py-2 text-center text-sm font-bold text-green hover:bg-green hover:text-white sm:py-2.5"
          >
            View Full Menu
          </Link>
        </p>
      </div>
    </article>
  );
}

/** Full dish catalog for one menu on the /menu page. */
export function MenuCatalogSection({ menu }: { menu: Menu }) {
  const first = menu.lines[0];
  return (
    <section id={menu.id} className="mb-10 scroll-mt-28 sm:mb-14">
      <div className="mb-1 flex items-center gap-4">
        <h3 className="font-serif text-2xl font-bold text-green sm:text-3xl">{menu.name}</h3>
        <span aria-hidden="true" className="h-[3px] flex-1 rounded bg-gold/60" />
        <span className="text-sm text-muted">{menu.lines.length} items</span>
      </div>
      <p className="mb-4 text-sm text-muted sm:mb-5 sm:text-base">
        {first.en} <span dir="rtl" lang="ur" className="font-urdu text-gold-dark">{first.ur}</span>
      </p>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {menu.lines.map((line) => (
          <DishCard key={line.en} line={line} />
        ))}
      </div>
    </section>
  );
}

/** Extra dishes catalog for the /menu page. */
export function ExtrasCatalog() {
  return (
    <section className="mb-4">
      <div className="mb-1 flex items-center gap-4">
        <h3 className="font-serif text-2xl font-bold text-green sm:text-3xl">Extra Dishes</h3>
        <span aria-hidden="true" className="h-[3px] flex-1 rounded bg-gold/60" />
        <span className="text-sm text-muted">{EXTRA_DISHES.length} items</span>
      </div>
      <p dir="rtl" lang="ur" className="mb-4 text-right font-urdu text-lg leading-8 text-gold-dark sm:mb-5 sm:text-xl sm:leading-9">
        اضافی ڈشز
      </p>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {EXTRA_DISHES.map((dish) => (
          <DishCard key={dish.en} line={dish} />
        ))}
      </div>
    </section>
  );
}

/** Extras card for the home page — every extra dish with its photo. */
export function ExtrasCard() {
  return (
    <article className="glass-card p-4 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-serif text-2xl font-bold text-green sm:text-3xl">Extra Dishes</h3>
        <span dir="rtl" lang="ur" className="font-urdu text-xl leading-9 text-gold-dark sm:text-2xl sm:leading-10">
          اضافی ڈشز
        </span>
      </div>
      <p className="mt-1.5 text-sm text-muted sm:mt-2 sm:text-base">Additional items available alongside the menus above.</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:grid-cols-3 sm:gap-4">
        {EXTRA_DISHES.map((dish) => (
          <div key={dish.en} className="overflow-hidden rounded-2xl border border-line bg-white">
            <Image src={dish.img} alt={dish.en} width={400} height={300} className="h-20 w-full object-cover sm:h-24" />
            <div className="p-2 sm:p-2.5">
              <p className="truncate text-[13px] font-semibold text-green sm:text-sm">{dish.en}</p>
              <p dir="rtl" lang="ur" className="text-right font-urdu text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {dish.ur}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
