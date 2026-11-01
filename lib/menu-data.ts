// Menu data (names as supplied by the client, no prices). Imports dish photos —
// only import this module from menu pages/components so the photos stay out of
// the common JS chunk.
import {
  aiFriedFish, aiRaita, aiRussianSalad, aiSalad, foodBbq, foodBiryani, foodDessert,
  foodDrinks, foodKarahi, foodNaan, soupPhoto,
} from "@/lib/photos/dishes";
import { waLink } from "@/lib/site";

export type MenuLine = { en: string; ur: string; img: string };
export type Menu = { id: string; name: string; lines: MenuLine[] };

const COMMON_LINES: MenuLine[] = [
  { en: "Chicken Biryani / Chicken Fried Rice", ur: "چکن بریانی / چکن فرائیڈ رائس", img: foodBiryani },
  { en: "Kheer / Fruit Trifle / Gajar ka Halwa / Matanjan", ur: "کھیر / فروٹ ٹرائیفل / گاجر کا حلوہ / متنجن", img: foodDessert },
  { en: "Fresh Salad", ur: "فریش سلاد", img: aiSalad },
  { en: "Raita", ur: "رائتہ", img: aiRaita },
  { en: "Bottle", ur: "بوتل", img: foodDrinks },
  { en: "Tandoori Roti / Roghni Naan / Manday", ur: "تندوری روٹی / روغنی نان / منڈے", img: foodNaan },
];

export const MENUS: Menu[] = [
  {
    id: "menu-1",
    name: "Menu 1",
    lines: [{ en: "Mutton Qorma / Mutton Karahi", ur: "مٹن قورمہ / مٹن کڑاہی", img: foodKarahi }, ...COMMON_LINES],
  },
  {
    id: "menu-2",
    name: "Menu 2",
    lines: [{ en: "Beef Qorma / Beef Karahi", ur: "بیف قورمہ / بیف کڑاہی", img: foodKarahi }, ...COMMON_LINES],
  },
  {
    id: "menu-3",
    name: "Menu 3",
    lines: [{ en: "Chicken Karahi / Chicken Qorma", ur: "چکن کڑاہی / چکن قورمہ", img: foodKarahi }, ...COMMON_LINES],
  },
];

export function menuWaLink(menu: Menu): string {
  return waLink(
    `Assalam-o-Alaikum! I would like to inquire about ${menu.name} at Rawayat Marquee & Marriage Hall.`,
  );
}

export const EXTRA_DISHES: MenuLine[] = [
  { en: "Chicken Steam Roast", ur: "چکن اسٹیم روسٹ", img: foodBbq },
  { en: "Chicken Pakora", ur: "چکن پکوڑہ", img: foodBbq },
  { en: "Chicken Seekh Kabab", ur: "چکن سیخ کباب", img: foodBbq },
  { en: "Chicken Tikka Boti", ur: "چکن تکہ بوٹی", img: foodBbq },
  { en: "Fried Fish", ur: "فرائی فش", img: aiFriedFish },
  { en: "Soup", ur: "سوپ", img: soupPhoto },
  { en: "Russian Salad", ur: "رشین سلاد", img: aiRussianSalad },
  { en: "Variety Salad", ur: "ورائٹی سلاد", img: aiSalad },
  { en: "Kashmiri Chai", ur: "کشمیری چائے", img: foodDrinks },
  { en: "Juice", ur: "جوس", img: foodDrinks },
  { en: "Petha Halwa", ur: "پیٹھا حلوہ", img: foodDessert },
  { en: "Anda Halwa", ur: "انڈہ حلوہ", img: foodDessert },
  { en: "Ice Cream", ur: "آئس کریم", img: foodDessert },
  { en: "Gulab Jamun", ur: "گلاب جامن", img: foodDessert },
  { en: "Mineral Water", ur: "منرل واٹر", img: foodDrinks },
];
