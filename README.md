# Rawayat Marquee & Marriage Hall — Website

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript. Fast,
fully static site: `next build` prerenders every page (`output: "export"`),
so the result in `out/` can be hosted anywhere — Vercel, Netlify, or any
static host. No booking system, no admin panel, no payments, no accounts,
no backend, no unnecessary dependencies.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # prerenders to out/
npm start        # serve the production build
```

For Vercel: import this folder as a Next.js project — it will build and
deploy automatically. (Auto-deploy is off for OrderKar only; this project has
no such rule yet — confirm before connecting it if you want manual deploys.)

## Routes
- `/` — Home: hero (cover photo), welcome, halls, menu preview, about preview, location & contact with Google Maps embed
- `/halls` — Main Hall, Hall 2, Hall 3, Marquee + interiors
- `/menu` — Menu 1, Menu 2, Menu 3 (English + Urdu, RTL) + Extra Dishes
- `/about` — About, logo, interiors, contact

All shared content (phone, WhatsApp links, halls, menus, extras) lives in
one place: `lib/site.ts`. Layout, header, footer and floating WhatsApp
button are shared components in `components/`. The old plain-HTML version
is kept for reference in `legacy-static/` — it is not served by Next.js.

## Contact (every page)
- Phone: +92 300 0441286 (`tel:+923000441286`)
- WhatsApp: `https://wa.me/923000441286` with a pre-filled message; hall and
  menu buttons include the hall / menu name in the message
- Floating WhatsApp button, bottom-right, on every page
- Google Maps directions link (as supplied by the client)

## Photos — data URLs, not binary files
GitHub's MCP snapshot push is text-only and rejects binary files, so the
site does NOT load photos from `public/images/` at runtime. Instead, photos
ship as data URLs in `lib/photos/` (one generated `.ts` file per photo,
WebP quality 82; the transparent logo stays PNG). All components and pages
import from there — there are no `/images/*` references left in the code.

Source photos (the originals, for reference and regeneration only):
`public/images/` — logo.png, logo-light.jpg, cover.jpg, stage.jpg,
main-hall.jpg, hall-2.jpg, hall-3.jpg, marquee.jpg, interior-1/2/3.jpg.
These are NOT pushed to GitHub and are NOT needed by the deployed site.

To update a photo: replace the file in `public/images/` (same filename),
run `python3 scripts/generate-photos.py`, rebuild, and push. The script
regenerates `lib/photos/*.ts`.

Representative images for now (NOT the venue's own photos — marked as such
on the site, to be replaced):
- `hall-3.jpg` — wedding hall photo from the web
- `marquee.jpg` — wedding marquee photo from the web

To replace either: drop the venue photo in as `hall-3.jpg` / `marquee.jpg`
in `public/images/`, regenerate with the script above, and delete the
"Representative photo" notes in `app/page.tsx` and `app/halls/page.tsx`.

`app/icon.png` (favicon source) is also binary and is not pushed; the
deployed site simply has no custom favicon until one is added as SVG/text.

## Menu — no prices, nothing invented
Menus are transcribed exactly as supplied (Urdu + English). A slash (/)
separates the options listed on a line. No prices were supplied, so none
are shown. If prices or hall capacities/facilities are confirmed later,
add them to `lib/site.ts` — do not guess them.

## Design
Ivory / warm white, deep green, subtle gold. Fonts via `next/font/google`
(Cormorant Garamond headings, Inter body, Noto Nastaliq Urdu for Urdu text)
— self-hosted by Next.js, no render-blocking font requests. No heavy
animations; images are lazy-loaded except the hero, which is prioritised.
