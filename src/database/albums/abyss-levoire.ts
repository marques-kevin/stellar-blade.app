import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const AbyssLevoireTracks: Track[] = [
  {
    title: "Abyss Levoire 2",
    title_id: "abyss-levoire-2",
    source: "/musics/abyss-levoire-2.mp3",
    duration: 227,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Abyss Levoire (Combat) 2",
    title_id: "abyss-levoire-combat-2",
    source: "/musics/abyss-levoire-combat-2.mp3",
    duration: 228,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Abyss Levoire (Combat) 3",
    title_id: "abyss-levoire-combat-3",
    source: "/musics/abyss-levoire-combat-3.mp3",
    duration: 185,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Abyss Levoire (Combat)",
    title_id: "abyss-levoire-combat",
    source: "/musics/abyss-levoire-combat.mp3",
    duration: 420,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Abyss Levoire",
    title_id: "abyss-levoire",
    source: "/musics/abyss-levoire.mp3",
    duration: 424,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["abyss-levoire"],
}));
