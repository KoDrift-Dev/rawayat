import Image from "next/image";
import Link from "next/link";
import { EXTRA_DISHES, type Menu, type MenuLine } from "@/lib/site";

/** Main heading of a menu card = its first item, e.g. "Mutton Qorma / Mutton Karahi". */
function MainHeading({ menu, big = false }: { menu: Menu; big?: boolean }) {
  const first = menu.lines[0];
  return (
    <div>
      <p className="mb-1 text-xs font-bold tracking-[0.22em] text-gold-dark uppercase">{menu.name}</p>
      <h3 className={`font-serif font-bold text-green ${big ? "text-4xl" : "text-3xl"}`}>{first.en}</h3>
      <p dir="rtl" lang="ur" className={`text-right font-urdu leading-9 text-gold-dark ${big ? "text-2xl" : "text-xl"}`}>
        {first.ur}
      </p>
    </div>
  );
}

function DishRow({ line }: { line: MenuLine }) {
  return (
    <li className="flex items-center gap-3 border-b border-dashed border-line py-2.5 last:border-b-0">
      <Image src={line.img} alt={line.en} width={160} height={160} className="h-12 w-12 shrink-0 rounded-xl object-cover" />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-green">{line.en}</p>
        <p dir="rtl" lang="ur" className="text-right font-urdu text-base leading-7 text-muted">
          {line.ur}
        </p>
      </div>
    </li>
  );
}

/** Full menu card for /menu — every item with its photo, Urdu first. */
export function MenuCardFull({ menu }: { menu: Menu }) {
  return (
    <article id={menu.id} className="glass-card scroll-mt-28 p-6 sm:p-7">
      <MainHeading menu={menu} big />
      <ul className="mt-5 grid gap-4">
        {menu.lines.map((line) => (
          <li key={line.en} className="flex items-center gap-4 border-b border-dashed border-line pb-4 last:border-b-0 last:pb-0">
            <Image
              src={line.img}
              alt={line.en}
              width={320}
              height={320}
              className="h-20 w-20 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0">
              <p dir="rtl" lang="ur" className="text-right font-urdu text-xl leading-9 text-green">
                {line.ur}
              </p>
              <p className="mt-0.5 text-sm text-muted">{line.en}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

/** Compact preview card for the home page — main heading + remaining items listed. */
export function MenuCardPreview({ menu }: { menu: Menu }) {
  return (
    <article className="glass-card flex flex-col p-6 sm:p-7">
      <MainHeading menu={menu} />
      <ul className="mt-4">
        {menu.lines.slice(1).map((line) => (
          <DishRow key={line.en} line={line} />
        ))}
      </ul>
      <p className="mt-auto pt-5">
        <Link
          href={`/menu#${menu.id}`}
          className="inline-block rounded-full border border-green px-4 py-2 text-sm font-bold text-green hover:bg-green hover:text-white"
        >
          View {menu.name}
        </Link>
      </p>
    </article>
  );
}

/** Extras card — every extra dish with its photo. */
export function ExtrasCard() {
  return (
    <article className="glass-card p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-serif text-3xl font-bold text-green">Extra Dishes</h3>
        <span dir="rtl" lang="ur" className="font-urdu text-2xl leading-10 text-gold-dark">
          اضافی ڈشز
        </span>
      </div>
      <p className="mt-2 text-muted">Additional items available alongside the menus above.</p>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {EXTRA_DISHES.map((dish) => (
          <div key={dish.en} className="overflow-hidden rounded-2xl border border-line bg-white">
            <Image src={dish.img} alt={dish.en} width={400} height={300} className="h-24 w-full object-cover" />
            <div className="p-2.5">
              <p className="truncate text-sm font-semibold text-green">{dish.en}</p>
              <p dir="rtl" lang="ur" className="text-right font-urdu text-base leading-7 text-muted">
                {dish.ur}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
