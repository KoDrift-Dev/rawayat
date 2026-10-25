import Link from "next/link";
import { LOCATION, MAPS_URL, NAV, PHONE_DISPLAY, PHONE_TEL, WA_GENERAL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-green-dark text-[#dfe8df]">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-7">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h3 className="font-serif text-2xl text-white">Rawayat Marquee &amp; Marriage Hall</h3>
            <p className="mt-2 max-w-md">
              A wedding venue in Kharian, Punjab, Pakistan, with four halls and three wedding menus — contact the venue
              directly for your celebration.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-white">Explore</h3>
            <ul className="mt-3 grid gap-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#e9e2cf] hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-white">Contact</h3>
            <ul className="mt-3 grid gap-2">
              <li>{LOCATION}</li>
              <li>
                <a href={PHONE_TEL} className="text-[#e9e2cf] hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="text-[#e9e2cf] hover:underline">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-[#e9e2cf] hover:underline">
                  Get Directions on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-9 flex flex-wrap justify-between gap-3 border-t border-white/15 pt-4 text-sm text-[#b9c6ba]">
          <span>© {new Date().getFullYear()} Rawayat Marquee &amp; Marriage Hall, Kharian.</span>
          <span>Enquiries only — no online booking.</span>
        </div>
      </div>
    </footer>
  );
}
