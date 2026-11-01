import Link from "next/link";
import { EXTRA_DISHES, type Menu, type MenuLine } from "@/lib/menu-data";
import { Badge, Img, Reveal, StaggerItem } from "@/components/ui";

/* ---------- dish card with photo (menu catalog) ---------- */
export function DishCard({ line, index = 0 }: { line: MenuLine; index?: number }) {
  return (
    <StaggerItem index={index}>
      <article className="card dish-card h-full">
        <div className="card-img">
          <Img src={line.img} alt={line.en} width={640} height={400} />
        </div>
        <div className="card-body" style={{ padding: "12px 16px 16px" }}>
          <h4 title={line.en} className="truncate" style={{ fontSize: 15, marginBottom: 2 }}>
            {line.en}
          </h4>
          <p dir="rtl" lang="ur" className="font-urdu" style={{ textAlign: "right", fontSize: 15, color: "var(--color-ink-400)", margin: 0, lineHeight: 1.9 }}>
            {line.ur}
          </p>
        </div>
      </article>
    </StaggerItem>
  );
}

/* ---------- package-style card (menu page top + home preview) ---------- */
export function MenuPackageCard({ menu, index = 0, compact = false }: { menu: Menu; index?: number; compact?: boolean }) {
  const first = menu.lines[0];
  const rest = menu.lines.slice(1);
  return (
    <StaggerItem index={index}>
      <article className="card pkg-card h-full">
        <div className="card-img">
          <Img src={first.img} alt={`${menu.name} — ${first.en}`} width={800} height={500} />
        </div>
        <div className="card-body">
          <p className="eyebrow" style={{ marginBottom: 4 }}>
            <span className="rule" />
            {menu.name}
          </p>
          <h3 className="card-title" style={{ fontSize: 22 }}>{first.en}</h3>
          <p dir="rtl" lang="ur" className="font-urdu" style={{ textAlign: "right", fontSize: 16, color: "var(--color-champagne-600)", margin: "0 0 10px", lineHeight: 1.9 }}>
            {first.ur}
          </p>
          {!compact && (
            <ul className="why-list small" style={{ marginBottom: 16 }}>
              {rest.slice(0, 5).map((l) => (
                <li key={l.en}>{l.en}</li>
              ))}
              {rest.length > 5 && <li className="muted">+{rest.length - 5} more dishes</li>}
            </ul>
          )}
          <Link href={`/menu#${menu.id}`} className="btn btn-outline btn-sm btn-block">
            View Full Menu
          </Link>
        </div>
      </article>
    </StaggerItem>
  );
}

/* ---------- home showcase card: headings + text-only item list ---------- */
export function MenuPreviewCard({ menu, index = 0, tint = "" }: { menu: Menu; index?: number; tint?: string }) {
  const first = menu.lines[0];
  return (
    <StaggerItem index={index}>
      <article className={`card h-full${tint ? ` ${tint}` : ""}`}>
        <div className="card-body">
          <p className="eyebrow" style={{ marginBottom: 4 }}>
            <span className="rule" />
            {menu.name}
          </p>
          <h3 style={{ fontSize: 22, marginBottom: 2 }}>{first.en}</h3>
          <p dir="rtl" lang="ur" className="font-urdu" style={{ textAlign: "right", fontSize: 16, color: "var(--color-champagne-600)", margin: "0 0 8px", lineHeight: 1.9 }}>
            {first.ur}
          </p>
          <ul style={{ listStyle: "none", margin: "0 0 14px", padding: 0 }}>
            {menu.lines.slice(1).map((line) => (
              <li
                key={line.en}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "7px 0",
                  borderBottom: "1px dashed var(--color-cream-300)",
                  fontSize: 13.5,
                }}
              >
                <span title={line.en} className="truncate" style={{ minWidth: 0, flex: "1 1 auto" }}>{line.en}</span>
                <span dir="rtl" lang="ur" className="font-urdu" style={{ flex: "0 1 auto", minWidth: 0, textAlign: "right", fontSize: 14, color: "var(--color-ink-400)", lineHeight: 1.9 }}>
                  {line.ur}
                </span>
              </li>
            ))}
          </ul>
          <Link href={`/menu#${menu.id}`} className="btn btn-outline btn-sm">
            View {menu.name}
          </Link>
        </div>
      </article>
    </StaggerItem>
  );
}

/* ---------- full catalog section for one menu ---------- */
export function MenuCatalogSection({ menu }: { menu: Menu }) {
  const first = menu.lines[0];
  return (
    <section id={menu.id} style={{ marginBottom: 52, scrollMarginTop: 90 }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 4 }}>
          <h3 style={{ margin: 0, fontSize: "clamp(22px, 3vw, 30px)" }}>{menu.name}</h3>
          <span className="brandline" style={{ marginBottom: 0, flex: 1 }} />
          <span className="small muted">{menu.lines.length} items</span>
        </div>
      </Reveal>
      <Reveal>
        <p className="muted" style={{ marginBottom: 18 }}>
          {first.en}{" "}
          <span dir="rtl" lang="ur" className="font-urdu" style={{ color: "var(--color-champagne-600)", fontSize: 15 }}>
            {first.ur}
          </span>
        </p>
      </Reveal>
      <div className="grid-dishes">
        {menu.lines.map((line, i) => (
          <DishCard key={line.en} line={line} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ---------- extras catalog ---------- */
export function ExtrasCatalog() {
  return (
    <section style={{ marginBottom: 8 }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 4 }}>
          <h3 style={{ margin: 0, fontSize: "clamp(22px, 3vw, 30px)" }}>Extra Dishes</h3>
          <span className="brandline" style={{ marginBottom: 0, flex: 1 }} />
          <span className="small muted">{EXTRA_DISHES.length} items</span>
        </div>
      </Reveal>
      <Reveal>
        <p dir="rtl" lang="ur" className="font-urdu" style={{ textAlign: "right", fontSize: 17, color: "var(--color-champagne-600)", marginBottom: 18 }}>
          اضافی ڈشز
        </p>
      </Reveal>
      <div className="grid-dishes">
        {EXTRA_DISHES.map((dish, i) => (
          <DishCard key={dish.en} line={dish} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ---------- extras card for the home page ---------- */
export function ExtrasCard() {
  return (
    <Reveal>
      <article className="card">
        <div className="card-body">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
            <h3 style={{ marginBottom: 2 }}>Extra Dishes</h3>
            <span dir="rtl" lang="ur" className="font-urdu" style={{ fontSize: 18, color: "var(--color-champagne-600)" }}>
              اضافی ڈشز
            </span>
          </div>
          <p className="muted small" style={{ marginBottom: 16 }}>
            Additional items available alongside the menus above.
          </p>
          <div className="grid-dishes">
            {EXTRA_DISHES.map((dish, i) => (
              <DishCard key={dish.en} line={dish} index={i} />
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ---------- hall badges ---------- */
export function HallBadges({ guests }: { guests: string }) {
  return (
    <span style={{ display: "inline-flex", flexWrap: "wrap", gap: 8 }}>
      <Badge tone="green">{guests} guests</Badge>
      <Badge tone="gold">Indoor</Badge>
    </span>
  );
}
