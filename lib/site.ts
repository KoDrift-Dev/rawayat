export const PHONE_DISPLAY = "+92 300 0441286";
export const PHONE_TEL = "tel:+923000441286";
// Address + hours below come from a public directory listing for this venue
// (Kharian Dinga Rd, Channan, same phone number) — NOT confirmed by the client yet.
export const LOCATION = "Kharian Dinga Rd, Channan, Kharian, Punjab, Pakistan";
export const HOURS = "Open daily, 9:00 AM – 10:00 PM";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rawayat%20Maarquee%20%26%20Marrriage%20Hall%2C%20Kharian%2C%20Punjab%2C%20Pakistan";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Rawayat%20Maarquee%20%26%20Marrriage%20Hall%2C%20Kharian%2C%20Punjab%2C%20Pakistan&output=embed";

export function waLink(message: string): string {
  return `https://wa.me/923000441286?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL = waLink(
  "Assalam-o-Alaikum! I would like to inquire about Rawayat Marquee & Marriage Hall.",
);
export const WA_DATE = waLink(
  "Assalam-o-Alaikum! I would like to check date availability at Rawayat Marquee & Marriage Hall.",
);
export const WA_MENU = waLink(
  "Assalam-o-Alaikum! I would like to inquire about the wedding menu and packages at Rawayat Marquee & Marriage Hall.",
);

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/halls", label: "Halls" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
];

// DUMMY — function descriptions below are generic marketing copy added 2026-10-26,
// not supplied by the client.
export const FUNCTIONS = [
  { name: "Barat", desc: "A grand hall, a royal stage and full catering for your big day." },
  { name: "Walima", desc: "An elegant reception setup with a premium menu." },
  { name: "Mehndi", desc: "Colourful decor, a lively setup and a night to remember." },
  { name: "Nikah", desc: "A peaceful, beautiful and dignified ceremony." },
  { name: "Reception", desc: "A relaxed, classy gathering for both families." },
  { name: "Engagement", desc: "Perfect for a small, sweet and memorable celebration." },
];
