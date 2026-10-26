import { hall2Photo } from "@/lib/photos/hall2";
import { hall3Photo } from "@/lib/photos/hall3";
import { mainHallPhoto } from "@/lib/photos/mainHall";
import { marqueePhoto } from "@/lib/photos/marquee";
import { waLink } from "@/lib/site";

export type Hall = {
  id: string;
  name: string;
  image: string;
  alt: string;
  blurb: string;
  representative?: boolean;
  // DUMMY — capacities below are placeholders added 2026-10-26
  // (never supplied by the client). Replace with real figures before quoting customers.
  guests: string;
  badge?: string;
  amenities: string[];
};

export const HALLS: Hall[] = [
  {
    id: "main-hall",
    name: "Main Hall",
    image: mainHallPhoto,
    alt: "Main Hall at Rawayat Marquee & Marriage Hall",
    blurb: "The venue's main hall, with draped ceilings and lounge seating for your guests.",
    guests: "800",
    badge: "Most Loved",
    amenities: ["Valet Parking", "Power Backup", "Bridal Suite", "In-house Catering", "Central AC", "Prayer Area"],
  },
  {
    id: "hall-2",
    name: "Hall 2",
    image: hall2Photo,
    alt: "Hall 2 at Rawayat Marquee & Marriage Hall",
    blurb: "A second hall at the venue, set up with lounge seating and floral arrangements.",
    guests: "500",
    amenities: ["Central AC", "In-house Catering", "Power Backup", "Valet Parking"],
  },
  {
    id: "hall-3",
    name: "Hall 3",
    image: hall3Photo,
    alt: "Representative photo of a wedding hall",
    blurb: "A third hall at the venue.",
    representative: true,
    guests: "300",
    amenities: ["Central AC", "In-house Catering", "Power Backup"],
  },
  {
    id: "marquee",
    name: "Marquee",
    image: marqueePhoto,
    alt: "Representative photo of a wedding marquee",
    blurb: "The venue's marquee.",
    representative: true,
    guests: "1,200",
    badge: "Evening Favourite",
    amenities: ["Fairy-Light Decor", "Open-Air Seating", "Valet Parking", "Power Backup"],
  },
];

export function hallWaLink(hall: Hall): string {
  const label = hall.id === "marquee" ? "the Marquee" : hall.name;
  return waLink(
    `Assalam-o-Alaikum! I would like to inquire about ${label} at Rawayat Marquee & Marriage Hall.`,
  );
}
