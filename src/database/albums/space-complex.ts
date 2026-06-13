import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const SpaceComplexTracks: Track[] = [
  {
    title: "Raphael Space Center (Combat)",
    title_id: "raphael-space-center-combat",
    source: "/musics/raphael-space-center-combat.mp3",
    duration: 419,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Raphael Space Center Entrance",
    title_id: "raphael-space-center-entrance",
    source: "/musics/raphael-space-center-entrance.mp3",
    duration: 234,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Raphael Space Center",
    title_id: "raphael-space-center",
    source: "/musics/raphael-space-center.mp3",
    duration: 421,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Space Complex Entryway (Combat)",
    title_id: "space-complex-entryway-combat",
    source: "/musics/space-complex-entryway-combat.mp3",
    duration: 244,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Space Complex Entryway",
    title_id: "space-complex-entryway",
    source: "/musics/space-complex-entryway.mp3",
    duration: 244,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Space Logistics Complex 2",
    title_id: "space-logistics-complex-2",
    source: "/musics/space-logistics-complex-2.mp3",
    duration: 236,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Space Logistics Complex (Combat)",
    title_id: "space-logistics-complex-combat",
    source: "/musics/space-logistics-complex-combat.mp3",
    duration: 113,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Space Logistics Complex",
    title_id: "space-logistics-complex",
    source: "/musics/space-logistics-complex.mp3",
    duration: 225,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["space-complex"],
}));
