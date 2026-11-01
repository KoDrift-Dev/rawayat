import Link from "next/link";
import { LOCATION, MAPS_URL, NAV, PHONE_DISPLAY, PHONE_TEL, WA_GENERAL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>Rawayat Marquee &amp; Marriage Hall</h4>
          <p className="small" style={{ color: "#B9B29C", maxWidth: 340 }}>
            A wedding venue in Kharian, Punjab, Pakistan — four halls and three wedding menus. Contact the venue
            directly for your celebration.
          </p>
          <p className="small" style={{ color: "#B9B29C" }}>
            <a href={PHONE_TEL} style={{ display: "inline" }}>
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={MAPS_URL} target="_blank" rel="noreferrer">
            {LOCATION}
          </a>
          <a href={WA_GENERAL} target="_blank" rel="noreferrer">
            WhatsApp Us
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer">
            Get Directions on Google Maps
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Rawayat Marquee &amp; Marriage Hall, Kharian. Enquiries only — no online booking.
        <br />
        Designed by{" "}
        <a href="https://kodriftdev.vercel.app" target="_blank" rel="noreferrer">
          KoDriftDev
        </a>
      </div>
    </footer>
  );
}
