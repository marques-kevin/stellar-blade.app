import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const GreatDesertTracks: Track[] = [
  {
    title: "Great Desert 1",
    title_id: "great-desert-1",
    source: "/musics/great-desert-1.mp3",
    duration: 243,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Great Desert 2",
    title_id: "great-desert-2",
    source: "/musics/great-desert-2.mp3",
    duration: 1940,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Great Desert 3",
    title_id: "great-desert-3",
    source: "/musics/great-desert-3.mp3",
    duration: 1286,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["great-desert"],
}));
