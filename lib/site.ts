export const PHONE_DISPLAY = "+92 300 0441286";
export const PHONE_TEL = "tel:+923000441286";
export const LOCATION = "Kharian, Punjab, Pakistan";
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
export const WA_MENU = waLink(
  "Assalam-o-Alaikum! I would like to inquire about the wedding menu and packages at Rawayat Marquee & Marriage Hall.",
);

export type Hall = {
  id: string;
  name: string;
  image: string;
  alt: string;
  blurb: string;
  representative?: boolean;
};

export const HALLS: Hall[] = [
  {
    id: "main-hall",
    name: "Main Hall",
    image: "/images/main-hall.jpg",
    alt: "Main Hall at Rawayat Marquee & Marriage Hall",
    blurb: "The venue's main hall, with draped ceilings and lounge seating for your guests.",
  },
  {
    id: "hall-2",
    name: "Hall 2",
    image: "/images/hall-2.jpg",
    alt: "Hall 2 at Rawayat Marquee & Marriage Hall",
    blurb: "A second hall at the venue, set up with lounge seating and floral arrangements.",
  },
  {
    id: "hall-3",
    name: "Hall 3",
    image: "/images/hall-3.jpg",
    alt: "Representative photo of a wedding hall",
    blurb: "A third hall at the venue.",
    representative: true,
  },
  {
    id: "marquee",
    name: "Marquee",
    image: "/images/marquee.jpg",
    alt: "Representative photo of a wedding marquee",
    blurb: "The venue's marquee.",
    representative: true,
  },
];

export function hallWaLink(hall: Hall): string {
  const label = hall.id === "marquee" ? "the Marquee" : hall.name;
  return waLink(
    `Assalam-o-Alaikum! I would like to inquire about ${label} at Rawayat Marquee & Marriage Hall.`,
  );
}

export type MenuLine = { en: string; ur: string };
export type Menu = { id: string; name: string; lines: MenuLine[] };

const COMMON_LINES: MenuLine[] = [
  { en: "Chicken Biryani / Chicken Fried Rice", ur: "چکن بریانی / چکن فرائیڈ رائس" },
  { en: "Kheer / Fruit Trifle / Gajar ka Halwa / Matanjan", ur: "کھیر / فروٹ ٹرائیفل / گاجر کا حلوہ / متنجن" },
  { en: "Fresh Salad", ur: "فریش سلاد" },
  { en: "Raita", ur: "رائتہ" },
  { en: "Bottle", ur: "بوتل" },
  { en: "Tandoori Roti / Roghni Naan / Manday", ur: "تندوری روٹی / روغنی نان / منڈے" },
];

export const MENUS: Menu[] = [
  {
    id: "menu-1",
    name: "Menu 1",
    lines: [{ en: "Mutton Qorma / Mutton Karahi", ur: "مٹن قورمہ / مٹن کڑاہی" }, ...COMMON_LINES],
  },
  {
    id: "menu-2",
    name: "Menu 2",
    lines: [{ en: "Beef Qorma / Beef Karahi", ur: "بیف قورمہ / بیف کڑاہی" }, ...COMMON_LINES],
  },
  {
    id: "menu-3",
    name: "Menu 3",
    lines: [{ en: "Chicken Karahi / Chicken Qorma", ur: "چکن کڑاہی / چکن قورمہ" }, ...COMMON_LINES],
  },
];

export function menuWaLink(menu: Menu): string {
  return waLink(
    `Assalam-o-Alaikum! I would like to inquire about ${menu.name} at Rawayat Marquee & Marriage Hall.`,
  );
}

export const EXTRA_DISHES: MenuLine[] = [
  { en: "Chicken Steam Roast", ur: "چکن اسٹیم روسٹ" },
  { en: "Chicken Pakora", ur: "چکن پکوڑہ" },
  { en: "Chicken Seekh Kabab", ur: "چکن سیخ کباب" },
  { en: "Chicken Tikka Boti", ur: "چکن تکہ بوٹی" },
  { en: "Fried Fish", ur: "فرائی فش" },
  { en: "Soup", ur: "سوپ" },
  { en: "Russian Salad", ur: "رشین سلاد" },
  { en: "Variety Salad", ur: "ورائٹی سلاد" },
  { en: "Kashmiri Chai", ur: "کشمیری چائے" },
  { en: "Juice", ur: "جوس" },
  { en: "Petha Halwa", ur: "پیٹھا حلوہ" },
  { en: "Anda Halwa", ur: "انڈہ حلوہ" },
  { en: "Ice Cream", ur: "آئس کریم" },
  { en: "Gulab Jamun", ur: "گلاب جامن" },
  { en: "Mineral Water", ur: "منرل واٹر" },
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/halls", label: "Halls" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
];
