import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const Eidos7Tracks: Track[] = [
  {
    title: "Eidos 7 Abandoned Station",
    title_id: "eidos-7-abandoned-station",
    source: "/musics/eidos-7-abandoned-station.mp3",
    duration: 175,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 - City Underground Sector (Combat)",
    title_id: "eidos-7-city-underground-sector-combat",
    source: "/musics/eidos-7-city-underground-sector-combat.mp3",
    duration: 193,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 City Underground Sector",
    title_id: "eidos-7-city-underground-sector",
    source: "/musics/eidos-7-city-underground-sector.mp3",
    duration: 190,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Clock Tower (Combat)",
    title_id: "eidos-7-clock-tower-combat",
    source: "/musics/eidos-7-clock-tower-combat.mp3",
    duration: 257,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Clock Tower",
    title_id: "eidos-7-clock-tower",
    source: "/musics/eidos-7-clock-tower.mp3",
    duration: 255,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Construction Zone 2",
    title_id: "eidos-7-construction-zone-2",
    source: "/musics/eidos-7-construction-zone-2.mp3",
    duration: 188,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Construction Zone (Combat)",
    title_id: "eidos-7-construction-zone-combat",
    source: "/musics/eidos-7-construction-zone-combat.mp3",
    duration: 325,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Construction Zone",
    title_id: "eidos-7-construction-zone",
    source: "/musics/eidos-7-construction-zone.mp3",
    duration: 218,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Monorail Station",
    title_id: "eidos-7-monorail-station",
    source: "/musics/eidos-7-monorail-station.mp3",
    duration: 242,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Monorail",
    title_id: "eidos-7-monorail",
    source: "/musics/eidos-7-monorail.mp3",
    duration: 89,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Parking Tower",
    title_id: "eidos-7-parking-tower",
    source: "/musics/eidos-7-parking-tower.mp3",
    duration: 279,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Silent Street (Combat)",
    title_id: "eidos-7-silent-street-combat",
    source: "/musics/eidos-7-silent-street-combat.mp3",
    duration: 348,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Eidos 7 Silent Street",
    title_id: "eidos-7-silent-street",
    source: "/musics/eidos-7-silent-street.mp3",
    duration: 347,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Flooded Commercial Sector (Bonus Track)",
    title_id: "flooded-commercial-sector-bonus-track",
    source: "/musics/flooded-commercial-sector-bonus-track.mp3",
    duration: 357,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Flooded Commercial Sector",
    title_id: "flooded-commercial-sector",
    source: "/musics/flooded-commercial-sector.mp3",
    duration: 304,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Intro Battle",
    title_id: "intro-battle",
    source: "/musics/intro-battle.mp3",
    duration: 479,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Intro Cinematic",
    title_id: "intro-cinematic",
    source: "/musics/intro-cinematic.mp3",
    duration: 152,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["eidos-7"],
}));
