import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const Eidos9Tracks: Track[] = [
  {
    title: "Eidos 9 (Combat)",
    title_id: "eidos-9-combat",
    source: "/musics/eidos-9-combat.mp3",
    duration: 292,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 9 Fallen Overpass",
    title_id: "eidos-9-fallen-overpass",
    source: "/musics/eidos-9-fallen-overpass.mp3",
    duration: 627,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 9 Roller Coaster",
    title_id: "eidos-9-roller-coaster",
    source: "/musics/eidos-9-roller-coaster.mp3",
    duration: 175,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["eidos-9"],
}));
