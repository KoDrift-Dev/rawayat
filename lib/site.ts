import {
  dishAndaHalwa, dishBeefQorma, dishBottle, dishChickenBiryani, dishChickenKarahi,
  dishDessert, dishFreshSalad, dishFriedFish, dishGulabJamun, dishIceCream, dishJuice,
  dishKashmiriChai, dishMineralWater, dishMuttonQorma, dishPakora, dishPethaHalwa,
  dishRaita, dishRoti, dishRussianSalad, dishSeekhKabab, dishSoup, dishSteamRoast,
  dishTikkaBoti, dishVarietySalad,
} from "@/lib/photos/dishes";

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

export type MenuLine = { en: string; ur: string; img: string };
export type Menu = { id: string; name: string; lines: MenuLine[] };

const COMMON_LINES: MenuLine[] = [
  { en: "Chicken Biryani / Chicken Fried Rice", ur: "چکن بریانی / چکن فرائیڈ رائس", img: dishChickenBiryani },
  { en: "Kheer / Fruit Trifle / Gajar ka Halwa / Matanjan", ur: "کھیر / فروٹ ٹرائیفل / گاجر کا حلوہ / متنجن", img: dishDessert },
  { en: "Fresh Salad", ur: "فریش سلاد", img: dishFreshSalad },
  { en: "Raita", ur: "رائتہ", img: dishRaita },
  { en: "Bottle", ur: "بوتل", img: dishBottle },
  { en: "Tandoori Roti / Roghni Naan / Manday", ur: "تندوری روٹی / روغنی نان / منڈے", img: dishRoti },
];

export const MENUS: Menu[] = [
  {
    id: "menu-1",
    name: "Menu 1",
    lines: [{ en: "Mutton Qorma / Mutton Karahi", ur: "مٹن قورمہ / مٹن کڑاہی", img: dishMuttonQorma }, ...COMMON_LINES],
  },
  {
    id: "menu-2",
    name: "Menu 2",
    lines: [{ en: "Beef Qorma / Beef Karahi", ur: "بیف قورمہ / بیف کڑاہی", img: dishBeefQorma }, ...COMMON_LINES],
  },
  {
    id: "menu-3",
    name: "Menu 3",
    lines: [{ en: "Chicken Karahi / Chicken Qorma", ur: "چکن کڑاہی / چکن قورمہ", img: dishChickenKarahi }, ...COMMON_LINES],
  },
];

export function menuWaLink(menu: Menu): string {
  return waLink(
    `Assalam-o-Alaikum! I would like to inquire about ${menu.name} at Rawayat Marquee & Marriage Hall.`,
  );
}

export const EXTRA_DISHES: MenuLine[] = [
  { en: "Chicken Steam Roast", ur: "چکن اسٹیم روسٹ", img: dishSteamRoast },
  { en: "Chicken Pakora", ur: "چکن پکوڑہ", img: dishPakora },
  { en: "Chicken Seekh Kabab", ur: "چکن سیخ کباب", img: dishSeekhKabab },
  { en: "Chicken Tikka Boti", ur: "چکن تکہ بوٹی", img: dishTikkaBoti },
  { en: "Fried Fish", ur: "فرائی فش", img: dishFriedFish },
  { en: "Soup", ur: "سوپ", img: dishSoup },
  { en: "Russian Salad", ur: "رشین سلاد", img: dishRussianSalad },
  { en: "Variety Salad", ur: "ورائٹی سلاد", img: dishVarietySalad },
  { en: "Kashmiri Chai", ur: "کشمیری چائے", img: dishKashmiriChai },
  { en: "Juice", ur: "جوس", img: dishJuice },
  { en: "Petha Halwa", ur: "پیٹھا حلوہ", img: dishPethaHalwa },
  { en: "Anda Halwa", ur: "انڈہ حلوہ", img: dishAndaHalwa },
  { en: "Ice Cream", ur: "آئس کریم", img: dishIceCream },
  { en: "Gulab Jamun", ur: "گلاب جامن", img: dishGulabJamun },
  { en: "Mineral Water", ur: "منرل واٹر", img: dishMineralWater },
];

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
