import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const VocalCollectionTracks: Track[] = [
  {
    title: "Beyond Fate (Trio Ver.)",
    title_id: "beyond-fate-trio-version",
    source: "/musics/beyond-fate-trio-version.mp3",
    duration: 228,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Everglow",
    title_id: "everglow",
    source: "/musics/everglow.mp3",
    duration: 231,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Lily 2",
    title_id: "lily-2",
    source: "/musics/lily-2.mp3",
    duration: 245,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Lily Rescues Eve",
    title_id: "lily-rescues-eve",
    source: "/musics/lily-rescues-eve.mp3",
    duration: 143,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Meet Lily",
    title_id: "meet-lily",
    source: "/musics/meet-lily.mp3",
    duration: 351,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Shelter",
    title_id: "shelter",
    source: "/musics/shelter.mp3",
    duration: 183,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Sisterly Love",
    title_id: "sisterly-love",
    source: "/musics/sisterly-love.mp3",
    duration: 246,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "The Song of Destiny",
    title_id: "the-song-of-destiny",
    source: "/musics/the-song-of-destiny.mp3",
    duration: 246,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "The Song of the Sirens",
    title_id: "the-song-of-the-sirens",
    source: "/musics/the-song-of-the-sirens.mp3",
    duration: 251,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "The Song of the Traveler",
    title_id: "the-song-of-the-traveler",
    source: "/musics/the-song-of-the-traveler.mp3",
    duration: 227,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "The Song of the Wanderer",
    title_id: "the-song-of-the-wanderer",
    source: "/musics/the-song-of-the-wanderer.mp3",
    duration: 204,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["vocal-collection"],
}));
