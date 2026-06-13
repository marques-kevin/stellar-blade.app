import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const Matrix11Tracks: Track[] = [
  {
    title: "Matrix 11 (Combat) 2",
    title_id: "matrix-11-combat-2",
    source: "/musics/matrix-11-combat-2.mp3",
    duration: 279,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Matrix 11 (Combat)",
    title_id: "matrix-11-combat",
    source: "/musics/matrix-11-combat.mp3",
    duration: 225,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Matrix 11 Rail Yard",
    title_id: "matrix-11-rail-yard",
    source: "/musics/matrix-11-rail-yard.mp3",
    duration: 363,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Matrix 11 Rotten Labyrinth (Combat)",
    title_id: "matrix-11-rotten-labyrinth-combat",
    source: "/musics/matrix-11-rotten-labyrinth-combat.mp3",
    duration: 270,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Matrix 11 Rotten Labyrinth",
    title_id: "matrix-11-rotten-labyrinth",
    source: "/musics/matrix-11-rotten-labyrinth.mp3",
    duration: 271,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Matrix 11 Underground Sewer (Combat)",
    title_id: "matrix-11-underground-sewer-combat",
    source: "/musics/matrix-11-underground-sewer-combat.mp3",
    duration: 371,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Matrix 11",
    title_id: "matrix-11",
    source: "/musics/matrix-11.mp3",
    duration: 175,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["matrix-11"],
}));
