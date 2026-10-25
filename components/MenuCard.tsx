import Link from "next/link";
import { EXTRA_DISHES, type Menu } from "@/lib/site";

function CardHeader({ menu }: { menu: Menu }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <h3 className="font-serif text-3xl font-bold text-green">{menu.name}</h3>
      <span dir="rtl" lang="ur" className="font-urdu text-2xl leading-10 text-gold-dark">
        مینیو {menu.name.replace("Menu ", "")}
      </span>
    </div>
  );
}

/** Full menu card for /menu — Urdu first, English underneath, glass + clay style. */
export function MenuCardFull({ menu }: { menu: Menu }) {
  return (
    <article id={menu.id} className="glass-card scroll-mt-28 p-6 sm:p-7">
      <CardHeader menu={menu} />
      <ul className="mt-5 grid gap-4">
        {menu.lines.map((line) => (
          <li key={line.en} className="border-b border-dashed border-line pb-4 last:border-b-0 last:pb-0">
            <p dir="rtl" lang="ur" className="text-right font-urdu text-xl leading-10 text-green">
              {line.ur}
            </p>
            <p className="mt-0.5 text-sm text-muted">{line.en}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

/** Compact preview card for the home page — full menu in Urdu first, then English summary. */
export function MenuCardPreview({ menu }: { menu: Menu }) {
  const urduText = `${menu.lines.map((line) => line.ur).join("، ")}۔`;
  const englishText = `${menu.lines.map((line) => line.en).join(", ")}.`;
  return (
    <article className="glass-card flex flex-col p-6 sm:p-7">
      <CardHeader menu={menu} />
      <p dir="rtl" lang="ur" className="mt-4 text-right font-urdu text-lg leading-9 text-green">
        {urduText}
      </p>
      <p className="mt-3 text-sm text-muted">{englishText}</p>
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

/** Extras card — used on the home page preview and styled the same on /menu. */
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
      <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
        {EXTRA_DISHES.map((dish) => (
          <li
            key={dish.en}
            className="flex items-baseline justify-between gap-3 border-b border-dashed border-line py-2"
          >
            <span className="text-sm text-muted">{dish.en}</span>
            <span dir="rtl" lang="ur" className="text-right font-urdu text-lg leading-8 text-green">
              {dish.ur}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
