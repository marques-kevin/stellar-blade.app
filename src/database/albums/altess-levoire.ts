import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const AltessLevoireTracks: Track[] = [
  {
    title: "Altess Levoire 2 (Combat)",
    title_id: "altess-levoire-2-combat",
    source: "/musics/altess-levoire-2-combat.mp3",
    duration: 212,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Altess Levoire 2",
    title_id: "altess-levoire-2",
    source: "/musics/altess-levoire-2.mp3",
    duration: 212,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Altess Levoire Air Vent",
    title_id: "altess-levoire-air-vent",
    source: "/musics/altess-levoire-air-vent.mp3",
    duration: 172,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Altess Levoire (Combat)",
    title_id: "altess-levoire-combat",
    source: "/musics/altess-levoire-combat.mp3",
    duration: 263,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Altess Levoire",
    title_id: "altess-levoire",
    source: "/musics/altess-levoire.mp3",
    duration: 264,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["altess-levoire"],
}));
