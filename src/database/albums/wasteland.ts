import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const WastelandTracks: Track[] = [
  {
    title: "Ambush 2",
    title_id: "ambush-2",
    source: "/musics/ambush-2.mp3",
    duration: 221,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Ambush",
    title_id: "ambush",
    source: "/musics/ambush.mp3",
    duration: 309,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Nest",
    title_id: "nest",
    source: "/musics/nest.mp3",
    duration: 138,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Scrapyard",
    title_id: "scrapyard",
    source: "/musics/scrapyard.mp3",
    duration: 172,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Train Graveyard",
    title_id: "train-graveyard",
    source: "/musics/train-graveyard.mp3",
    duration: 243,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Wasteland 2",
    title_id: "wasteland-2",
    source: "/musics/wasteland-2.mp3",
    duration: 1082,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Wasteland 3",
    title_id: "wasteland-3",
    source: "/musics/wasteland-3.mp3",
    duration: 301,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Wasteland (Combat)",
    title_id: "wasteland-combat",
    source: "/musics/wasteland-combat.mp3",
    duration: 209,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Wasteland",
    title_id: "wasteland",
    source: "/musics/wasteland.mp3",
    duration: 123,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["wasteland"],
}));
