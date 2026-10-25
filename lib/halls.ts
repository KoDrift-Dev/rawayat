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
};

export const HALLS: Hall[] = [
  {
    id: "main-hall",
    name: "Main Hall",
    image: mainHallPhoto,
    alt: "Main Hall at Rawayat Marquee & Marriage Hall",
    blurb: "The venue's main hall, with draped ceilings and lounge seating for your guests.",
  },
  {
    id: "hall-2",
    name: "Hall 2",
    image: hall2Photo,
    alt: "Hall 2 at Rawayat Marquee & Marriage Hall",
    blurb: "A second hall at the venue, set up with lounge seating and floral arrangements.",
  },
  {
    id: "hall-3",
    name: "Hall 3",
    image: hall3Photo,
    alt: "Representative photo of a wedding hall",
    blurb: "A third hall at the venue.",
    representative: true,
  },
  {
    id: "marquee",
    name: "Marquee",
    image: marqueePhoto,
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
